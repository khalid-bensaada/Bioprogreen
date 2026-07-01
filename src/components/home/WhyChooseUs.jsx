import {
    FaLeaf,
    FaGlobe,
    FaCertificate,
    FaTruck,
} from "react-icons/fa";

const features = [
    {
        icon: <FaLeaf />,
        title: "100% Natural Ingredients",
        description:
            "Premium natural cosmetic ingredients sourced with care.",
    },
    {
        icon: <FaCertificate />,
        title: "Certified Quality",
        description:
            "High manufacturing standards with strict quality control.",
    },
    {
        icon: <FaGlobe />,
        title: "Worldwide Export",
        description:
            "Serving partners and distributors across international markets.",
    },
    {
        icon: <FaTruck />,
        title: "Private Label Solutions",
        description:
            "Complete OEM & Private Label manufacturing for your brand.",
    },
];

function WhyChooseUs() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-green-700 font-semibold uppercase tracking-widest">
                        Why Choose Us
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-gray-900">
                        Trusted Partner for Natural Cosmetics
                    </h2>

                    <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
                        BioProGreen combines Moroccan natural resources,
                        modern production, and international standards
                        to deliver premium cosmetic products.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border p-8 text-center hover:shadow-xl transition"
                        >
                            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-700">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-semibold">
                                {item.title}
                            </h3>

                            <p className="mt-4 text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;