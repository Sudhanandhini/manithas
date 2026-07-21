import PropTypes from "prop-types";
import Link from "next/link";

const ContentSection = ({ eyebrow, title, description, bullets, ctaLabel, ctaLink }) => {
    return (
        <div className="section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 text-center">
                        <div className="section-title-two" data-aos="fade-up">
                            <span className="sub-title">{eyebrow}</span>
                            <h3 className="title">{title}</h3>
                        </div>

                        <p data-aos="fade-up" data-aos-delay="100">{description}</p>

                        {bullets && bullets.length > 0 && (
                            <ul className="agency-list d-inline-block text-start" data-aos="fade-up" data-aos-delay="200">
                                {bullets.map((bullet, key) => (
                                    <li className="item" key={key}>
                                        <div className="icon"><i className="fas fa-check"></i></div>
                                        <div className="text">{bullet}</div>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div data-aos="fade-up" data-aos-delay="300">
                            <Link className="btn btn-primary btn-hover-secondary mt-6" href={ctaLink}>{ctaLabel}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ContentSection.propTypes = {
    eyebrow: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    bullets: PropTypes.array,
    ctaLabel: PropTypes.string,
    ctaLink: PropTypes.string
};
ContentSection.defaultProps = {
    ctaLabel: "Contact Us",
    ctaLink: "/contact"
};

export default ContentSection;
