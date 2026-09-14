"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
    CHAT_CATEGORIES,
    CLOSING_WORDS,
    ENQUIRY_TRIGGER_WORDS,
    GREETING_WORDS,
    LEAD_CANCEL_WORDS,
    SMALL_TALK,
    TIME_GREETINGS,
    containsPhrase,
    findCategoryByText,
    findOptionByText,
    type ChatCategory,
} from "@/src/data/chatbot/chatbotData";
import { isValidEmail } from "@/lib/enquiries";

type QuickReply = { label: string; value: string };
type ChatLink = { label: string; href: string };

type Message = {
    id: number;
    from: "bot" | "user";
    text?: string;
    options?: QuickReply[];
    link?: ChatLink;
};

const TALK_TO_TEAM: QuickReply = { label: "Talk to our team", value: "talk to our team" };
const END_CHAT: QuickReply = { label: "That's all, thanks", value: "thank you" };
// Every quick-reply menu includes "Talk to our team" so visitors can always
// reach a human, no matter which category/option they were browsing.
const CATEGORY_QUICK_REPLIES: QuickReply[] = [...CHAT_CATEGORIES.map((c) => ({ label: c.label, value: c.label })), TALK_TO_TEAM];
const MENU_PROMPT = "What would you like to know about? Pick one below, or just type your question.";

let idCounter = 0;
const nextId = () => {
    idCounter += 1;
    return idCounter;
};

const categoryOptionsReply = (category: ChatCategory): QuickReply[] => [
    ...category.options.map((o) => ({ label: o.label, value: o.label })),
    TALK_TO_TEAM,
    END_CHAT,
];

type LeadStep = "idle" | "name" | "email" | "phone" | "need";

const PHONE_RE = /^[0-9]{10}$/;

const ChatBot = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [ended, setEnded] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const startedRef = useRef(false);
    const leadStepRef = useRef<LeadStep>("idle");
    const leadDataRef = useRef<{ name?: string; email?: string; phone?: string }>({});
    const interestRef = useRef<string | null>(null);

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
        setTimeout(() => startLeadCapture(), 700);
    }, []);

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [messages]);

    const startLeadCapture = () => {
        leadStepRef.current = "name";
        pushMessages([
            {
                from: "bot",
                text: "Great! Let's get you connected with our team. What's your name?",
            },
        ]);
    };

    const submitEnquiry = async (need: string) => {
        const { name, email, phone } = leadDataRef.current;
        try {
            const res = await fetch("/api/enquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, need, interest: interestRef.current, source: "chatbot" }),
            });
            if (!res.ok) throw new Error("failed");
            pushMessages([
                {
                    from: "bot",
                    text: `Thanks, ${name}! We've noted your details and our team will reach out to you at ${email} soon.`,
                },
                { from: "bot", text: MENU_PROMPT, options: CATEGORY_QUICK_REPLIES },
            ]);
        } catch {
            pushMessages([
                {
                    from: "bot",
                    text: "Sorry, something went wrong saving your details. Please try again in a moment, or reach us directly.",
                    link: { label: "Get in touch with us", href: "/contact" },
                },
            ]);
        }
    };

    const handleLeadAnswer = (text: string): boolean => {
        const step = leadStepRef.current;
        if (step === "idle") return false;

        if (LEAD_CANCEL_WORDS.some((w) => containsPhrase(text, w))) {
            leadStepRef.current = "idle";
            leadDataRef.current = {};
            pushMessages([
                { from: "bot", text: "No problem, we can pick this up anytime.", options: CATEGORY_QUICK_REPLIES },
            ]);
            return true;
        }

        if (step === "name") {
            if (text.length < 2) {
                pushMessages([{ from: "bot", text: "Could you share your name, please?" }]);
                return true;
            }
            leadDataRef.current.name = text;
            leadStepRef.current = "email";
            pushMessages([{ from: "bot", text: `Thanks, ${text}! What email address can we use to get in touch?` }]);
            return true;
        }

        if (step === "email") {
            if (!isValidEmail(text)) {
                pushMessages([{ from: "bot", text: "That doesn't look like a valid email address. Could you double-check it?" }]);
                return true;
            }
            leadDataRef.current.email = text;
            leadStepRef.current = "phone";
            pushMessages([{ from: "bot", text: "Got it! What's the best number to reach you on?" }]);
            return true;
        }

        if (step === "phone") {
            if (!PHONE_RE.test(text)) {
                pushMessages([{ from: "bot", text: "Please enter a valid 10-digit phone number." }]);
                return true;
            }
            leadDataRef.current.phone = text;
            leadStepRef.current = "need";
            const hint = interestRef.current ? ` about ${interestRef.current}` : "";
            pushMessages([{ from: "bot", text: `Great, thanks! Lastly, what are you looking for help with${hint}?` }]);
            return true;
        }

        if (step === "need") {
            leadStepRef.current = "idle";
            void submitEnquiry(text);
            return true;
        }

        return false;
    };

    const handleUserText = (rawText: string) => {
        const text = rawText.trim();
        if (!text || ended) return;

        setMessages((prev) => [...prev, { id: nextId(), from: "user", text }]);
        setInputValue("");

        if (handleLeadAnswer(text)) return;

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

        const timeGreeting = TIME_GREETINGS.find((g) => g.patterns.some((p) => containsPhrase(text, p)));
        if (timeGreeting) {
            const period = timeGreeting.period;
            pushMessages([
                { from: "bot", text: `Good ${period}! 😊 How can I help you today?` },
                { from: "bot", text: MENU_PROMPT, options: CATEGORY_QUICK_REPLIES },
            ]);
            return;
        }

        const smallTalk = SMALL_TALK.find((s) => s.patterns.some((p) => containsPhrase(text, p)));
        if (smallTalk) {
            pushMessages([
                { from: "bot", text: smallTalk.reply },
                { from: "bot", text: MENU_PROMPT, options: CATEGORY_QUICK_REPLIES },
            ]);
            return;
        }

        if (ENQUIRY_TRIGGER_WORDS.some((w) => containsPhrase(text, w))) {
            startLeadCapture();
            return;
        }

        const optionMatch = findOptionByText(text);
        if (optionMatch) {
            interestRef.current = optionMatch.option.label;
            pushMessages([
                {
                    from: "bot",
                    text: optionMatch.option.description,
                    link: { label: `Learn more about ${optionMatch.option.label}`, href: optionMatch.option.href },
                },
                {
                    from: "bot",
                    text: "Want to see something else?",
                    options: [...categoryOptionsReply(optionMatch.category).slice(0, -1), { label: "Show all categories", value: "show categories" }, END_CHAT],
                },
            ]);
            return;
        }

        const categoryMatch = findCategoryByText(text);
        if (categoryMatch) {
            interestRef.current = categoryMatch.label;
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

        pushMessages([
            {
                from: "bot",
                text: "I couldn't find an exact match for that, but here's what we can help with:",
                options: CATEGORY_QUICK_REPLIES,
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
        leadStepRef.current = "idle";
        leadDataRef.current = {};
        interestRef.current = null;
        startedRef.current = false;
        setTimeout(() => {
            startedRef.current = true;
            setMessages([{ id: nextId(), from: "bot", text: "Hi! 👋 How are you doing today?" }]);
            setTimeout(() => startLeadCapture(), 700);
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
