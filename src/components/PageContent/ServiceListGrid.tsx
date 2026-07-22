import PropTypes from "prop-types";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";

const AOS_DIRECTIONS = ["fade-right", "fade-left"];

const ServiceListGrid = ({ eyebrow, title, items, classOption }) => {
    return (
        <div className={`section section-padding-t90-b100 ${classOption}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 text-center">
                        <SectionTitleTwo subTitle={eyebrow} title={title} />
                    </div>
                </div>

                <div className="row row-cols-lg-2 row-cols-1 mb-n6 mt-8 service-list-grid">
                    {items && items.map((item, key) => (
                        <div
                            key={key}
                            className="col mb-6"
                            data-aos={AOS_DIRECTIONS[key % 2]}
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
            </div>
        </div>
    )
}

ServiceListGrid.propTypes = {
    eyebrow: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.array,
    classOption: PropTypes.string
};
ServiceListGrid.defaultProps = {
    classOption: ""
};

export default ServiceListGrid;
