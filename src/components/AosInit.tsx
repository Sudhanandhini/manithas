"use client"

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

const AosInit = () => {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 1000,
            once: true,
            easing: 'ease',
        });
    }, [])

    useEffect(() => {
        // Client-side navigations mount new [data-aos] elements that the
        // initial AOS.init() scan never saw, leaving them stuck at opacity:0.
        AOS.refreshHard();
    }, [pathname])

    return null;
}

export default AosInit;
