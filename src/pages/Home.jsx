import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import AboutSection from "../components/home/AboutSection";
import PrivateLabel from "../components/home/PrivateLabel";
import Statistics from "../components/home/Statistics";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/layout/Footer";

function Home() {
    return (
        <>
            <Hero />
            <Categories />
            <FeaturedProducts />
            <WhyChooseUs />
            <AboutSection />
            <PrivateLabel />
            <Statistics />
            <Testimonials />
            <Newsletter />
            <Footer />
        </>
    );
}

export default Home;