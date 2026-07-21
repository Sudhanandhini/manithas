"use client"
import React from 'react';
import Link from "next/link";
import CounterUpData from '../../data/counter/counterText.json';
import CounterUpItem from '../../components/CounterUp/CounterUpItem';

const FunfactTwo = () => {
    return (
        <div className="section section-padding-t90 section-padding-bottom bg-primary-blue">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="title fz-32">Ready To Launch Your Business Into Next Level?</h2>
                    <p className="sub-title">Let us call. Our team of experienced creatives and developers will listen, and provide you services of high quality.</p>
                </div>
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">

                        {CounterUpData && CounterUpData.map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up" data-aos-delay="300">
                                    <CounterUpItem data={single} key={key} />
                                </div>
                            );
                        })}

                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <Link className="btn btn-primary btn-hover-secondary" href={"/contact"}>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default FunfactTwo;
