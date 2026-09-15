"use client"
import PropTypes from "prop-types";
import {useEffect, useRef} from "react";
import contactData from '../../data/contactInfo/contactInfo.json';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import ContactInfoItem from '../../components/ContactInfo/ContactInfoItem';
import Parallax from 'parallax-js';


const ContactInformation = ({ classOption }) => {
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })

        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className={`section section-padding-t90-b100 ${classOption}`}  style={{paddingTop: "0px"}}>
            <div className="container shape-animate">
                <SectionTitle
                    titleOption="section-title text-center mb-lg-12 mb-sm-8 mb-xs-8"
                    title=""
                    subTitle=""
                />

                <div className="row row-cols-lg-1 row-cols-md-1 row-cols-sm-1 row-cols-1 mb-n6" style={{paddingTop: "0px"}} >
                    {contactData && contactData.map((single, key) => {
                        return(
                            <div key={key} className="col mb-6" data-aos="fade-up">
                                <ContactInfoItem data={single} key={key} />
                            </div>
                        );
                    })}
                </div>

                <div className="shape shape-1" id="scene" ref={sceneEl}  style={{paddingTop: "0px"}}>
                  
                    <span data-depth="1"><img src={"/images/shape-animation/video-shape-1.png"} alt="shape" />
                    
                      </span>
                </div>

            </div>
        </div>
    )
}

ContactInformation.propTypes = {
    classOption: PropTypes.string
};
ContactInformation.defaultProps = {
    classOption: "section section-padding-t90-b100"
};

export default ContactInformation
