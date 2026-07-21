import AboutHero from "../components/about/AboutHero";
import CompanyStory from "../components/about/CompanyStory";
import MissionVision from "../components/about/MissionVision";
import Values from "../components/about/Values";
import WhyChoose from "../components/about/WhyChoose";
import ManufacturingProcess from "../components/about/ManufacturingProcess";
import Certifications from "../components/about/Certifications";
import CallToAction from "../components/about/CallToAction";
import Statistics from "../components/home/Statistics";
import Newsletter from "../components/home/Newsletter";

function About() {
    return (
        <>
            <AboutHero />
            <CompanyStory />
            <MissionVision />
            <Values />
            <WhyChoose />
            <ManufacturingProcess />
            <Certifications />
            <Statistics />
            <CallToAction />
            <Newsletter />
        </>
    );
}

export default About;