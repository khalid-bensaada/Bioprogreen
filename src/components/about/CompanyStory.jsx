import { CheckCircle } from "lucide-react";

function CompanyStory() {
    const highlights = [
        "Premium Quality Products",
        "Sustainable & Eco-Friendly Solutions",
        "Worldwide Export Services",
        "Private Label Manufacturing",
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Image */}

                    <div className="relative">

                        <img
                            src="/images/about/company-story.jpg"
                            alt="BioProGreen Company"
                            className="h-[550px] w-full rounded-3xl object-cover shadow-xl"
                        />

                        <div className="absolute -bottom-6 -right-6 rounded-2xl bg-[#5A7D2B] p-6 text-white shadow-xl">

                            <h3 className="text-4xl font-bold">10+</h3>

                            <p className="mt-2">
                                Years of Experience
                            </p>

                        </div>

                    </div>

                    {/* Content */}

                    <div>

                        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                            Our Story
                        </span>

                        <h2 className="mt-6 text-4xl font-bold text-gray-900">
                            Building a Greener Future Through Innovation
                        </h2>

                        <p className="mt-6 leading-8 text-gray-600">
                            BioProGreen is dedicated to providing high-quality
                            natural agricultural solutions that help farmers,
                            distributors, and businesses achieve sustainable
                            growth while protecting the environment.
                        </p>

                        <p className="mt-6 leading-8 text-gray-600">
                            Our commitment to innovation, quality, and customer
                            satisfaction has allowed us to build long-term
                            partnerships with clients across international
                            markets through premium products and private label
                            manufacturing services.
                        </p>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2">

                            {highlights.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle
                                        size={22}
                                        className="text-[#5A7D2B]"
                                    />

                                    <span className="font-medium text-gray-700">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default CompanyStory;