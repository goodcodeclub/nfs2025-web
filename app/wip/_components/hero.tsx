type HeroProps = {
    title?: string;
    highlight?: string;
    subtitle?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    imageSrc?: string;
    imageAlt?: string;
};

export default function Hero({
    title = "Launch Your",
    highlight = "Creative Career",
    subtitle = "Showcase your skills, connect with innovative companies, and grow your career with real-world opportunities.",
    primaryButtonText = "Join the Directory",
    secondaryButtonText = "Explore Opportunities",
    imageSrc = "/stickynote.jpg",
    imageAlt = "Creative Board"
}: HeroProps) {

    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left column: Text content */}
                    <div className="col-md-6 hero-text">
                        <h1>
                            {title} <br />
                            <span className="cta-highlight">{highlight}</span>
                        </h1>
                        <p>
                            {subtitle}
                        </p>
                        <div className="cta-primary-buttons py-5">
                            <button className="btn btn-outline-dark">{primaryButtonText}</button>
                            <button className="btn btn-primary">{secondaryButtonText}</button>
                        </div>
                    </div>

                    {/* Right column: Image */}
                    <div className="col-md-6 text-center">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

