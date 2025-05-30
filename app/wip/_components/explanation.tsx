type ExplanationProps = {
    imageSrc?: string;
    imageAlt?: string;
    title?: string;
    description?: string;
    points?: string[];
};

export default function Explanation({
    imageSrc = "/collab.jpg",
    imageAlt = "Team Collaboration",
    title = "Why Invest in Emerging Talent?",
    description = "Hiring early-career creatives brings new perspectives, energy, and adaptability into your team. They offer fresh skills aligned with today's digital trends - and the drive to grow alongside your company.",
    points = [
        "Access to future-ready talent",
        "Build loyalty and mentorship pathways early",
        "Adapt and scale faster with motivated team members"
    ]
}: ExplanationProps) {

    return (
        <section className="py-5">
            <div className="container">
                <div className="row align-items-start g-5">
                    {/* Left Column: Image */}
                    <div className="col-md-5 mb-4 text-center">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="img-fluid rounded-4"
                        />
                    </div>

                    {/* Right Column: Text */}
                    <div className="col-md-7">
                        <h1 className="fw-bold mt-5">{title}</h1>
                        <p className="text-muted mt-5">{description}</p>
                        <ul className="opportunity-list">
                            {points.map((point, idx) => (
                                <li key={idx}>
                                    <i className="bi bi-check-circle-fill check-icon"></i>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

