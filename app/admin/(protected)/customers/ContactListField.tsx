"use client";

export default function ContactListField({
    label,
    type,
    values,
    onChange,
    addLabel,
}: {
    label: string;
    type: "email" | "tel";
    values: string[];
    onChange: (values: string[]) => void;
    addLabel: string;
}) {
    function updateAt(index: number, value: string) {
        const next = [...values];
        next[index] = value;
        onChange(next);
    }

    function removeAt(index: number) {
        onChange(values.filter((_, i) => i !== index));
    }

    return (
        <div className="admin-field">
            <label>{label}</label>
            {values.map((value, index) => (
                <div key={index} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <input
                        type={type}
                        value={value}
                        onChange={(e) => updateAt(index, e.target.value)}
                        style={{ flex: 1 }}
                    />
                    <button
                        type="button"
                        className="admin-btn-sm"
                        onClick={() => removeAt(index)}
                        aria-label={`Remove ${label.toLowerCase()}`}
                    >
                        Remove
                    </button>
                </div>
            ))}
            <button type="button" className="admin-btn-sm" onClick={() => onChange([...values, ""])}>
                {addLabel}
            </button>
        </div>
    );
}
