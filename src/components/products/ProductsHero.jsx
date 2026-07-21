import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/images/products/essential-oils.jpg";

function ProductsHero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="BioProGreen Products"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>

            {/* Hero Content */}
            <div className="relative">
                <div className="container mx-auto flex min-h-[550px] items-center px-6 py-24">

                    <div className="max-w-3xl text-white">

                        <span className="inline-block rounded-full bg-[#5A7D2B]/90 px-5 py-2 text-sm font-semibold tracking-wide">
                            Premium Moroccan Products
                        </span>

                        <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
                            Natural Products
                            <span className="block text-[#A3D65C]">
                                Crafted for Global Markets
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
                            Discover our wide range of premium natural products,
                            including essential oils, vegetable oils, black
                            soap, rose water, rhassoul clay, and private label
                            cosmetic solutions manufactured with the highest
                            international quality standards.
                        </p>

                        {/* Stats */}
                        <div className="mt-10 flex flex-wrap gap-8">

                            <div>
                                <h3 className="text-3xl font-bold text-[#A3D65C]">
                                    50+
                                </h3>
                                <p className="text-gray-300">
                                    Premium Products
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-[#A3D65C]">
                                    30+
                                </h3>
                                <p className="text-gray-300">
                                    Export Countries
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-[#A3D65C]">
                                    100%
                                </h3>
                                <p className="text-gray-300">
                                    Natural Ingredients
                                </p>
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="mt-12 flex flex-wrap gap-4">

                            <button className="flex items-center gap-2 rounded-xl bg-[#5A7D2B] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#4C6A24] hover:shadow-xl">
                                Explore Products
                                <ArrowRight size={20} />
                            </button>

                            <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#5A7D2B]">
                                Request Catalog
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProductsHero;