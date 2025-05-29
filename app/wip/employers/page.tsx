import Header from "../_components/header";

export default function Page() {

    return <>

        {/*Header*/}

        <Header />
        {/*Hero Section*/}
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left column: Text content */}
                    <div className="col-md-6 hero-text">
                        <h1>
                            Shape Your Future Team with <br />
                            <span className="cta-highlight">Emerging Talent</span>
                        </h1>
                        <p>
                            Early-career creatives bring fresh ideas, energy, and long-term potential to your growing team.
                        </p>
                        <div className="cta-primary-buttons py-5">
                            <button className="btn btn-outline-dark">JOIN THE DIRECTORY</button>
                            <button className="btn btn-primary">FIND TALENT</button>
                        </div>
                    </div>

                    {/* Right column: Image */}
                    <div className="col-md-6 text-center">
                        <img
                            src="/stickynote.jpg"
                            alt="Creative Board"
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/*Sponsor Section*/}

        <section className="sponsor-section">
            <div className="container text-center mb-4">
                <p className="sponsor-tagline">
                    In partnership with Canada’s leading creative and technology programs.
                </p>
            </div>

            <div className="container-fluid">
                <div className="sponsor-logos">
                    <img src="/gbc logo.png" alt="George Brown" className="sponsor-logo" />
                    <img src="/rgd.png" alt="RGD" className="sponsor-logo" />
                    <img src="/gbc logo.png" alt="George Brown" className="sponsor-logo" />
                    <img src="/rgd.png" alt="RGD" className="sponsor-logo" />
                    <img src="/gbc logo.png" alt="George Brown" className="sponsor-logo" />
                    <img src="/rgd.png" alt="RGD" className="sponsor-logo" />
                    <img src="/gbc logo.png" alt="George Brown" className="sponsor-logo" />
                    <img src="/rgd.png" alt="RGD" className="sponsor-logo" />
                    <img src="/gbc logo.png" alt="George Brown" className="sponsor-logo" />
                </div>
            </div>
        </section>

        {/*Opportunities for Students Section*/}

        <section className="py-5">
            <div className="container">
                <div className="row align-items-start g-5">
                    {/* Left Column: Image */}
                    <div className="col-md-5 mb-4 text-center">
                        <img
                            src="/collab.jpg"
                            alt="Team Collaboration"
                            className="img-fluid rounded-4"
                        />
                    </div>

                    {/* Right Column: Text */}
                    <div className="col-md-7">
                        <h1 className="fw-bold mt-5">Why Invest in Emerging Talent?</h1>
                        <p className="text-muted mt-5">
                            Hiring early-career creatives brings new perspectives, energy, and adaptability into your team. They offer fresh skills aligned with today's digital trends - and the drive to grow alongside your company.
                        </p>
                        <ul className="opportunity-list">
                            <li>
                                <i className="bi bi-check-circle-fill check-icon"></i>
                                Access to future-ready talent
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill check-icon"></i>
                                Build loyalty and mentorship pathways early
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill check-icon"></i>
                                Adapt and scale faster with motivated team members
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>

        {/*Get Started Section*/}

        <section className="get-started-section text-center">
            <div className="container">
                <h1>Flexible Options, Built for Growing Teams</h1>
                <p className="get-started-subtext">
                    We offer tailored paths to meet your hiring goals - whether you prefer posting roles, browsing vetted candidates, or working with dedicated recruitment support.
                </p>

                <div className="row g-5 justify-content-center">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <article className="process-card">
                            <div className="process-header">
                                <img src="/logo.svg" alt="Company Logo" className="process-icon" />
                                <h3 className="process-title">Job Board</h3>
                            </div>
                            <img src="/portfolio.jpg" alt="Submit Portfolio" className="process-image" />
                            <p className="process-description">
                                Post opportunities and discover new voices ready to grow with you.
                            </p>
                            <div className="cta-wrapper mt-5">
                                <button className="btn btn-primary">Post a Role</button>
                            </div>
                        </article>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <article className="process-card">
                            <div className="process-header">
                                <img src="/logo.svg" alt="Company Logo" className="process-icon" />
                                <h3 className="process-title">Talent Directory</h3>
                            </div>
                            <img src="/analyse.webp" alt="Review Portfolio" className="process-image" />
                            <p className="process-description">
                                Browse curated portfolios from the next generation of creative innovators.
                            </p>
                            <div className="cta-wrapper mt-5">
                                <button className="btn btn-primary">Explore Talent</button>
                            </div>
                        </article>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <article className="process-card">
                            <div className="process-header">
                                <img src="/logo.svg" alt="Company Logo" className="process-icon" />
                                <h3 className="process-title">Personalized Hiring Support</h3>
                            </div>
                            <img src="/connect.jpg" alt="Connect with Hiring Teams" className="process-image" />
                            <p className="process-description">
                                Post opportunities and discover new voices ready to grow with you.
                            </p>
                            <div className="cta-wrapper mt-5">
                                <button className="btn btn-primary">Get in Touch</button>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        {/*Testimonial Section*/}
        <section className="testimonials-section py-5">
            <div className="container position-relative">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="fw-bold mb-0">Trusted by Startups and Innovators</h1>
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-link p-0"
                            type="button"
                            data-bs-target="#testimonialCarousel"
                            data-bs-slide="prev"
                        >
                            <i className="bi bi-chevron-left fs-3 light-grey-arrow"></i>
                        </button>
                        <button
                            className="btn btn-link p-0"
                            type="button"
                            data-bs-target="#testimonialCarousel"
                            data-bs-slide="next"
                        >
                            <i className="bi bi-chevron-right fs-3 darker-grey-arrow"></i>
                        </button>
                    </div>
            </div>

            <div id="testimonialCarousel" className="carousel slide overflow-visible" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-track d-flex gap-4">
                            {Array(5).fill(0).map((_, idx) => (
                                <div className="testimonial-card" key={idx}>
                                    <i className="bi bi-quote fs-2 text-primary mb-3"></i>
                                    <p className="mb-0 text-muted">
                                        NextFirstSteps helped us find a brilliant junior designer in just three weeks — their platform made the process simple and seamless.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >









        {/*CTA Section*/ }

        < section className = "cta-section" >
            <div className="container">
                <div className="cta-block">
                    <h2 className="cta-title">
                        Start Building Your <span className="cta-highlight">Future Team</span>.
                    </h2>
                    <p className="cta-subtext">
                        Find motivated early-career talent to power your company's next stage of growth.
                    </p>
                    <div className="cta-buttons">
                        <button className="btn btn-outline-light">Post a Role</button>
                        <button className="btn btn-primary">Find Talent</button>
                    </div>
                </div>
            </div>
        </section >


        {/*Footer Section*/ }

        < footer className = "site-footer" >
            <div className="container">
                <div className="footer-brand">
                    <span className="footer-title">NextFirstSteps</span>
                    <img
                        src="/logo.svg"
                        alt="Company Logo"
                        className="footer-logo"
                    />
                </div>

                <div className="footer-subtext">
                    <small>2025 NextFirstSteps</small>
                    <small>All rights reserved.</small>
                </div>
            </div>
        </footer >





    </>



}