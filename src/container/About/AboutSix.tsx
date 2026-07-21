"use client"
import {useState, useEffect, useRef} from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import Link from "next/link";
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';


const AboutSix = () => {
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
        <div className="section section-padding-top technology-section-padding-bottom-180">
            <div className="container">

                <div className="row">

                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={"/images/about/about-5.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={"/images/about/about-6.jpg"} alt="" />
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
                                subTitle="Industry Development"
                                title="Tailored Industry Solutions"
                            />

                            <p>Customized web solutions for various industries, enhancing engagement and growth.</p>

                            <div className="row row-cols-sm-2 row-cols-1">
                                <div className="col">
                                    <ul className="agency-list">
                                        <li className="item">
                                            <div className="icon"><i className="fas fa-plane"></i></div>
                                            <div className="text">Tours and Travels</div>
                                        </li>
                                        <li className="item">
                                            <div className="icon"><i className="fas fa-hotel"></i></div>
                                            <div className="text">Hotel &amp; Resort</div>
                                        </li>
                                        <li className="item">
                                            <div className="icon"><i className="fas fa-heartbeat"></i></div>
                                            <div className="text">Healthcare</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul className="agency-list">
                                        <li className="item">
                                            <div className="icon"><i className="fas fa-building"></i></div>
                                            <div className="text">Corporate</div>
                                        </li>
                                        <li className="item">
                                            <div className="icon"><i className="fas fa-graduation-cap"></i></div>
                                            <div className="text">Education</div>
                                        </li>
                                        <li className="item">
                                            <div className="icon"><i className="fas fa-home"></i></div>
                                            <div className="text">Real Estate &amp; Construction</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Link className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4" href={"/contact"}>Start Today</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AboutSix;
