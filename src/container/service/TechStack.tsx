import { SiMysql, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const techStackData = [
    { id: 1, type: "fa", icon: "fab fa-html5", label: "HTML", color: "#e34c26" },
    { id: 2, type: "fa", icon: "fab fa-php", label: "PHP", color: "#777bb4" },
    { id: 3, type: "fa", icon: "fas fa-globe", label: "Web Portal", color: "#0d6efd" },
    { id: 4, type: "fa", icon: "fas fa-database", label: "MongoDB", color: "#47a248" },
    { id: 5, type: "ri", Icon: SiMysql, label: "MySQL", color: "#4479a1" },
    { id: 6, type: "fa", icon: "fas fa-server", label: "Express.js", color: "#2b2b2b" },
    { id: 7, type: "fa", icon: "fab fa-react", label: "React", color: "#61dafb" },
    { id: 8, type: "fa", icon: "fab fa-node-js", label: "Node.js", color: "#339933" },
    { id: 9, type: "ri", Icon: SiNextdotjs, label: "Next.js", color: "#000000" },
    { id: 10, type: "ri", Icon: SiTailwindcss, label: "Tailwind CSS", color: "#06b6d4" }
];

// Duplicated so the marquee loop can wrap seamlessly at -50%
const marqueeItems = [...techStackData, ...techStackData];

const TechStack = () => {
    return (
        <div className="section section-padding-t90 section-padding-bottom bg-color-1">
            <div className="container">
                <div className="section-title text-center" data-aos="fade-up">
                    <h2 className="title fz-32">We are best in these Technology</h2>
                    <p className="sub-title">We excel in leveraging advanced technologies, including the MERN full stack, to deliver innovative solutions.</p>
                </div>
            </div>

            <div className="tech-stack-marquee" data-aos="fade-up" data-aos-delay="200">
                <div className="tech-stack-track">
                    {marqueeItems.map((item, key) => (
                        <div className="tech-stack-item" key={key}>
                            <div className="tech-stack-icon">
                                {item.type === "fa" ? (
                                    <i className={item.icon} style={{ color: item.color }}></i>
                                ) : (
                                    <item.Icon style={{ color: item.color }} />
                                )}
                            </div>
                            <h6 className="tech-stack-label">{item.label}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack;
