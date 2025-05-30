type TestimonialProps = {
    heading?: string;
    testimonials?: string[];
};

export default function Testimonial({
    heading = "Trusted by Startups and Innovators",
    testimonials = [
        "NextFirstSteps helped us find a brilliant junior designer in just three weeks — their platform made the process simple and seamless.",
        "We discovered amazing talent we wouldn’t have found elsewhere.",
        "The process was smooth and the candidates were well-prepared.",
        "Highly recommend for any company looking for creative talent.",
        "A fantastic resource for early-career hiring!"
    ]
}: TestimonialProps) {

    return (
        <section className="testimonials-section py-5">
            <div className="container position-relative">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="fw-bold mb-0">{heading}</h1>
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
                                {testimonials.map((testimonial, idx) => (
                                    <div className="testimonial-card" key={idx}>
                                        <i className="bi bi-quote fs-2 text-primary mb-3"></i>
                                        <p className="mb-0 text-muted">
                                            {testimonial}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

