"use client";
import React from 'react'
import PropTypes from "prop-types";
import Link from "next/link";
import { useQuote } from "../../context/QuoteContext";

const Intro =  ({data}) => {
    const { openQuote } = useQuote();
    const ctaLabel = data.ctaLabel || "Get Started";
    const isQuoteCta = ctaLabel === "Get A Quote";

    return (

        <div className="intro-section overlay section" style={{backgroundImage: `url(${data.backgroundImage})`}}>

            <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">

                    <div className="col align-self-center">
                        <div className="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                            <h2 className="title">{data.title}</h2>
                            <div className="desc">
                                <p>{data.desc}</p>
                            </div>
                            {isQuoteCta ? (
                                <button type="button" onClick={openQuote} className="btn btn-primary btn-hover-secondary">{ctaLabel}</button>
                            ) : (
                                <Link href={data.ctaLink || "/contact"} className="btn btn-primary btn-hover-secondary">{ctaLabel}</Link>
                            )}
                            <Link href={data.ctaTwoLink || "/services"} className="btn btn-outline-white btn-hover-primary"> {data.ctaTwoLabel || "Learn More"} </Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

Intro.propTypes = {
    data: PropTypes.object
};


export default Intro
