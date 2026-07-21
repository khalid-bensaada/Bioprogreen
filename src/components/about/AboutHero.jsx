import { ArrowRight } from "lucide-react";

function AboutHero() {
    return (
        <section className="bg-[#F5F8F2] py-28">
            <div className="container mx-auto px-6">

                <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
                    About BioProGreen
                </span>

                <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-gray-900">
                    Bringing Nature and Innovation Together
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
                    BioProGreen is committed to developing premium natural
                    products for agriculture and international markets through
                    innovation, sustainability and quality.
                </p>

                <button className="mt-10 flex items-center gap-3 rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800">
                    Explore Products
                    <ArrowRight size={20} />
                </button>

            </div>
        </section>
    );
}

export default AboutHero;