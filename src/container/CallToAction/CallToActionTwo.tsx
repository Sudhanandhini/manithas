"use client"
import React from 'react';
import PropTypes from "prop-types";
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import Link from "next/link";

const CallToActionTwo = ({ title, subTitle, ctaLabel, ctaLink }) => {
    return (
        <div className="cta-section section section-padding-250">
            <div className="container text-center icon-up-down-animation">
                <SectionTitle
                    headingOption="fz-34"
                    title={title}
                    subTitle={subTitle}
                />
                <Link className="btn btn-primary btn-hover-secondary" href={ctaLink} data-aos="fade-up" data-aos-delay="300">{ctaLabel}</Link>

                <div className="shape shape-1">
                    <span>
                        <img src={"/images/icon-animation/icon-1.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-2">
                    <span>
                        <img src={"/images/icon-animation/icon-2.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-3">
                    <span>
                        <img src={"/images/icon-animation/icon-3.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-4">
                    <span>
                        <img src={"/images/icon-animation/icon-4.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-5">
                    <span>
                        <img src={"/images/icon-animation/icon-5.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-6">
                    <span>
                        <img src={"/images/icon-animation/icon-6.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-7">
                    <span>
                        <img src={"/images/icon-animation/icon-7.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-8">
                    <span>
                        <img src={"/images/icon-animation/icon-8.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-9">
                    <span>
                        <img src={"/images/icon-animation/icon-9.png"} alt="" />
                    </span>
                </div>
            </div>
        </div>
    )
}

CallToActionTwo.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    ctaLabel: PropTypes.string,
    ctaLink: PropTypes.string
};
CallToActionTwo.defaultProps = {
    title: "Let's talk about your project and see how we can work together",
    subTitle: "Our team of designers, developers and creatives are perfectionists who love what they do and love where they work",
    ctaLabel: "Contact Us",
    ctaLink: "/contact"
};

export default CallToActionTwo;
