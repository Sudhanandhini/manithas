"use client";
import PropTypes from "prop-types";
import React from 'react';


const Testimonial = ({ data }) => {
    const paragraphs = String(data.desc || "").split("\n\n");

    return (
        <div className="static-testimonial mb-6">
            {data.image ? (
                <div className="testimonial-image client-logo">
                    <img src={data.image} alt={data.name} />
                </div>
            ) : (
                <div className="testimonial-image">
                    <div className="avatar-initial" style={{ backgroundColor: data.color || "var(--clr-primary)" }}>
                        {data.initial || data.name?.charAt(0)}
                    </div>
                </div>
            )}
            {data.rating > 0 && (
                <div className="rating" aria-label={`${data.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <i key={i} className="fas fa-star" style={{ color: i < data.rating ? "#fbbc04" : "#e0e0e0" }}></i>
                    ))}
                </div>
            )}
            <div className="testimonial-content">
                {paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                ))}
            </div>
            <div className="author-info">
                <div className="cite">
                    <h6 className="name">{data.name}</h6>
                </div>
            </div>
        </div>
    )
}

Testimonial.propTypes = {
    data: PropTypes.object
};

export default Testimonial;
