"use client"
import {useState, useEffect, useRef} from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const AboutFour = () => {
    const [didViewCountUp, setDidViewCountUp] = useState(false);
    const onVisibilityChange = isVisible => {
        if (isVisible) {
        setDidViewCountUp(true);
        }
    };
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
        <div className="section section-padding-top about-section-padding-bottom-200">
            <div className="container">
                <div className="row">

                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-content-area mt-0 mb-md-10 mb-10">
                            <SectionTitleTwo
                                subTitle="Welcome to our company"
                                title="Quality &amp; Experience Web Design Company"
                            />

                            <p>Operating since 2006, we began as Sunsys Technologies and later evolved into Manithas Technologies Pvt. Ltd., officially registered in 2009. Over two decades, we have explored diverse technology verticals and grown into a trusted IT solutions partner. Today, we specialize in web Application Engineering, custom software development, and end-to-end web solutions, with experience, precision, and quality to deliver what creates a lasting value for businesses and brands worldwide.
1,500+ Projects Completed: Increasing profits through online visibility
1,200+ Clients: Running smoother operations though our curated online presence
</p>

                            <div className="row row-cols-sm-2 row-cols-auto mb-n6">
                                <div className="col mb-6">
                                    <div className="about-funfact">
                                        <div className="number">
                                            <VisibilitySensor
                                                    onChange={onVisibilityChange}
                                                    offset={{ top: 10 }}
                                                    delayedCall
                                                    >
                                                    <CountUp end={didViewCountUp ? 1500 : 0} />
                                            </VisibilitySensor>+
                                        </div>
                                        <h6 className="text">Completed Project</h6>
                                        <p>We help our clients increase profits by increasing their visibility online.</p>
                                    </div>
                                </div>
                                <div className="col mb-6">
                                    <div className="about-funfact">
                                        <div className="number">
                                            <VisibilitySensor
                                                onChange={onVisibilityChange}
                                                offset={{ top: 10 }}
                                                delayedCall
                                                >
                                                <CountUp end={didViewCountUp ? 1200 : 0} />
                                            </VisibilitySensor>+
                                        </div>
                                        <h6 className="text">Clients</h6>
                                        <p>We help our clients increase profits by increasing their visibility online.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-image-area about-shape-animation right-0 me-0">
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={"/images/about/about-1.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={"/images/about/about-2.jpg"} alt="" />
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

export default AboutFour;
