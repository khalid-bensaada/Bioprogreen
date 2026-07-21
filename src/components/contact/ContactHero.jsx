import { ArrowRight, Mail } from "lucide-react";
import heroImage from "../../assets/images/hero.jpg";

function ContactHero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background */}

            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Contact BioProGreen"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40"></div>
            </div>

            {/* Content */}

            <div className="relative">
                <div className="container mx-auto flex min-h-[550px] items-center px-6 py-24">

                    <div className="max-w-3xl text-white">

                        <span className="inline-block rounded-full bg-[#5A7D2B]/90 px-5 py-2 text-sm font-semibold tracking-wide">
                            Contact Us
                        </span>

                        <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
                            Let's Build Your
                            <span className="block text-[#A3D65C]">
                                Natural Cosmetics Brand
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
                            Whether you're looking for private label manufacturing,
                            wholesale supply, or custom cosmetic formulations,
                            our team is here to guide you through every step of
                            your project.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <button className="flex items-center gap-2 rounded-xl bg-[#5A7D2B] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#4C6A24]">
                                Request a Quote
                                <ArrowRight size={20} />
                            </button>

                            <button className="flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#5A7D2B]">
                                <Mail size={20} />
                                Email Us
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default ContactHero;