"use client"

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

const AosInit = () => {
    const pathname = usePathname();

    useEffect(() => {
        // The homepage's fade-in was getting caught mid-animation on reload,
        // reading as blank/half-rendered content, so it appears instantly there.
        // Every other page keeps the normal fade-up.
        AOS.init({
            offset: 80,
            duration: pathname === "/" ? 0 : 1000,
            once: true,
            easing: 'ease',
        });
        // Re-running init() also re-scans for [data-aos] elements mounted by
        // this navigation, which the very first scan never saw.
        AOS.refreshHard();
    }, [pathname])

    return null;
}

export default AosInit;
