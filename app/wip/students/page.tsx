import Header from "../_components/header";
import Hero from "../_components/hero";
import Sponsorship from "../_components/sponsorship";
import Explanation from "../_components/explanation";
import Opportunities from "../_components/opportunities";
import Cta from "../_components/cta";
import Footer from "../_components/footer";
import Preparetoshine from "../_components/preparetoshine";


export default function Page() {

    return <>

        {/*Header*/}
        <Header />

        {/*Hero Section*/}
        <Hero
            title="Launch Your"
            highlight="Creative Career"
            subtitle="Showcase your skills, connect with innovative companies, and grow your career with real-world opportunities."
            primaryButtonText="JOIN THE DIRECTORY"
            secondaryButtonText="EXPLORE OPPORTUNITIES"
            imageSrc="/stickynote.jpg"
            imageAlt="Employers Hero"
        />

        {/*Sponsor Section*/}
        <Sponsorship />

        {/*Explanation Section*/}
        <Explanation
            imageSrc="/collab.jpg"
            imageAlt="Your custom alt text"
            title="Opportunities Designed for Your Growth"
            description="We connect emerging talent like you with forward-thinking startups and creative teams. Gain exposure, mentorship, and the chance to work on real projects that build your future."
            points={[
                "Be discoverable by hiring teams activily looking for fresh talent",
                "Receive guidance and mentorship",
                "Access real-world opportunities, not just job lisitings"
            ]}
        />

        {/*Opportinities Section*/}
        < Opportunities
            sectionTitle="How to Get Started"
            sectionSubtext="NextFirstSteps offers tailored paths to meet your hiring goals - whether you prefer posting roles, browsing vetted candidates, or working with dedicated recruitment support."
            cards={[
                {
                    iconSrc: "/logo.svg",
                    iconAlt: "Custom Icon 1",
                    title: "1. Submit Your Portfolio",
                    imageSrc: "/portfolio.jpg",
                    imageAlt: "Portfoliio Image 1",
                    description: "Share your best work, tell us about your skills, interests, and goals.",
                    buttonText: "Button 1"
                },
                {
                    iconSrc: "/logo.svg",
                    iconAlt: "Custom Icon 2",
                    title: "2. Get Reviewed and Approved",
                    imageSrc: "/analyse.webp",
                    imageAlt: "Custom Image 2",
                    description: "Our team carefully reviews each application to ensure a great match for both candidates and companies.",
                    buttonText: "Button 2"
                },
                {
                    iconSrc: "/logo.svg",
                    iconAlt: "Custom Icon 3",
                    title: "3. Connect with Hiring Teams",
                    imageSrc: "/connect.jpg",
                    imageAlt: "Connect Img",
                    description: "Once approved, you'll be introduced to startups and creative companies looking for emerging talent like you.",
                    buttonText: "Button 3"
                }
            ]}
        />

        {/*Prepare to Shine Section*/}
        <Preparetoshine
            sectionTitle="Prepare to Shine"
            sectionDescription="We offer guides and tips to help you stand out when applying to startups and creative teams - from building a strong portfolio to preparing for interviews."
            slides={[
                {
                    imageSrc: "/computer.jpg",
                    imageAlt: "Custom Slide 1",
                    logoSrc: "/logo.svg",
                    logoAlt: "Custom Logo 1",
                    title: "Portfolio Building 101",
                    buttonText: "READ NOW"
                }
            ]}
        />


        {/*Cta Section*/}
        <Cta
            title="Start Your"
            highlight="Creative Journey"
            subtext="Showcase your skills, connect with forward-thinking teams, and buid your future in design and tech."
            postRoleText="JOIN THE DIRECTORY"
            findTalentText="EXPLORE OPPORTUNITIES"
        />

        {/*Footer Section*/}
        <Footer />



    </>



}