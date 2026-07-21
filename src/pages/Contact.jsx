import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import BusinessHours from "../components/contact/BusinessHours";
import FAQ from "../components/contact/FAQ";
import Newsletter from "../components/home/Newsletter";

function Contact() {
    return (
        <>
            <ContactHero />

            <ContactInfo />

            <ContactForm />

            <ContactMap />

            <BusinessHours />

            <FAQ />

            <Newsletter />
        </>
    );
}

export default Contact;