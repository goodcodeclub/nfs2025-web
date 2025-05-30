import Header from "../_components/header";
import Hero from "../_components/hero";
import Explanation from "../_components/explanation";
import Sponsorship from "../_components/sponsorship";
import Opportunities from "../_components/opportunities";
import Testimonial from "../_components/testimonial";
import Cta from "../_components/cta";
import Footer from "../_components/footer";
import Preparetoshine from "../_components/preparetoshine";

export default function Page() {

    return <>

        {/*Header*/}
        <Header />

        {/*Hero*/}
        <Hero
            title="Shape Your Future Team with"
            highlight="Emerging Talent"
            subtitle="Early-career creatives bring fresh ideas, energy, and long-term potential to your growing team."
            primaryButtonText="JOIN THE DIRECTORY"
            secondaryButtonText="FIND TALENT"
            imageSrc="/stickynote.jpg"
            imageAlt="Employers Hero"
        />

        {/*Sponsorship Section*/}
        <Sponsorship />

        {/*Explanation Section*/}
        <Explanation
            imageSrc="/collab.jpg"
            imageAlt="Your custom alt text"
            title="Why Invest in Emerging Talent?"
            description="Hiring early-career creatives brings new perspectives, energy, and adaptability into your team. They offer fresh skills aligned with today's digital trends - and the drive to grow alongside your company."
            points={[
                "Access to future-ready talent",
                "Build loyalty and mentorship pathways early",
                "Adapt and scale faster with motivated team members"
            ]}
        />

        {/*Opportunities Section*/}
        <Opportunities
            sectionTitle="Flexible Options, Built for Growing Teams"
            sectionSubtext="We offer tailored paths to meet your hiring goals - whether you prefer posting roles, browsing vetted candidates, or working with dedicated recruitement support."
            cards={[
                {
                    iconSrc: "/logo.svg",
                    iconAlt: "Custom Icon 1",
                    title: "Job Board",
                    imageSrc: "/portfolio.jpg",
                    imageAlt: "Portfoliio Image 1",
                    description: "Post opportunities and discover new voices ready to grow with you.",
                    buttonText: "POST A ROLE"
                },
                {
                    iconSrc: "/logo.svg",
                    iconAlt: "Custom Icon 2",
                    title: "Talent Directory",
                    imageSrc: "/analyse.webp",
                    imageAlt: "Custom Image 2",
                    description: "Browse curated portfolios from the next generation of creative innovators.",
                    buttonText: "EXPLORE TALENT"
                },
                {
                    iconSrc: "/logo.svg",
                    iconAlt: "Custom Icon 3",
                    title: "Personalized Hiring Support",
                    imageSrc: "/connect.jpg",
                    imageAlt: "Connect Img",
                    description: "Post opportunities and discover new voices ready to grow with you..",
                    buttonText: "GET IN TOUCH"
                }
            ]}
        />

        {/*Testimonial Section*/}
        <Testimonial
            heading="Trusted by Startups and Innovators"
            testimonials={[
                "NextFirstSteps helped us find brilliant junior designers in just three weeks - their platform made the process simple and seamless.",
                "NextFirstSteps helped us find brilliant junior designers in just three weeks - their platform made the process simple and seamless.",
                "NextFirstSteps helped us find brilliant junior designers in just three weeks - their platform made the process simple and seamless.",
                "NextFirstSteps helped us find brilliant junior designers in just three weeks - their platform made the process simple and seamless."
            ]}
        />

        {/*CTA Section*/}
        <Cta
            title="Start Building Your"
            highlight="Future Team"
            subtext="Find motivated early-career talent to power your company's next stage of growth."
            postRoleText="POST A ROLE"
            findTalentText="FIND TALENT"
        />

        {/*Footer Section*/}
        <Footer />

    </>



}