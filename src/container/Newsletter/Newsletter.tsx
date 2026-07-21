"use client"
import {useEffect, useRef} from "react";
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import ProjectForm from '../../components/ProjectForm/ProjectForm';
import Parallax from 'parallax-js';

const Newsletter = () => {
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })

        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-bg-image section-padding-t110-b120 newsletter-section overlay-two" style={{backgroundImage: `url(/images/bg/newsletter.jpg)`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="newsletter-content">
                            <SectionTitle
                                titleOption="color-light text-center"
                                title="Let’s find out how to work together"
                                subTitle="Ready to start your project? The contact information collected through
                                this form will only be used to send a response to your inquiry."
                            />
                            <div className="contact-form-area mt-8">
                                <SectionTitle
                                    titleOption="section-title text-center mb-7"
                                    headingOption="title fz-28"
                                    title="Let’s talk about your project"
                                    subTitle="We have made it easy for clients to reach us
                                        and get their solutions weaved"
                                />
                                <ProjectForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                    <img src={"/images/shape-animation/newsletter-shape.png"} alt="" />
                </span>
            </div>
        </div>
    )
}

export default Newsletter
