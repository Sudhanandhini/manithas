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

                return { id: customer.id, name: customer.name, email: customer.email ?? undefined };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as { id?: string }).id = token.id as string;
            }
            return session;
        },
    },
};
