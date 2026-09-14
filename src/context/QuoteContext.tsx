"use client";
import { createContext, useContext, useState } from "react";
import QuoteModal from "../components/QuoteModal/QuoteModal";

type QuoteContextValue = {
    openQuote: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export const QuoteProvider = ({ children }: { children: React.ReactNode }) => {
    const [show, setShow] = useState(false);

    return (
        <QuoteContext.Provider value={{ openQuote: () => setShow(true) }}>
            {children}
            <QuoteModal show={show} onClose={() => setShow(false)} />
        </QuoteContext.Provider>
    );
};

export const useQuote = () => {
    const ctx = useContext(QuoteContext);
    if (!ctx) {
        throw new Error("useQuote must be used within a QuoteProvider");
    }
    return ctx;
};
