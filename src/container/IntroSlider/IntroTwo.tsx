"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import Link from "next/link";

const YoutubeBackground = dynamic<any>(() => import('react-youtube-background'), { ssr: false });

const IntroTwo = () => {
    return (
            <YoutubeBackground
                videoId="v4uJvQINGmk"
                overlay="rgba(0,0,0,.4)"
                className="intro-section section bg-video"
            >
                <div className="container">
                    <div className="row row-cols-lg-1 row-cols-1">

                        <div className="col align-self-center">
                            <div className="intro-content-two text-center mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                                <h2 className="title">Designing awesome brands & experiences </h2>
                                <div className="desc">
                                    <p>We are an agency located in New York. We think strategy, craft design,
                                        develop digital and create motion. To forward your brand and business.</p>
                                </div>
                                <Link href={"/"} className="btn btn-primary btn-hover-secondary">Get Started</Link>
                                <Link href={"/"} className="btn btn-outline-white btn-hover-primary"> Learn More </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </YoutubeBackground>
    )
}


export default IntroTwo;
