import PropTypes from "prop-types";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";

const ChecklistTwoColumn = ({ eyebrow, title, items, classOption }) => {
    const half = Math.ceil((items ? items.length : 0) / 2);
    const columnOne = items ? items.slice(0, half) : [];
    const columnTwo = items ? items.slice(half) : [];

    return (
        <div className={`section section-padding-t90-b100 ${classOption}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 text-center">
                        <SectionTitleTwo subTitle={eyebrow} title={title} />
                    </div>
                </div>

                <div className="row mt-8">
                    {[columnOne, columnTwo].map((column, colKey) => (
                        <div key={colKey} className="col-lg-6 col-12" data-aos="fade-up" data-aos-delay={colKey * 150}>
                            <ul className="agency-list">
                                {column.map((item, key) => (
                                    <li key={key}>
                                        <div className="icon"><i className="fas fa-check"></i></div>
                                        <div className="text">{item}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

ChecklistTwoColumn.propTypes = {
    eyebrow: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.array,
    classOption: PropTypes.string
};
ChecklistTwoColumn.defaultProps = {
    classOption: ""
};

export default ChecklistTwoColumn;
