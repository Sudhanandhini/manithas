"use client";
import TalkToUsForm from "../TalkToUsForm/TalkToUsForm";

const TalkToUsModal = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
    if (!show) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(15, 15, 25, 0.65)",
                zIndex: 99999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: "#fff",
                    borderRadius: 10,
                    padding: "40px 32px",
                    width: "100%",
                    maxWidth: 460,
                    maxHeight: "90vh",
                    overflowY: "auto",
                    position: "relative"
                }}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        background: "none",
                        border: "none",
                        fontSize: 22,
                        lineHeight: 1,
                        cursor: "pointer",
                        color: "var(--clr-heading)"
                    }}
                >
                    <i className="fas fa-times"></i>
                </button>

                <h3 className="title mb-2" style={{ marginBottom: 8 }}>Talk To Us</h3>
                <p className="mb-6" style={{ marginBottom: 24 }}>
                    Share your details and our team will get back to you shortly.
                </p>

                <TalkToUsForm onSubmitted={onClose} />
            </div>
        </div>
    );
};

export default TalkToUsModal;
