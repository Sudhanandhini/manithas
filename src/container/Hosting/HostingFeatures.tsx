const HostingFeatures = ({ title, subtitle, features, columns = 3 }) => {
    return (
        <div className="section section-padding bg-color-1">
            <div className="container">
                <div className="section-title text-center" data-aos="fade-up">
                    <h2 className="title fz-32">{title}</h2>
                    <p className="sub-title">{subtitle}</p>
                </div>

                <div className={`row row-cols-lg-${columns} row-cols-md-2 row-cols-1 mb-n6`}>
                    {features.map((item, key) => (
                        <div className="col mb-6" key={key} data-aos="fade-up" data-aos-delay={key * 100}>
                            <div className="hosting-feature-item">
                                <div className="icon"><i className={item.icon}></i></div>
                                <h3 className="title">{item.title}</h3>
                                <p className="desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HostingFeatures;
