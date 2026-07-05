import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import privateLabelImage from "../../assets/images/private-label/private-label.jpg";

function PrivateLabel() {
    const features = [
        "Custom Formula Development",
        "Premium Packaging Design",
        "Bulk Production",
        "Worldwide Export",
        "Quality Control",
        "Fast Manufacturing",
    ];

    return (
        <section className="bg-[#F8F5EF] py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">

                    <span className="font-semibold uppercase tracking-[4px] text-green-700">
                        Private Label
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-gray-900">
                        Launch Your Cosmetic Brand With Us
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                        BioProGreen helps entrepreneurs, distributors and cosmetic brands
                        create premium Moroccan natural cosmetic products under their own
                        brand with complete manufacturing solutions.
                    </p>

                </div>

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Image */}

                    <div className="relative">

                        <img
                            src={privateLabelImage}
                            alt="Private Label"
                            className="rounded-3xl shadow-2xl"
                        />

                        <div className="absolute -bottom-8 left-8 rounded-2xl bg-white p-6 shadow-xl">

                            <h3 className="text-3xl font-bold text-green-700">
                                500+
                            </h3>

                            <p className="text-gray-600">
                                Brands Supported
                            </p>

                        </div>

                    </div>

                    {/* Content */}

                    <div>

                        <h3 className="text-3xl font-bold text-gray-900">
                            Complete OEM & Private Label Solutions
                        </h3>

                        <p className="mt-6 leading-8 text-gray-600">
                            From product formulation and ingredient sourcing to packaging,
                            branding and international shipping, BioProGreen provides
                            everything needed to launch your cosmetic business successfully.
                        </p>

                        <div className="mt-10 grid gap-5">

                            {features.map((feature) => (

                                <div
                                    key={feature}
                                    className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
                                >
                                    <FaCheckCircle className="text-green-700" />

                                    <span className="font-medium">
                                        {feature}
                                    </span>

                                </div>

                            ))}

                        </div>

                        <div className="mt-10 flex flex-wrap gap-5">

                            <Link
                                to="/contact"
                                className="rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
                            >
                                Request a Quote
                            </Link>

                            <Link
                                to="/services"
                                className="flex items-center gap-3 rounded-xl border border-green-700 px-8 py-4 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
                            >
                                Learn More

                                <FaArrowRight />
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default PrivateLabel;