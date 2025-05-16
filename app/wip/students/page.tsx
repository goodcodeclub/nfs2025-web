export default function Page() {

    return <>
        <header className="bg-white border-bottom py-3">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Logo */}
                <div className="d-flex align-items-start mb-3">
                    <div className="fw-bold fs-4 text-dark">
                        NextFirstSteps
                    </div>
                    <img
                        src="/logo.svg"
                        alt="Company Logo"
                        style={{ width: '12px', height: 'auto' }}
                        className="me-1"
                    />
                </div>

                {/* Navigation */}
                <nav className="d-none d-md-flex gap-4 align-items-center">
                    <a href="#" className="text-dark text-decoration-none">Services</a>
                    <a href="#" className="text-dark text-decoration-none">For Employers</a>
                    <a href="#" className="text-dark text-decoration-none">For Students</a>
                </nav>

                {/* CTA Button */}
                <a href="#" className="btn btn-primary">
                    Get Started
                </a>
            </div>
        </header>

        <section className="py-5 bg-white">
            <div className="container">
                <div className="row align-items-start">

                    {/* Left column: Text content */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h1 className="fw-bold mt-5">
                            Launch Your <br />
                            <span className="text-success">Creative Career</span>
                        </h1>
                        <p className="text-muted mt-4 mb-5">
                            Showcase your skills, connect with innovative companies, and grow your career with real-world opportunities.
                        </p>
                        <div className="d-flex gap-3">
                            <button className="btn btn-outline-dark">Join the Directory</button>
                            <button className="btn btn-success">Explore Opportunities</button>
                        </div>
                    </div>

                    {/* Right column: Image */}
                    <div className="col-md-6 text-center">
                        <img
                            src="/stickynote.jpg"
                            alt="Creative Board"
                            className="img-fluid rounded-4"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className="py-5 w-100">
            <div className="container text-center mb-4">
                <p className="text-muted mb-0">
                    In partnership with Canada’s leading creative and technology programs.
                </p>
            </div>

            <div className="container-fluid">
                <div className="d-flex flex-wrap justify-content-center gap-4 px-3">
                    <img
                        src="/gbc logo.png"
                        alt="George Brown"
                        className="img-fluid"
                        style={{ maxHeight: '60px' }}
                    />
                    <img
                        src="/rgd.png"
                        alt="RGD"
                        className="img-fluid"
                        style={{ maxHeight: '60px' }}
                    />
                    <img
                        src="/gbc logo.png"
                        alt="George Brown"
                        className="img-fluid"
                        style={{ maxHeight: '60px' }}
                    />
                    <img
                        src="/rgd.png"
                        alt="RGD"
                        className="img-fluid"
                        style={{ maxHeight: '60px' }}
                    />
                    <img
                        src="/gbc logo.png"
                        alt="George Brown"
                        className="img-fluid"
                        style={{ maxHeight: '60px' }}
                    />
                    <img
                        src="/rgd.png"
                        alt="RGD"
                        className="img-fluid"
                        style={{ maxHeight: '60px' }}
                    />
                    <img
                        src="/gbc logo.png"
                        alt="George Brown"
                        className="img-fluid"
                        style={{ maxHeight: '60px' }}
                    />
                    <img
                        src="/rgd.png"
                        alt="RGD"
                        className="img-fluid"
                        style={{ maxHeight: '60px' }}
                    />
                    <img
                        src="/gbc logo.png"
                        alt="George Brown"
                        className="img-fluid"
                        style={{ maxHeight: '60px' }}
                    />
                </div>
            </div>
        </section>

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
                        <ul className="list-unstyled mt-4">
                            <li className="mb-3 d-flex align-items-start">
                                <span className="text-success me-2">✔</span>
                                <span>Be discovered by hiring teams actively looking for fresh talent</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start">
                                <span className="text-success me-2">✔</span>
                                <span>Receive guidance and mentorship</span>
                            </li>
                            <li className="d-flex align-items-start">
                                <span className="text-success me-2">✔</span>
                                <span>Access real-world opportunities, not just job listings</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5 bg-light text-center">
            <div className="container">
                {/* Heading */}
                <h1 className="fw-bold mb-3">How to Get Started</h1>
                <p className="text-muted mb-5 subtext mx-auto">
                    NextFirstSteps offers tailored paths to meet your hiring goals — whether you prefer posting
                    roles, browsing vetted candidates, or working with dedicated recruitment support.
                </p>
                {/* Cards Row */}
                <div className="row g-5 justify-content-center">
                    {/* Step 1 */}
                    <div className="col-md-4">
                        <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-start">
                            <div className="d-flex align-items-start mb-3">
                                <img
                                    src="/logo.svg"
                                    alt="Company Logo"
                                    style={{ width: '32px', height: 'auto' }}
                                    className="me-4"
                                />
                                <h3 className="fw-bold mb-0">1. Submit Your Portfolio</h3>
                            </div>
                            <img
                                src="/portfolio.jpg"
                                alt="Submit Portfolio"
                                className="img-fluid rounded mt-2 mb-4"
                            />
                            <p className="text-muted">
                                Share your best work and tell us about your skills, interests, and goals.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="col-md-4">
                        <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-start">
                            <div className="d-flex align-items-start mb-3">
                                <img
                                    src="/logo.svg"
                                    alt="Company Logo"
                                    style={{ width: '32px', height: 'auto' }}
                                    className="me-4"
                                />
                                <h3 className="fw-bold mb-0">2. Get Reviewed and Approved</h3>
                            </div>
                            <img
                                src="/analyse.webp"
                                alt="Review Portfolio"
                                className="img-fluid rounded mt-2 mb-4"
                            />
                            <p className="text-muted">
                                Our team carefully reviews each application to ensure a great match for both candidates and companies.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="col-md-4">
                        <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-start">
                            <div className="d-flex align-items-start mb-3">
                                <img
                                    src="/logo.svg"
                                    alt="Company Logo"
                                    style={{ width: '32px', height: 'auto' }}
                                    className="me-4"
                                />
                                <h3 className="fw-bold mb-0">3. Connect with Hiring Teams</h3>
                            </div>
                            <img
                                src="/connect.jpg"
                                alt="Connect with Hiring Teams"
                                className="img-fluid rounded mt-2 mb-4"
                            />
                            <p className="text-muted">
                                Once approved, you’ll be introduced to startups and creative companies looking for emerging talent like you.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-5">
                    <button className="btn btn-primary">Submit Your Portfolio</button>
                </div>
            </div>
        </section>

        <section className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column: Text */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2 className="fw-bold mb-3">Prepare to Shine</h2>
                        <p className="text-muted" style={{ maxWidth: '500px' }}>
                            We offer guides and tips to help you stand out when applying to startups and creative teams — from building a strong portfolio to preparing for interviews.
                        </p>
                    </div>

                    {/* Right Column: Carousel */}
                    <div className="col-md-6">
                        <div className="position-relative">
                            <div id="carouselGuides" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner" style={{ overflow: 'visible' }}>
                                    {/* Slide 1 */}
                                    <div className="carousel-item active">
                                        <div className="bg-white rounded-4 shadow-sm p-3">
                                            <img
                                                src="/computer.jpg"
                                                alt="Portfolio Slide"
                                                className="img-fluid rounded mb-3"
                                            />
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                {/* Left side: logo + title */}
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="/logo.svg"
                                                        alt="Logo"
                                                        style={{ width: '24px', height: 'auto' }}
                                                        className="me-3 mt-1"
                                                    />
                                                    <h5 className="fw-bold mb-0">Portfolio Building 101</h5>
                                                </div>

                                                {/* Right side: button */}
                                                <button className="btn btn-primary btn-sm">Read Now</button>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                {/* Carousel controls */}
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


    </>



}