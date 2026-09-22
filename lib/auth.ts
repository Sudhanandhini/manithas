import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

const LOGIN_ATTEMPT_LIMIT = 10;
const LOGIN_ATTEMPT_WINDOW_MS = 15 * 60 * 1000;

export const authOptions: AuthOptions = {
    session: { strategy: "jwt" },
    pages: {
        signIn: "/admin/login",
    },
    // Explicit rather than relying on next-auth's implicit defaults (which infer
    // `secure` from whether NEXTAUTH_URL starts with https://), so the admin
    // session cookie is guaranteed httpOnly/sameSite/secure regardless of how
    // that env var is set on a given deployment.
    cookies: {
        sessionToken: {
            name: "next-auth.session-token",
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                secure: process.env.NODE_ENV === "production",
            },
        },
        csrfToken: {
            name: "next-auth.csrf-token",
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                secure: process.env.NODE_ENV === "production",
            },
        },
        callbackUrl: {
            name: "next-auth.callback-url",
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
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const ip = getClientIp(req?.headers);
                if (!checkRateLimit(`admin-login:${ip}`, LOGIN_ATTEMPT_LIMIT, LOGIN_ATTEMPT_WINDOW_MS)) {
                    throw new Error("Too many login attempts. Please try again in a few minutes.");
                }

                const admin = await prisma.adminUser.findUnique({
                    where: { email: credentials.email },
                });
                if (!admin) {
                    return null;
                }

                const isValid = await bcrypt.compare(credentials.password, admin.passwordHash);
                if (!isValid) {
                    return null;
                }

                return { id: admin.id, email: admin.email };
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
