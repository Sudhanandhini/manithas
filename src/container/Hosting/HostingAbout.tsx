"use client"
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';

const HostingAbout = ({ eyebrow, title, paragraphs, icon }) => {
    return (
        <div className="section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12 mb-lg-0 mb-8" data-aos="fade-up">
                        <Tilt scale={1.03} transitionSpeed={2000}>
                            <div className="hosting-visual-panel about-visual">
                                <i className={icon}></i>
                            </div>
                        </Tilt>
                    </div>
                    <div className="col-lg-6 col-12" data-aos="fade-up" data-aos-delay="150">
                        <SectionTitleTwo
                            subTitle={eyebrow}
                            title={title}
                        />
                        {paragraphs.map((paragraph, key) => (
                            <p key={key}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostingAbout;
