"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface ActiveLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
    activeClassName?: string;
}

const ActiveLink = ({ href, children, activeClassName = "active", className, ...rest }: ActiveLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={[className, isActive ? activeClassName : ""].filter(Boolean).join(" ")}
            {...rest}
        >
            {children}
        </Link>
    );
};

export default ActiveLink;
