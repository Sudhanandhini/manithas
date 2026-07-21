"use client";
import { useEffect, useState } from "react";

// Renders the icon via React state instead of ReactVivus's componentDidMount,
// which fetches the SVG file and appendChild()s it into the container with no
// clearing step. Under dev remounts (Fast Refresh / Strict Mode) that XHR-based
// append can fire twice for the same DOM node, leaving two stacked <svg> copies.
// Guarding the fetch with a `cancelled` flag and letting React own the markup
// keeps exactly one render regardless of how many times the effect re-runs.
const ContactIcon = ({ id, file }) => {
    const [markup, setMarkup] = useState(null);

    useEffect(() => {
        let cancelled = false;
        setMarkup(null);

        fetch(`/${file}`)
            .then((res) => res.text())
            .then((text) => {
                if (!cancelled) setMarkup(text);
            })
            .catch(() => {});

        return () => {
            cancelled = true;
        };
    }, [file]);

    return (
        <div
            id={id}
            dangerouslySetInnerHTML={markup ? { __html: markup } : undefined}
        />
    );
};

export default ContactIcon;
