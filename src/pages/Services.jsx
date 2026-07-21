import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ManufacturingProcess from "../components/services/ManufacturingProcess";
import WhyChooseServices from "../components/services/WhyChooseServices";
import FAQ from "../components/services/FAQ";
import CallToAction from "../components/services/CallToAction";
import Newsletter from "../components/home/Newsletter";

function Services() {
    return (
        <>
            <ServicesHero />
            <ServicesGrid />
            <ManufacturingProcess />
            <WhyChooseServices />
            <FAQ />
            <CallToAction />
            <Newsletter />
        </>
    );
}

export default Services;