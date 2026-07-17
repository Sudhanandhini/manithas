import Link from "next/link";
import SectionTitle from "../../components/SectionTitles/SectionTitle";

const benefits = [
    {
        title: "Collaborative culture",
        desc: "We're a small team - your work has real visibility and real impact on the projects we ship.",
    },
    {
        title: "Room to grow",
        desc: "We invest in the tools and time you need to get better at your craft.",
    },
    {
        title: "Flexible ways of working",
        desc: "We care about the work getting done well, not about watching a clock.",
    },
];

const CareerContainer = () => {
    return (
        <div className="section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <SectionTitle
                            title="Join the Manithas team"
                            subTitle="We're a small agency that cares about doing great work for our clients. If that sounds like you, we'd love to hear from you."
                        />
                    </div>
                </div>

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 mb-n6 mt-10">
                    {benefits.map((benefit) => (
                        <div className="col mb-6" key={benefit.title}>
                            <div className="about-content-full text-center">
                                <h3 className="title" style={{ fontSize: 20 }}>{benefit.title}</h3>
                                <p>{benefit.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row justify-content-center mt-10">
                    <div className="col-lg-8 text-center">
                        <h3 style={{ fontSize: 24, marginBottom: 16 }}>Open positions</h3>
                        <p>
                            We don&apos;t have any specific openings listed right now, but we&apos;re always happy to
                            hear from talented people. Get in touch and tell us how you&apos;d like to contribute.
                        </p>
                        <Link href={"/contact"} className="btn btn-primary btn-hover-secondary mt-6">
                            Get in touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerContainer;
