"use client";
import React, {Fragment} from 'react';
import { useForm } from "react-hook-form";

const ProjectForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });
    const onSubmit = data => console.log(data);

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
                                    value: /^[0-9+\-\s]{7,15}$/,
                                    message: "invalid mobile number",
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
                        <button type="submit" className="btn btn-primary btn-hover-secondary">Get a free consultation</button>
                    </div>
                </div>
            </form>
            <p className="form-messege"></p>
        </Fragment>
    )
}

export default ProjectForm;
