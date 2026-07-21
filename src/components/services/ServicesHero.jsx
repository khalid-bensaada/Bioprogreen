import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/images/private-label/private-label.jpg";

function ServicesHero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background */}

            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="BioProGreen Services"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40"></div>
            </div>

            {/* Content */}

            <div className="relative">
                <div className="container mx-auto flex min-h-[550px] items-center px-6 py-24">

                    <div className="max-w-3xl text-white">

                        <span className="inline-block rounded-full bg-[#5A7D2B]/90 px-5 py-2 text-sm font-semibold tracking-wide">
                            Our Services
                        </span>

                        <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
                            Complete Manufacturing
                            <span className="block text-[#A3D65C]">
                                & Private Label Solutions
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
                            From product development and custom formulations to
                            manufacturing, packaging, and worldwide export,
                            BioProGreen helps businesses create premium natural
                            cosmetic products with international quality
                            standards.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <button className="flex items-center gap-2 rounded-xl bg-[#5A7D2B] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#4C6A24]">
                                Request a Quote
                                <ArrowRight size={20} />
                            </button>

                            <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#5A7D2B]">
                                Contact Us
                            </button>

                        </div>

                        {/* Stats */}

                        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">

                            <div>
                                <h3 className="text-3xl font-bold text-[#A3D65C]">
                                    15+
                                </h3>
                                <p className="mt-2 text-gray-300">
                                    Years Experience
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-[#A3D65C]">
                                    40+
                                </h3>
                                <p className="mt-2 text-gray-300">
                                    Natural Products
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-[#A3D65C]">
                                    30+
                                </h3>
                                <p className="mt-2 text-gray-300">
                                    Export Countries
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-[#A3D65C]">
                                    100%
                                </h3>
                                <p className="mt-2 text-gray-300">
                                    Natural Ingredients
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default ServicesHero;