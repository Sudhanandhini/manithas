"use client"

import { useEffect } from "react";
import AOS from "aos";

const AosInit = () => {
    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 1000,
            once: true,
            easing: 'ease',
        });
        AOS.refresh();
    }, [])

    return null;
}

export default AosInit;
