"use client";
import React, {Fragment, useState} from 'react';
import { useForm } from "react-hook-form";

type FormValues = {
    name: string;
    email: string;
    mobile: string;
    subject: string;
    message: string;
};

const ProjectForm = ({ source = "project-form" }: { source?: string }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
        mode: "onBlur"
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const onSubmit = async (data: FormValues) => {
        setStatus("submitting");
        try {
            const res = await fetch("/api/enquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.mobile,
                    interest: data.subject,
                    need: data.message,
                    source,
                }),
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("success");
            reset();
        } catch {
            setStatus("error");
        }
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-n4">
                    <div className="col-md-6 col-12 mb-4">
                        <input
                            type="text"
                            placeholder="Your Name *"
                            name="name"
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />
                        {errors?.name && <p>{errors.name?.message as string}</p>}
                    </div>
                    <div className="col-md-6 col-12 mb-4">
                        <input
                            type="email"
                            placeholder="Email *"
                            name="email"
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
                    <div className="col-md-6 col-12 mb-4">
                        <input
                            type="tel"
                            placeholder="Mobile Number *"
                            name="mobile"
                            {...register("mobile", {
                                required: "Mobile number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Enter a valid 10-digit mobile number",
                                },
                            })}
                        />
                        {errors?.mobile && <p>{errors.mobile?.message as string}</p>}
                    </div>
                    <div className="col-md-6 col-12 mb-4">
                        <select
                            name="subject"
                            defaultValue=""
                            {...register("subject", {
                                required: "Subject is required",
                            })}
                        >
                            <option value="" disabled>Subject *</option>
                            <option value="Web Application">Web Application</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Sale">Sale</option>
                            <option value="Billing">Billing</option>
                        </select>
                        {errors?.subject && <p>{errors.subject?.message as string}</p>}
                    </div>
                    <div className="col-12 mb-6">
                        <textarea
                            name="message"
                            placeholder="Message"
                            {...register("message", {
                                required: "Message is required",
                            })}
                        ></textarea>
                        {errors?.message && <p>{errors.message?.message as string}</p>}
                    </div>
                    <div className="col-12 text-center mb-4">
                        <button type="submit" className="btn btn-primary btn-hover-secondary" disabled={status === "submitting"}>
                            {status === "submitting" ? "Sending..." : "Get a free consultation"}
                        </button>
                    </div>
                </div>
            </form>
            <p className="form-messege">
                {status === "success" && "Thanks! We've received your details and will get back to you soon."}
                {status === "error" && "Something went wrong sending your request. Please try again."}
            </p>
        </Fragment>
    )
}

export default ProjectForm;
