"use client"
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";

const AboutImageSplit = ({ imageOne, imageTwo, eyebrow, title, paragraphs, ctaLabel, ctaLink, classOption, reverse }) => {
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        })

        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])

    return (
        <div className={`section section-padding-top section-padding-bottom-180 ${classOption}`}>
            <div className="container">

                <div className="row">

                    <div className={`col-xl-7 col-lg-6 col-12 ${reverse ? "order-lg-2" : ""}`} data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={imageOne} alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={imageTwo} alt="" />
                                </Tilt>
                            </div>

                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={"/images/shape-animation/about-shape-1.png"} alt="" /></span>
                            </div>

                        </div>
                    </div>

                    <div className={`col-xl-5 col-lg-6 col-12 ${reverse ? "order-lg-1" : ""}`} data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                            <SectionTitleTwo
                                subTitle={eyebrow}
                                title={title}
                            />

                            {paragraphs && paragraphs.map((text, key) => (
                                <p key={key}>{text}</p>
                            ))}

                            {ctaLabel && ctaLink && (
                                <Link className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4" href={ctaLink}>{ctaLabel}</Link>
                            )}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

AboutImageSplit.propTypes = {
    imageOne: PropTypes.string,
    imageTwo: PropTypes.string,
    eyebrow: PropTypes.string,
    title: PropTypes.string,
    paragraphs: PropTypes.array,
    ctaLabel: PropTypes.string,
    ctaLink: PropTypes.string,
    classOption: PropTypes.string,
    reverse: PropTypes.bool
};
AboutImageSplit.defaultProps = {
    classOption: "",
    reverse: false
};

export default AboutImageSplit;
