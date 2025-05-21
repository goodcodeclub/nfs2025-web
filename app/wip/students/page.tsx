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
                            Launch Your <br />
                            <span className="highlight">Creative Career</span>
                        </h1>
                        <p>
                            Showcase your skills, connect with innovative companies, and grow your career with real-world opportunities.
                        </p>
                        <div className="cta-primary-buttons py-5">
                            <button className="btn btn-outline-dark">Join the Directory</button>
                            <button className="btn btn-primary">Explore Opportunities</button>
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
                        <h2 className="fw-bold mt-5">Opportunities Designed for Your Growth</h2>
                        <p className="text-muted mt-5">
                            We connect emerging talent like you with forward-thinking startups and creative teams. Gain exposure, mentorship, and the chance to work on real projects that build your future.
                        </p>
                        <ul className="opportunity-list">
                            <li>
                                <i className="bi bi-check-circle-fill check-icon"></i>
                                Be discovered by hiring teams actively looking for fresh talent
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill check-icon"></i>
                                Receive guidance and mentorship
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill check-icon"></i>
                                Access real-world opportunities, not just job listings
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>


        {/*Get Started Section*/}

        <section className="get-started-section text-center">
            <div className="container">
                <h2 className="get-started-title">How to Get Started</h2>
                <p className="get-started-subtext">
                    NextFirstSteps offers tailored paths to meet your hiring goals — whether you prefer posting
                    roles, browsing vetted candidates, or working with dedicated recruitment support.
                </p>

                <div className="row g-5 justify-content-center">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <article className="process-card">
                            <div className="process-header">
                                <img src="/logo.svg" alt="Company Logo" className="process-icon" />
                                <h3 className="process-title">1. Submit Your Portfolio</h3>
                            </div>
                            <img src="/portfolio.jpg" alt="Submit Portfolio" className="process-image" />
                            <p className="process-description">
                                Share your best work and tell us about your skills, interests, and goals.
                            </p>
                        </article>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <article className="process-card">
                            <div className="process-header">
                                <img src="/logo.svg" alt="Company Logo" className="process-icon" />
                                <h3 className="process-title">2. Get Reviewed and Approved</h3>
                            </div>
                            <img src="/analyse.webp" alt="Review Portfolio" className="process-image" />
                            <p className="process-description">
                                Our team carefully reviews each application to ensure a great match for both candidates and companies.
                            </p>
                        </article>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <article className="process-card">
                            <div className="process-header">
                                <img src="/logo.svg" alt="Company Logo" className="process-icon" />
                                <h3 className="process-title">3. Connect with Hiring Teams</h3>
                            </div>
                            <img src="/connect.jpg" alt="Connect with Hiring Teams" className="process-image" />
                            <p className="process-description">
                                Once approved, you’ll be introduced to startups and creative companies looking for emerging talent like you.
                            </p>
                        </article>
                    </div>
                </div>

                <div className="cta-wrapper mt-5">
                    <button className="btn btn-primary">Submit Your Portfolio</button>
                </div>
            </div>
        </section>

        {/*Highlight Section*/}

        <section className="highlights-section">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Column: Text */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2 className="highlights-title">Prepare to Shine</h2>
                        <p className="highlights-description">
                            We offer guides and tips to help you stand out when applying to startups and creative teams —
                            from building a strong portfolio to preparing for interviews.
                        </p>
                    </div>

                    {/* Right Column: Carousel */}
                    <div className="col-md-6">
                        <div className="carousel-wrapper position-relative">
                            <div id="carouselGuides" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner visible-overflow">

                                    {/* Slide 1 */}
                                    <div className="carousel-item active">
                                        <article className="highlight-card">
                                            <img
                                                src="/computer.jpg"
                                                alt="Portfolio Slide"
                                                className="highlight-image"
                                            />
                                            <div className="highlight-subtext">
                                                <div className="highlight-title-group">
                                                    <img
                                                        src="/logo.svg"
                                                        alt="Logo"
                                                        className="highlight-logo"
                                                    />
                                                    <h5 className="highlight-title">Portfolio Building 101</h5>
                                                </div>
                                                <button className="btn btn-primary btn-sm">Read Now</button>
                                            </div>
                                        </article>
                                    </div>

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

        {/*CTA Section*/}

        <section className="cta-section">
            <div className="container">
                <div className="cta-block">
                    <h2 className="cta-title">
                        Start Your <span className="cta-highlight">Creative Journey</span>.
                    </h2>
                    <p className="cta-subtext">
                        Showcase your skills, connect with forward-thinking teams, and build your future in design and tech.
                    </p>
                    <div className="cta-buttons">
                        <button className="btn btn-outline-light">Join the Directory</button>
                        <button className="btn btn-primary">Explore Opportunities</button>
                    </div>
                </div>
            </div>
        </section>


        {/*Footer Section*/}

        <footer className="site-footer">
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
        </footer>



    </>



}