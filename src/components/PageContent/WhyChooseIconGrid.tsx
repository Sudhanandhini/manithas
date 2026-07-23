import PropTypes from "prop-types";
import Link from "next/link";

const WhyChooseIconGrid = ({ eyebrow, title, description, items, ctaLabel, ctaLink, classOption, layout }) => {
    const isCard = layout === "card";

    return (
        <div className={`section section-padding-t90-b100 ${classOption}`}>
            <div className="container">
                <div className="why-choose-icon-header d-flex justify-content-between align-items-end flex-wrap">
                    <div data-aos="fade-up">
                        {eyebrow && <span className="sub-title-plain">{eyebrow}</span>}
                        <h2 className="title" dangerouslySetInnerHTML={{ __html: title }} />
                        {description && <p className="mt-4">{description}</p>}
                    </div>
                    {ctaLabel && ctaLink && (
                        <Link className="btn btn-primary btn-hover-secondary mb-2" href={ctaLink} data-aos="fade-up" data-aos-delay="150">{ctaLabel}</Link>
                    )}
                </div>

                <div className="section-divider-dashed" data-aos="fade-up" data-aos-delay="100"></div>

                {isCard ? (
                    <div className="row row-cols-lg-2 row-cols-1 mb-n6 service-list-grid">
                        {items && items.map((item, key) => (
                            <div
                                key={key}
                                className="col mb-6"
                                data-aos={key % 2 === 0 ? "fade-right" : "fade-left"}
                                data-aos-delay={100 * (Math.floor(key / 2) % 4)}
                            >
                                <div className="service-list-item">
                                    <div className="service-list-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="service-list-content">
                                        <h3 className="title">{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 mb-n8 why-choose-icon-grid">
                        {items && items.map((item, key) => (
                            <div key={key} className="col mb-8" data-aos="fade-up" data-aos-delay={80 * (key % 4)}>
                                <div className="why-choose-icon-item">
                                    <div className="icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h3 className="title">{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

WhyChooseIconGrid.propTypes = {
    eyebrow: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array,
    ctaLabel: PropTypes.string,
    ctaLink: PropTypes.string,
    classOption: PropTypes.string,
    layout: PropTypes.oneOf(["icon", "card"])
};
WhyChooseIconGrid.defaultProps = {
    classOption: "",
    layout: "icon"
};

export default WhyChooseIconGrid;
