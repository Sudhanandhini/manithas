"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
    CHAT_CATEGORIES,
    CLOSING_WORDS,
    GREETING_WORDS,
    containsPhrase,
    findCategoryByText,
    findOptionByText,
    type ChatCategory,
} from "@/src/data/chatbot/chatbotData";

type QuickReply = { label: string; value: string };
type ChatLink = { label: string; href: string };

type Message = {
    id: number;
    from: "bot" | "user";
    text?: string;
    options?: QuickReply[];
    link?: ChatLink;
};

const CATEGORY_QUICK_REPLIES: QuickReply[] = CHAT_CATEGORIES.map((c) => ({ label: c.label, value: c.label }));
const MENU_PROMPT = "What would you like to know about? Pick one below, or just type your question.";
const TALK_TO_TEAM: QuickReply = { label: "Talk to our team", value: "talk to our team" };
const END_CHAT: QuickReply = { label: "That's all, thanks", value: "thank you" };

let idCounter = 0;
const nextId = () => {
    idCounter += 1;
    return idCounter;
};

const categoryOptionsReply = (category: ChatCategory): QuickReply[] => [
    ...category.options.map((o) => ({ label: o.label, value: o.label })),
    END_CHAT,
];

const ChatBot = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [ended, setEnded] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const startedRef = useRef(false);

    const pushMessages = (newOnes: Omit<Message, "id">[], startDelay = 450) => {
        newOnes.forEach((m, i) => {
            setTimeout(() => {
                setMessages((prev) => [...prev, { ...m, id: nextId() }]);
            }, startDelay * (i + 1));
        });
    };

    useEffect(() => {
        if (startedRef.current) return;
        startedRef.current = true;
        setMessages([{ id: nextId(), from: "bot", text: "Hi! 👋 How are you doing today?" }]);
        pushMessages([
            { from: "bot", text: MENU_PROMPT, options: CATEGORY_QUICK_REPLIES },
        ], 700);
    }, []);

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [messages]);

    const handleUserText = (rawText: string) => {
        const text = rawText.trim();
        if (!text || ended) return;

        setMessages((prev) => [...prev, { id: nextId(), from: "user", text }]);
        setInputValue("");

        if (CLOSING_WORDS.some((w) => containsPhrase(text, w))) {
            pushMessages([
                { from: "bot", text: "Thank you for chatting with us! Have a good day 😊" },
            ]);
            setEnded(true);
            return;
        }

        if (GREETING_WORDS.some((w) => containsPhrase(text, w))) {
            pushMessages([
                { from: "bot", text: "Hi! I'm doing great, thanks for asking 😊 How can I help you today?" },
                { from: "bot", text: MENU_PROMPT, options: CATEGORY_QUICK_REPLIES },
            ]);
            return;
        }

        const optionMatch = findOptionByText(text);
        if (optionMatch) {
            pushMessages([
                {
                    from: "bot",
                    text: optionMatch.option.description,
                    link: { label: `Learn more about ${optionMatch.option.label}`, href: optionMatch.option.href },
                },
                {
                    from: "bot",
                    text: "Want to see something else?",
                    options: [...categoryOptionsReply(optionMatch.category).slice(0, -1), { label: "Show all categories", value: "show categories" }, TALK_TO_TEAM, END_CHAT],
                },
            ]);
            return;
        }

        const categoryMatch = findCategoryByText(text);
        if (categoryMatch) {
            pushMessages([
                { from: "bot", text: categoryMatch.intro, options: categoryOptionsReply(categoryMatch) },
            ]);
            return;
        }

        if (["show categories", "what do you offer", "what can you do", "services"].some((w) => containsPhrase(text, w))) {
            pushMessages([
                { from: "bot", text: MENU_PROMPT, options: CATEGORY_QUICK_REPLIES },
            ]);
            return;
        }

        if (["talk to our team", "talk to team", "contact"].some((w) => containsPhrase(text, w))) {
            pushMessages([
                {
                    from: "bot",
                    text: "Sure! Our team would be happy to help you directly.",
                    link: { label: "Get in touch with us", href: "/contact" },
                },
            ]);
            return;
        }

        pushMessages([
            {
                from: "bot",
                text: "I couldn't find an exact match for that, but here's what we can help with:",
                options: [...CATEGORY_QUICK_REPLIES, TALK_TO_TEAM],
            },
        ]);
    };

    const handleQuickReply = (value: string) => {
        if (value.toLowerCase() === "show categories") {
            setMessages((prev) => [...prev, { id: nextId(), from: "user", text: "Show all categories" }]);
            pushMessages([{ from: "bot", text: MENU_PROMPT, options: CATEGORY_QUICK_REPLIES }]);
            return;
        }
        handleUserText(value);
    };

    const restart = () => {
        idCounter = 0;
        setEnded(false);
        setMessages([]);
        startedRef.current = false;
        setTimeout(() => {
            startedRef.current = true;
            setMessages([{ id: nextId(), from: "bot", text: "Hi! 👋 How are you doing today?" }]);
            pushMessages([{ from: "bot", text: MENU_PROMPT, options: CATEGORY_QUICK_REPLIES }], 700);
        }, 0);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleUserText(inputValue);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "16px 16px 4px", display: "flex", flexDirection: "column", gap: 10 }}>
                {messages.map((m) => (
                    <div key={m.id} style={{ display: "flex", flexDirection: "column", alignItems: m.from === "user" ? "flex-end" : "flex-start", gap: 6 }}>
                        {m.text && (
                            <div
                                style={{
                                    maxWidth: "85%",
                                    padding: "10px 14px",
                                    borderRadius: 14,
                                    fontSize: 14,
                                    lineHeight: 1.5,
                                    background: m.from === "user" ? "var(--clr-primary)" : "#f0f2f6",
                                    color: m.from === "user" ? "#fff" : "#1a2233",
                                    borderBottomRightRadius: m.from === "user" ? 4 : 14,
                                    borderBottomLeftRadius: m.from === "bot" ? 4 : 14,
                                }}
                            >
                                {m.text}
                            </div>
                        )}
                        {m.link && (
                            <Link
                                href={m.link.href}
                                style={{
                                    fontSize: 13,
                                    fontWeight: 600,
                                    color: "var(--clr-primary)",
                                    textDecoration: "underline",
                                    padding: "2px 4px",
                                }}
                            >
                                {m.link.label} →
                            </Link>
                        )}
                        {m.options && m.options.length > 0 && (
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, maxWidth: "100%" }}>
                                {m.options.map((opt) => (
                                    <button
                                        key={opt.label}
                                        type="button"
                                        onClick={() => handleQuickReply(opt.value)}
                                        disabled={ended}
                                        style={{
                                            border: "1px solid var(--clr-primary)",
                                            background: "#fff",
                                            color: "var(--clr-primary)",
                                            borderRadius: 20,
                                            padding: "6px 14px",
                                            fontSize: 13,
                                            cursor: ended ? "default" : "pointer",
                                            opacity: ended ? 0.5 : 1,
                                        }}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                {ended && (
                    <div>
                        <button
                            type="button"
                            onClick={restart}
                            style={{
                                border: "none",
                                background: "var(--clr-primary)",
                                color: "#fff",
                                borderRadius: 20,
                                padding: "8px 16px",
                                fontSize: 13,
                                cursor: "pointer",
                            }}
                        >
                            Start a new chat
                        </button>
                    </div>
                )}
            </div>
            <form onSubmit={onSubmit} style={{ display: "flex", gap: 8, padding: 12, borderTop: "1px solid #eceef2" }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={ended ? "Chat ended — start a new one above" : "Type your question..."}
                    disabled={ended}
                    style={{
                        flex: 1,
                        border: "1px solid #dde1e8",
                        borderRadius: 20,
                        padding: "10px 16px",
                        fontSize: 14,
                        outline: "none",
                    }}
                />
                <button
                    type="submit"
                    disabled={ended || !inputValue.trim()}
                    aria-label="Send"
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        border: "none",
                        background: "var(--clr-primary)",
                        color: "#fff",
                        cursor: ended ? "default" : "pointer",
                        opacity: ended || !inputValue.trim() ? 0.5 : 1,
                        flexShrink: 0,
                    }}
                >
                    <i className="fas fa-paper-plane" style={{ fontSize: 13 }}></i>
                </button>
            </form>
        </div>
    );
};

export default ChatBot;
