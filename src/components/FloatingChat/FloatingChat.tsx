"use client";
import { useEffect, useState } from "react";
import ChatBot from "./ChatBot";

const GREETING_DELAY_MS = 2000;

const FloatingChat = () => {
    const [panelOpen, setPanelOpen] = useState(false);
    const [greetingShown, setGreetingShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setGreetingShown(true), GREETING_DELAY_MS);
        return () => clearTimeout(timer);
    }, []);

    const openPanel = () => {
        setPanelOpen(true);
        setGreetingShown(false);
    };

    const togglePanel = () => {
        if (panelOpen) {
            setPanelOpen(false);
        } else {
            openPanel();
        }
    };

    const dismissGreeting = (e: React.MouseEvent) => {
        e.stopPropagation();
        setGreetingShown(false);
    };

    const showBadge = !panelOpen && !greetingShown;

    return (
        <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 99999 }}>
            {greetingShown && !panelOpen && (
                <div
                    onClick={openPanel}
                    role="button"
                    style={{
                        position: "absolute",
                        right: 0,
                        bottom: 76,
                        width: 300,
                        maxWidth: "calc(100vw - 48px)",
                        background: "#1a2233",
                        color: "#fff",
                        borderRadius: 12,
                        padding: "14px 36px 14px 14px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        animation: "floatingChatFadeIn 0.3s ease"
                    }}
                >
                    <span
                        style={{
                            flexShrink: 0,
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            background: "var(--clr-primary)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <i className="fas fa-comment-dots" style={{ fontSize: 14, color: "#fff" }}></i>
                    </span>
                    <span style={{ fontSize: 14, lineHeight: 1.5 }}>
                        Hi, I can connect you with our team or answer questions you have.
                    </span>
                    <button
                        type="button"
                        onClick={dismissGreeting}
                        aria-label="Dismiss"
                        style={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            background: "none",
                            border: "none",
                            color: "#aeb6c4",
                            fontSize: 14,
                            cursor: "pointer",
                            lineHeight: 1
                        }}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            )}

            {panelOpen && (
                <div
                    style={{
                        position: "absolute",
                        right: 0,
                        bottom: 76,
                        width: 400,
                        maxWidth: "calc(100vw - 48px)",
                        height: 520,
                        maxHeight: "calc(100vh - 140px)",
                        overflow: "hidden",
                        background: "#fff",
                        borderRadius: 12,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                        animation: "floatingChatFadeIn 0.3s ease",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <div
                        style={{
                            flexShrink: 0,
                            background: "var(--clr-primary)",
                            color: "#fff",
                            borderRadius: "12px 12px 0 0",
                            padding: "16px 20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <div>
                            <h6 style={{ margin: 0, color: "#fff" }}>Manithas Assistant</h6>
                            <p style={{ margin: 0, fontSize: 13, opacity: 0.9, color: "#fff" }}>
                                Ask us about our services, anytime.
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setPanelOpen(false)}
                            aria-label="Close"
                            style={{
                                background: "none",
                                border: "none",
                                color: "#fff",
                                fontSize: 18,
                                cursor: "pointer",
                                lineHeight: 1
                            }}
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div style={{ flex: 1, minHeight: 0 }}>
                        <ChatBot />
                    </div>
                </div>
            )}

            <button
                type="button"
                onClick={togglePanel}
                aria-label={panelOpen ? "Close chat" : "Open chat"}
                style={{
                    position: "relative",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    border: "none",
                    background: "var(--clr-primary)",
                    color: "#fff",
                    fontSize: 22,
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(18,146,238,0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <i className={panelOpen ? "fas fa-times" : "fas fa-comment-dots"}></i>
                {showBadge && (
                    <span
                        style={{
                            position: "absolute",
                            top: -2,
                            right: -2,
                            width: 18,
                            height: 18,
                            borderRadius: "50%",
                            background: "#ff3b3b",
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        1
                    </span>
                )}
            </button>

            <style>{`
                @keyframes floatingChatFadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default FloatingChat;
