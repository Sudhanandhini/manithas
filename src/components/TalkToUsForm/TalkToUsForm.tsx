"use client";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const TalkToUsForm = ({ onSubmitted }: { onSubmitted?: () => void }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
        mode: "onBlur"
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

    const onSubmit = async (data: FormValues) => {
        setStatus("submitting");
        try {
            const res = await fetch("/api/enquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    need: data.message,
                    source: "talk-to-us",
                }),
            });
            if (!res.ok) throw new Error("Request failed");
            reset();
            setStatus("idle");
            onSubmitted?.();
        } catch {
            setStatus("error");
        }
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-n4">
                    <div className="col-12 mb-4">
                        <input
                            type="text"
                            placeholder="Your Name *"
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />
                        {errors?.name && <p>{errors.name?.message as string}</p>}
                    </div>
                    <div className="col-12 mb-4">
                        <input
                            type="email"
                            placeholder="Email *"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address",
                                },
                            })}
                        />
                        {errors?.email && <p>{errors.email?.message as string}</p>}
                    </div>
                    <div className="col-12 mb-4">
                        <input
                            type="tel"
                            placeholder="Phone Number *"
                            {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Enter a valid 10-digit phone number",
                                },
                            })}
                        />
                        {errors?.phone && <p>{errors.phone?.message as string}</p>}
                    </div>
                    <div className="col-12 mb-6">
                        <textarea
                            placeholder="Message *"
                            {...register("message", {
                                required: "Message is required",
                            })}
                        ></textarea>
                        {errors?.message && <p>{errors.message?.message as string}</p>}
                    </div>
                    {status === "error" && (
                        <div className="col-12 mb-4">
                            <p>Something went wrong sending your request. Please try again.</p>
                        </div>
                    )}
                    <div className="col-12 text-center mb-4">
                        <button type="submit" className="btn btn-primary btn-hover-secondary" disabled={status === "submitting"}>
                            {status === "submitting" ? "Sending..." : "Talk To Us"}
                        </button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default TalkToUsForm;
