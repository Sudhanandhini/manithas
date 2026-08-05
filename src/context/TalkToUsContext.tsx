"use client";
import { createContext, useContext, useState } from "react";
import TalkToUsModal from "../components/TalkToUsModal/TalkToUsModal";

type TalkToUsContextValue = {
    openTalkToUs: () => void;
};

const TalkToUsContext = createContext<TalkToUsContextValue | null>(null);

export const TalkToUsProvider = ({ children }: { children: React.ReactNode }) => {
    const [show, setShow] = useState(false);

    return (
        <TalkToUsContext.Provider value={{ openTalkToUs: () => setShow(true) }}>
            {children}
            <TalkToUsModal show={show} onClose={() => setShow(false)} />
        </TalkToUsContext.Provider>
    );
};

export const useTalkToUs = () => {
    const ctx = useContext(TalkToUsContext);
    if (!ctx) {
        throw new Error("useTalkToUs must be used within a TalkToUsProvider");
    }
    return ctx;
};
