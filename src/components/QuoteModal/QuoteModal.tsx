"use client";
import PropTypes from "prop-types";
import ProjectForm from "../ProjectForm/ProjectForm";

const QuoteModal = ({ show, onClose, title, description }) => {
    if (!show) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(15, 15, 25, 0.65)",
                zIndex: 9999,
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
                    maxWidth: 620,
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

                <h3 className="title mb-2" style={{ marginBottom: 8 }}>{title}</h3>
                <p className="mb-6" style={{ marginBottom: 24 }}>
                    {description}
                </p>

                <ProjectForm />
            </div>
        </div>
    );
};

QuoteModal.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string
};

QuoteModal.defaultProps = {
    title: "Get A Quote",
    description: "Tell us a bit about your project and we'll get back to you with a free consultation."
};

export default QuoteModal;
