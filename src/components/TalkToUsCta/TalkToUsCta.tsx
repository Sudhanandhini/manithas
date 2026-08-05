"use client";
import Link from "next/link";
import { useTalkToUs } from "../../context/TalkToUsContext";

type TalkToUsCtaProps = {
    label?: string;
    link?: string;
    className?: string;
    dataAos?: string;
    dataAosDelay?: string;
};

const TalkToUsCta = ({ label, link, className, dataAos, dataAosDelay }: TalkToUsCtaProps) => {
    const { openTalkToUs } = useTalkToUs();

    if (!label) return null;

    if (label === "Talk To Us") {
        return (
            <button
                type="button"
                className={className}
                onClick={openTalkToUs}
                data-aos={dataAos}
                data-aos-delay={dataAosDelay}
            >
                {label}
            </button>
        );
    }

    if (!link) return null;

    return (
        <Link className={className} href={link} data-aos={dataAos} data-aos-delay={dataAosDelay}>
            {label}
        </Link>
    );
};

export default TalkToUsCta;
