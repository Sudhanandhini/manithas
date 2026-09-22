"use client";
import {useState, useEffect, useRef} from "react";
import SectionTitle from '../SectionTitles/SectionTitle';
import SectionTitleTwo from '../SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';
import Link from "next/link";

const HomeAbout = () => {
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
        <div className="section section-padding-t90 section-padding-bottom-200">
            <div className="container">

                <SectionTitle
                    titleOption="text-center sub-full-width"
                    title="Innovative Web Applications for a Smarter Business"
                    subTitle="Since 2006, we’ve worked alongside 1,200+ clients to deliver 1,500+ projects—solving real challenges with practical technology and meaningful results."
                />

                <div className="row">


                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={"/images/about/home-one-about/home_agency_about_1.jpg"} alt="" />
                                </Tilt>
                            </div>

                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={"/images/about/home-one-about/home_agency_about_2.jpg"} alt="" />
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
                                subTitle="Welcome to Manithas Technologies Pvt. Ltd."
                                title="<em>Two decades</em> of experience, one focused team"
                            />

                            <p> Since 2006, Manithas Technologies Pvt. Ltd. has been turning ideas into practical technology solutions that help businesses evolve and grow. Formerly known as Sunsys Technologies, our journey has evolved alongside technology—from websites and hosting to customized web applications, software solutions, and next-generation AI solutions.

We believe technology works best when it is built around the business, not the other way around. That’s why we work closely with our clients, understand their unique challenges, and create reliable solutions designed to simplify operations, unlock new opportunities, and drive long-term growth.</p>

                            <Link className="btn btn-primary btn-hover-secondary mt-xl-8 mt-lg-8 mt-md-6 mt-4" href={"/about"}>About Us</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeAbout;
