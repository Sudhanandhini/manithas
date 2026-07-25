type ClientLogo = { label: string; logo: string };

const CLIENT_LOGOS: ClientLogo[] = [
    { label: "Supreme Products", logo: "/images/brand/clients/supreme-products.png" },
    { label: "Alcon", logo: "/images/brand/clients/alcon.png" },
    { label: "Bharat Electronics", logo: "/images/brand/clients/bharat-electronics.png" },
    { label: "ChildFund India", logo: "/images/brand/clients/childfund-india.png" },
    { label: "KLE Society's S. Nijalingappa College", logo: "/images/brand/clients/kle-society.png" },
    { label: "Apollo", logo: "/images/brand/clients/apollo.png" },
    { label: "DynaFusion", logo: "/images/brand/clients/dynafusion.png" },
    { label: "Indian Cricketers' Association", logo: "/images/brand/clients/ica.png" },
    { label: "Spectrum", logo: "/images/brand/clients/spectrum.png" },
    { label: "Indian Institute of Science", logo: "/images/brand/clients/indian-institute-of-science.png" },
];

const ClientLogoMarquee = ({ eyebrow = "Our Clients", title = "Brands That Trust Us" }: { eyebrow?: string; title?: string }) => {
    // Rendered twice back to back so the track can scroll exactly one set's
    // width and loop seamlessly instead of snapping back to the start.
    const track = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

    return (
        <div className="client-marquee-section section1">
            <div className="container">
                {(eyebrow || title) && (
                    <div className="text-center mb-8" data-aos="fade-up">
                        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
                        {title && <h4 className="strip-title">{title}</h4>}
                    </div>
                )}
            </div>

            <div className="client-marquee">
                <div className="client-marquee-track">
                    {track.map((client, key) => (
                        <div className="client-marquee-item" key={key}>
                            <img src={client.logo} alt={client.label} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientLogoMarquee;
