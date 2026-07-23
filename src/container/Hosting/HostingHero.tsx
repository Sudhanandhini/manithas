"use client"
import Link from "next/link";
import Tilt from 'react-parallax-tilt';

const HostingHero = ({ pageTitle, bgImage, headlineBefore, headlineHighlight, subtitle, ctaLabel, ctaLink, heroIcon = null }) => {
    return (
        <>
            <div className="hosting-hero section section-padding-top overlay-two" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="container">
                    <h1 className="title">{pageTitle}</h1>
                    <ul className="breadcrumb justify-content-center">
                        <li><Link href={"/"}>Home</Link></li>
                        <li className="current">{pageTitle}</li>
                    </ul>
                </div>
            </div>

            <div className="hosting-intro section text-center">
                <div className="container">
                    <h2 className="intro-title" data-aos="fade-up">
                        {headlineBefore}
                        <span className="highlight">{headlineHighlight}</span>
                    </h2>
                    <p className="sub-title" data-aos="fade-up" data-aos-delay="100">
                        {subtitle}
                    </p>
                    {ctaLabel && ctaLink && (
                        <Link className="btn btn-primary btn-hover-secondary" href={ctaLink} data-aos="fade-up" data-aos-delay="200">{ctaLabel}</Link>
                    )}

                    {heroIcon && (
                        <div className="hero-image" data-aos="fade-up" data-aos-delay="300">
                            <Tilt scale={1.02} transitionSpeed={2000} tiltMaxAngleX={4} tiltMaxAngleY={4}>
                                <div className="hosting-visual-panel hero-visual">
                                    <i className={heroIcon}></i>
                                </div>
                            </Tilt>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default HostingHero;
