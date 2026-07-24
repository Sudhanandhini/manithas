import PropTypes from "prop-types";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";

const ProcessSteps = ({ eyebrow, title, description, steps, classOption }) => {
    return (
        <div className={`section section-padding-t90-b100 ${classOption}`}>
            <div className="container">
                <div className="row ">
                    <div className="col-xl-8 col-lg-10 ">
                        <SectionTitleTwo subTitle={eyebrow} title={title} />
                        {description && <p data-aos="fade-up" data-aos-delay="100">{description}</p>}
                    </div>
                </div>

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 mb-n6 mt-8">
                    {steps && steps.map((step, key) => {
                        const isLast = key === steps.length - 1;
                        return (
                            <div
                                key={key}
                                className="col mb-6"
                                data-aos="fade-up"
                                data-aos-delay={100 * (key % 3)}
                            >
                                <div
                                    style={{
                                        height: "100%",
                                        padding: "32px 28px",
                                        borderRadius: 6,
                                        border: `1px solid ${isLast ? "var(--clr-primary)" : "#e6e6ec"}`,
                                        background: isLast ? "var(--clr-primary)" : "var(--clr-white, #fff)",
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: 6,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: 20,
                                            background: isLast ? "rgba(255,255,255,0.15)" : "rgba(18,146,238,0.08)"
                                        }}
                                    >
                                        <i
                                            className={step.icon}
                                            style={{
                                                fontSize: 20,
                                                color: isLast ? "#fff" : "var(--clr-primary)"
                                            }}
                                        ></i>
                                    </div>
                                    <h3
                                        className="title"
                                        style={{ fontSize: 18, marginBottom: 10, color: isLast ? "#fff" : undefined }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p style={{ color: isLast ? "rgba(255,255,255,0.85)" : undefined, marginBottom: 0 }}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

ProcessSteps.propTypes = {
    eyebrow: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    steps: PropTypes.array,
    classOption: PropTypes.string
};
ProcessSteps.defaultProps = {
    classOption: ""
};

export default ProcessSteps;
