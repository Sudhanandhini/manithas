import PropTypes from "prop-types";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";

const RelatedApplications = ({ eyebrow, title, description, apps, classOption }) => {
    return (
        <div className={`section section-padding-t90-b100 ${classOption}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 text-center">
                        <SectionTitleTwo subTitle={eyebrow} title={title} />
                        {description && <p data-aos="fade-up" data-aos-delay="100">{description}</p>}
                    </div>
                </div>

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6 mt-8">
                    {apps && apps.map((app, key) => (
                        <div key={key} className="col mb-6" data-aos="fade-up" data-aos-delay={100 * (key % 3)}>
                            <div className="icon-box box-border text-center">
                                <div className="icon">
                                    <i className={app.icon} style={{ fontSize: 40, color: "var(--clr-primary)" }}></i>
                                </div>
                                <div className="content">
                                    <h3 className="title">{app.title}</h3>
                                    <div className="desc">
                                        <p>{app.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

RelatedApplications.propTypes = {
    eyebrow: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    apps: PropTypes.array,
    classOption: PropTypes.string
};
RelatedApplications.defaultProps = {
    classOption: ""
};

export default RelatedApplications;
