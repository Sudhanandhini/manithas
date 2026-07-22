import PropTypes from "prop-types";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";

const WhyChooseUs = ({ eyebrow, title, items, classOption }) => {
    return (
        <div className={`section section-padding-t90-b100 ${classOption}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 text-center">
                        <SectionTitleTwo subTitle={eyebrow} title={title} />
                    </div>
                </div>

                <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 mb-n6 mt-8 why-choose-grid">
                    {items && items.map((item, key) => (
                        <div key={key} className="col mb-6" data-aos="zoom-in" data-aos-delay={80 * (key % 4)}>
                            <div className="why-choose-item">
                                <span className="why-choose-number">{String(key + 1).padStart(2, "0")}</span>
                                <h3 className="title">{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

WhyChooseUs.propTypes = {
    eyebrow: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.array,
    classOption: PropTypes.string
};
WhyChooseUs.defaultProps = {
    classOption: ""
};

export default WhyChooseUs;
