"use client"
import {useState, useEffect, useRef} from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import Link from "next/link";
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';

const AboutFive = () => {
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
        <div className="section section-padding-top section-padding-bottom-180">
            <div className="container">

                <div className="row">

                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={"/images/about/about-3.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={"/images/about/about-4.jpg"} alt="" />
                                </Tilt>
                            </div>

                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={"/images/shape-animation/about-shape-1.png"} alt="" /></span>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                            <SectionTitleTwo
                                subTitle="Our Vision"
                                title="Our Vision &amp; Mission"
                            />

                            <p>At Manithas, our vision is not limited to customer satisfaction. We aim to exceed expectations through premium IT services that translate to global trust and growth. Our goal is to create meaningful outcomes that help our clients move forward with confidence in an ever-evolving digital landscape.</p>

                            <p>We move with the mission to make digital services accessible and easy to navigate. We tailor every solution to our clients’ unique needs, ensuring a seamless process from start to finish. Working hand in hand, we turn ideas into remarkable milestones, and share in the joy of every achievement.</p>

                            <Link className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4" href={"/contact"}>Contact Now</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AboutFive;
