import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/images/products/vegetable-oils.jpg";

function CategoriesHero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Product Categories"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative">
                <div className="container mx-auto flex min-h-[500px] items-center px-6 py-24">

                    <div className="max-w-3xl text-white">

                        <span className="inline-block rounded-full bg-[#5A7D2B]/90 px-5 py-2 text-sm font-semibold tracking-wide">
                            Product Categories
                        </span>

                        <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
                            Explore Our
                            <span className="block text-[#A3D65C]">
                                Natural Product Categories
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
                            Browse our diverse range of premium Moroccan natural
                            products, carefully organized into categories to help
                            you find the ideal solution for your business,
                            wholesale, or private label needs.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <button className="flex items-center gap-2 rounded-xl bg-[#5A7D2B] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#4C6A24]">
                                Browse Categories
                                <ArrowRight size={20} />
                            </button>

                            <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#5A7D2B]">
                                Contact Us
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default CategoriesHero;