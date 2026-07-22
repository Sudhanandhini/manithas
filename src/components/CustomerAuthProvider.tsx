"use client";

import { SessionProvider } from "next-auth/react";

// Scopes next-auth/react's signIn/signOut/useSession calls to the customer
// NextAuth instance instead of the admin one at /api/auth.
export default function CustomerAuthProvider({ children }: { children: React.ReactNode }) {
    return <SessionProvider basePath="/api/customer-auth">{children}</SessionProvider>;
}
