import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

// A second, independent NextAuth instance for customer (ticket portal) logins.
// Every cookie is renamed so this session can never be confused with, or
// overwrite, the admin panel's session from `lib/auth.ts` in the same browser.
export const customerAuthOptions: AuthOptions = {
    session: { strategy: "jwt" },
    pages: {
        signIn: "/login",
    },
    cookies: {
        sessionToken: {
            name: "customer-session-token",
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                secure: process.env.NODE_ENV === "production",
            },
        },
        csrfToken: {
            name: "customer-csrf-token",
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                secure: process.env.NODE_ENV === "production",
            },
        },
        callbackUrl: {
            name: "customer-callback-url",
            options: {
                sameSite: "lax",
                path: "/",
                secure: process.env.NODE_ENV === "production",
            },
        },
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    return null;
                }

                const customer = await prisma.customer.findUnique({
                    where: { username: credentials.username },
                });
                if (!customer) {
                    return null;
                }

                const isValid = await bcrypt.compare(credentials.password, customer.passwordHash);
                if (!isValid) {
                    return null;
                }
                if (customer.disabled) {
                    return null;
                }

                return {
                    id: customer.id,
                    name: customer.name,
                    email: customer.email ?? undefined,
                    accountId: customer.teamOwnerId ?? customer.id,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.accountId = (user as { accountId: string }).accountId;
            }
            // Tokens issued before `accountId` existed (or before a customer's
            // team assignment changed) won't have it - resolve it fresh from
            // the DB instead of forcing everyone to log out and back in.
            if (token.id && !token.accountId) {
                const customer = await prisma.customer.findUnique({
                    where: { id: token.id as string },
                    select: { teamOwnerId: true },
                });
                token.accountId = customer?.teamOwnerId ?? (token.id as string);
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as { id?: string; accountId?: string }).id = token.id as string;
                (session.user as { id?: string; accountId?: string }).accountId = token.accountId as string;
            }
            return session;
        },
    },
};
