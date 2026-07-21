import PropTypes from "prop-types";

const LogoBadgeStrip = ({ eyebrow, title, items, classOption }) => {
    return (
        <div className={`logo-badge-strip section ${classOption}`}>
            <div className="container">
                <div className="row align-items-center">
                    {(eyebrow || title) && (
                        <div className="col-lg-3 mb-4 mb-lg-0" data-aos="fade-up">
                            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
                            {title && <h4 className="strip-title">{title}</h4>}
                        </div>
                    )}
                    <div className={(eyebrow || title) ? "col-lg-9" : "col-lg-12"}>
                        <div className="badges">
                            {items.map((item, key) => (
                                <span className="logo-badge" key={key} data-aos="fade-up" data-aos-delay={key * 80}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

LogoBadgeStrip.propTypes = {
    eyebrow: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.array,
    classOption: PropTypes.string
};
LogoBadgeStrip.defaultProps = {
    classOption: ""
};

export default LogoBadgeStrip;
