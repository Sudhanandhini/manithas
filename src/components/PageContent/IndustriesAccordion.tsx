"use client"
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";
import Accordion, { AccordionItem, AccordionTitle, AccordionContent } from "../Accordion";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";

const IndustriesAccordion = ({ eyebrow, title, description, items, imageOne, imageTwo, classOption }) => {
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
        <div className={`faq-section section section-padding-top ${classOption}`}>
            <div className="container">
                <div className="row row-cols-lg-2 row-cols-1 mb-n6">
                    <div className="col mb-6" data-aos="fade-up">
                        <div className="faq-content">
                            <SectionTitleTwo subTitle={eyebrow} title={title} />
                            {description && <p>{description}</p>}

                            <div className="agency-accordion max-mb-n30">
                                <Accordion>
                                    {items && items.map((item, key) => (
                                        <AccordionItem id={`industry-${key}`} key={key}>
                                            <AccordionTitle id={`industry-${key}`}>{item.title}</AccordionTitle>
                                            <AccordionContent id={`industry-${key}`}>{item.description}</AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-6 ps-xl-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-image-area faq-image-area">
                            <div className="about-image right-n50">
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
                                <span data-depth="1"><img src={"/images/shape-animation/video-shape-1.png"} alt="" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

IndustriesAccordion.propTypes = {
    eyebrow: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array,
    imageOne: PropTypes.string,
    imageTwo: PropTypes.string,
    classOption: PropTypes.string
};
IndustriesAccordion.defaultProps = {
    imageOne: "/images/about/about-2.jpg",
    imageTwo: "/images/about/about-7.jpg",
    classOption: ""
};

export default IndustriesAccordion;
