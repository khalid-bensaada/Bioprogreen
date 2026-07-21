import { ArrowRight, CalendarDays, User } from "lucide-react";
import arganImage from "../../assets/images/products/argan-oil.jpg";

function FeaturedPost() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">

                <div className="grid items-center gap-10 lg:grid-cols-2">

                    {/* Image */}

                    <div className="overflow-hidden rounded-3xl">

                        <img
                            src={arganImage}
                            alt="Featured Blog Post"
                            className="h-[450px] w-full object-cover transition duration-500 hover:scale-105"
                        />

                    </div>


                    {/* Content */}

                    <div>

                        <span className="rounded-full bg-[#5A7D2B]/10 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                            Featured Article
                        </span>


                        <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900">
                            The Power of Moroccan Argan Oil in Natural Cosmetics
                        </h2>


                        <p className="mt-6 leading-8 text-gray-600">

                            Discover why Moroccan argan oil is one of the most
                            valuable natural ingredients in skincare and haircare
                            products, and how brands use it to create premium
                            cosmetic solutions.

                        </p>


                        {/* Meta */}

                        <div className="mt-6 flex flex-wrap gap-6 text-gray-500">

                            <div className="flex items-center gap-2">
                                <CalendarDays size={18} />
                                <span>
                                    July 2026
                                </span>
                            </div>


                            <div className="flex items-center gap-2">
                                <User size={18} />
                                <span>
                                    BioProGreen Team
                                </span>
                            </div>

                        </div>


                        <button className="mt-8 flex items-center gap-2 rounded-xl bg-[#5A7D2B] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-[#4C6A24]">

                            Read Article

                            <ArrowRight size={20} />

                        </button>


                    </div>

                </div>

            </div>
        </section>
    );
}

export default FeaturedPost;