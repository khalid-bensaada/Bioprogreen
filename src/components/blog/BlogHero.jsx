import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/images/hero.jpg";

function BlogHero() {
    return (
        <section className="relative overflow-hidden">

            {/* Background */}

            <div className="absolute inset-0">

                <img
                    src={heroImage}
                    alt="BioProGreen Blog"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40"></div>

            </div>


            {/* Content */}

            <div className="relative">

                <div className="container mx-auto flex min-h-[500px] items-center px-6 py-24">

                    <div className="max-w-3xl text-white">


                        <span className="inline-block rounded-full bg-[#5A7D2B]/90 px-5 py-2 text-sm font-semibold tracking-wide">
                            BioProGreen Blog
                        </span>


                        <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">

                            Discover Insights About

                            <span className="block text-[#A3D65C]">
                                Natural Cosmetics & Beauty
                            </span>

                        </h1>


                        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">

                            Explore expert articles about natural ingredients,
                            Moroccan cosmetics, private label manufacturing,
                            skincare trends, and the global beauty industry.

                        </p>


                        <button className="mt-10 flex items-center gap-2 rounded-xl bg-[#5A7D2B] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-[#4C6A24]">

                            Explore Articles

                            <ArrowRight size={20} />

                        </button>


                    </div>

                </div>

            </div>

        </section>
    );
}

export default BlogHero;