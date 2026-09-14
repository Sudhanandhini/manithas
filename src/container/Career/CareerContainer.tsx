import WhyChooseIconGrid from "../../components/PageContent/WhyChooseIconGrid";

const benefits = [
    {
        icon: "fas fa-users",
        title: "Collaborative culture",
        description: "We're a small team - your work has real visibility and real impact on the projects we ship.",
    },
    {
        icon: "fas fa-chart-line",
        title: "Room to grow",
        description: "We invest in the tools, training, and time you need to get better at your craft.",
    },
    {
        icon: "fas fa-business-time",
        title: "Flexible ways of working",
        description: "We care about the work getting done well, not about watching a clock.",
    },
    {
        icon: "fas fa-award",
        title: "Work that matters",
        description: "With 1,500+ projects delivered for 1,200+ clients, what you build here reaches real businesses - not just a portfolio piece.",
    },
];

const CareerContainer = () => {
    return (
        <WhyChooseIconGrid
            eyebrow="Careers"
            title="Why people choose to build their career with us"
            description="We're a small, close-knit team - every person here does work that's visible, valued, and genuinely theirs."
            items={benefits}
            layout="icon"
        />
    );
};

export default CareerContainer;
