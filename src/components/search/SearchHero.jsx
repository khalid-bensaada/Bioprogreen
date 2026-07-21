import heroImage from "../../assets/images/hero.jpg";

function SearchHero() {
    return (
        <section className="relative overflow-hidden">

            {/* Background */}

            <div className="absolute inset-0">

                <img
                    src={heroImage}
                    alt="Search BioProGreen"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

            </div>


            {/* Content */}

            <div className="relative">

                <div className="container mx-auto flex min-h-[450px] items-center px-6 py-20">

                    <div className="max-w-3xl text-white">

                        <span className="inline-block rounded-full bg-[#5A7D2B]/90 px-5 py-2 text-sm font-semibold">
                            Search
                        </span>


                        <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
                            Find What You Need
                            <span className="block text-[#A3D65C]">
                                At BioProGreen
                            </span>
                        </h1>


                        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">

                            Search our products, categories, articles, and
                            services to quickly find the information you need.

                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default SearchHero;