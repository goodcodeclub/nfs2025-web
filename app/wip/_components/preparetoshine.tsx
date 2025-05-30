type HighlightSlide = {
    imageSrc: string;
    imageAlt: string;
    logoSrc: string;
    logoAlt: string;
    title: string;
    buttonText: string;
};

type PreparetoshineProps = {
    sectionTitle?: string;
    sectionDescription?: string;
    slides?: HighlightSlide[];
};

export default function Preparetoshine({
    sectionTitle = "Prepare to Shine",
    sectionDescription = "We offer guides and tips to help you stand out when applying to startups and creative teams — from building a strong portfolio to preparing for interviews.",
    slides = [
        {
            imageSrc: "/computer.jpg",
            imageAlt: "Portfolio Slide",
            logoSrc: "/logo.svg",
            logoAlt: "Logo",
            title: "Portfolio Building 101",
            buttonText: "Read Now"
        }
    ]
}: PreparetoshineProps) {

    return (
        <section className="highlights-section">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Column: Text */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2 className="highlights-title">{sectionTitle}</h2>
                        <p className="highlights-description">
                            {sectionDescription}
                        </p>
                    </div>

                    {/* Right Column: Carousel */}
                    <div className="col-md-6">
                        <div className="carousel-wrapper position-relative">
                            <div id="carouselGuides" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner visible-overflow">
                                    {slides.map((slide, idx) => (
                                        <div
                                            className={`carousel-item${idx === 0 ? " active" : ""}`}
                                            key={idx}
                                        >
                                            <article className="highlight-card">
                                                <img
                                                    src={slide.imageSrc}
                                                    alt={slide.imageAlt}
                                                    className="highlight-image"
                                                />
                                                <div className="highlight-subtext">
                                                    <div className="highlight-title-group">
                                                        <img
                                                            src={slide.logoSrc}
                                                            alt={slide.logoAlt}
                                                            className="highlight-logo"
                                                        />
                                                        <h5 className="highlight-title">{slide.title}</h5>
                                                    </div>
                                                    <button className="btn btn-primary btn-sm">{slide.buttonText}</button>
                                                </div>
                                            </article>
                                        </div>
                                    ))}
                                </div>

                                {/* Carousel Controls */}
                                <button
                                    className="carousel-control-prev custom-carousel-control"
                                    type="button"
                                    data-bs-target="#carouselGuides"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <button
                                    className="carousel-control-next custom-carousel-control"
                                    type="button"
                                    data-bs-target="#carouselGuides"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

