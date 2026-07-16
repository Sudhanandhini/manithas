"use client"

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const NavScrollTop = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [pathname]);

    return children;
};

export default NavScrollTop;
