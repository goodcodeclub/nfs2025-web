type OpportunityCard = {
    iconSrc: string;
    iconAlt: string;
    title: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    buttonText: string;
};

type OpportunitiesProps = {
    sectionTitle?: string;
    sectionSubtext?: string;
    cards?: OpportunityCard[];
};

export default function Opportunities({
    sectionTitle = "Flexible Options, Built for Growing Teams",
    sectionSubtext = "We offer tailored paths to meet your hiring goals - whether you prefer posting roles, browsing vetted candidates, or working with dedicated recruitment support.",
    cards = [
        {
            iconSrc: "/logo.svg",
            iconAlt: "Company Logo",
            title: "Job Board",
            imageSrc: "/portfolio.jpg",
            imageAlt: "Submit Portfolio",
            description: "Post opportunities and discover new voices ready to grow with you.",
            buttonText: "Post a Role"
        },
        {
            iconSrc: "/logo.svg",
            iconAlt: "Company Logo",
            title: "Talent Directory",
            imageSrc: "/analyse.webp",
            imageAlt: "Review Portfolio",
            description: "Browse curated portfolios from the next generation of creative innovators.",
            buttonText: "Explore Talent"
        },
        {
            iconSrc: "/logo.svg",
            iconAlt: "Company Logo",
            title: "Personalized Hiring Support",
            imageSrc: "/connect.jpg",
            imageAlt: "Connect with Hiring Teams",
            description: "Post opportunities and discover new voices ready to grow with you.",
            buttonText: "Get in Touch"
        }
    ]
}: OpportunitiesProps) {

    return (
        <section className="get-started-section text-center">
            <div className="container">
                <h1>{sectionTitle}</h1>
                <p className="get-started-subtext">{sectionSubtext}</p>
                <div className="row g-5 justify-content-center">
                    {cards.map((card, idx) => (
                        <div className="col-md-4" key={idx}>
                            <article className="process-card">
                                <div className="process-header">
                                    <img src={card.iconSrc} alt={card.iconAlt} className="process-icon" />
                                    <h2 className="process-title">{card.title}</h2>
                                </div>
                                <img src={card.imageSrc} alt={card.imageAlt} className="process-image" />
                                <p className="process-description">{card.description}</p>
                                <div className="cta-wrapper mt-5">
                                    <button className="btn btn-primary">{card.buttonText}</button>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

