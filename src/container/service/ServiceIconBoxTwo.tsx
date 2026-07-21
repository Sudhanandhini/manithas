"use client"
import PropTypes from "prop-types";
import {useEffect, useRef} from "react";
import Link from "next/link";
import IconBoxData from '../../data/iconBox/icon-box.json';
import IconBox from '../../components/IconBox/IconBox';
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import Parallax from 'parallax-js';

const ServiceIconBoxTwo = ({ classOption, data, eyebrow, title, ctaLabel, ctaLink, sectionKey }) => {
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })

        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className={`section section-padding-t90 section-padding-bottom ${classOption}`}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-end flex-wrap mb-8">
                    <SectionTitleTwo
                        subTitle={eyebrow}
                        title={title}
                    />
                    {ctaLabel && ctaLink && (
                        <Link className="btn btn-primary btn-hover-secondary mb-8" href={ctaLink}>{ctaLabel}</Link>
                    )}
                </div>

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6 icon-box-shape-animation">

                    {data && data.map((single, key) => {
                        const itemData = { ...single, id: `${sectionKey}-${single.id}` };
                        return(
                            <div key={key} className="col mb-6" data-aos="fade-up" data-aos-delay="300">
                                <IconBox classOption="box-border" data={itemData} key={key} />
                            </div>
                        );
                    })}

                    <div className="shape shape-1" id="scene" ref={sceneEl}>
                        <span data-depth="1"><img src={"/images/shape-animation/video-shape-1.png"} alt="" /></span>
                    </div>

                </div>

            </div>
        </div>
    )
}

ServiceIconBoxTwo.propTypes = {
    classOption: PropTypes.string,
    data: PropTypes.array,
    eyebrow: PropTypes.string,
    title: PropTypes.string,
    ctaLabel: PropTypes.string,
    ctaLink: PropTypes.string,
    sectionKey: PropTypes.string
};
ServiceIconBoxTwo.defaultProps = {
    classOption: "section section-padding-t90 section-padding-bottom",
    data: IconBoxData,
    eyebrow: "Grow your business with",
    title: "Services that create identities, build brands, and get results",
    sectionKey: "service"
};

export default ServiceIconBoxTwo
