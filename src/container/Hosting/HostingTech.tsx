import { SiWoocommerce, SiWordpress, SiShopify, SiPhpmyadmin } from "react-icons/si";

const techData = [
    { id: 1, Icon: SiWoocommerce, label: "WooCommerce" },
    { id: 2, Icon: SiWordpress, label: "WordPress" },
    { id: 3, Icon: SiShopify, label: "Shopify" },
    { id: 4, Icon: SiPhpmyadmin, label: "phpMyAdmin" }
];

const HostingTech = () => {
    return (
        <div className="hosting-tech-strip section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 mb-6 mb-lg-0" data-aos="fade-up">
                        <h3 className="mb-2">Technologies We Work On</h3>
                        <p className="mb-0">Top-notch website development services</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="tech-icons justify-content-lg-end">
                            {techData.map((item, key) => (
                                <span key={item.id} title={item.label} data-aos="zoom-in" data-aos-delay={key * 100}>
                                    <item.Icon />
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostingTech;
