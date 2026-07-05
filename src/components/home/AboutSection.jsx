import { FaLeaf, FaGlobe, FaFlask } from "react-icons/fa";
import { Link } from "react-router-dom";

import placeImage from "../../assets/images/about/place.jpg";
import oilsImage from "../../assets/images/about/oils.jpg";
import productsImage from "../../assets/images/about/productsabout.jpg";

function AboutSection() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                {/* Images */}
                <div className="grid grid-cols-2 gap-4">

                    <img
                        src={placeImage}
                        alt="BioProGreen Factory"
                        className="h-56 w-full rounded-3xl object-cover shadow-lg transition duration-300 hover:scale-105"
                    />

                    <img
                        src={oilsImage}
                        alt="Natural Oils"
                        className="h-56 w-full rounded-3xl object-cover shadow-lg transition duration-300 hover:scale-105"
                    />

                    <img
                        src={productsImage}
                        alt="BioProGreen Products"
                        className="col-span-2 h-80 w-full rounded-3xl object-cover shadow-lg transition duration-300 hover:scale-105"
                    />

                </div>

                {/* Content */}
                <div>

                    <span className="font-semibold uppercase tracking-[4px] text-green-700">
                        About BioProGreen
                    </span>

                    <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
                        Premium Moroccan Natural Cosmetics for Global Brands
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        BioProGreen is a Moroccan company specializing in the manufacturing,
                        export, and wholesale supply of premium natural cosmetic products.
                        We provide high-quality vegetable oils, essential oils, floral
                        waters, Rhassoul clay, Moroccan black soap, and complete Private
                        Label manufacturing services for brands around the world.
                    </p>

                    <div className="mt-10 space-y-6">

                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-green-100 p-3">
                                <FaLeaf className="text-xl text-green-700" />
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900">
                                    100% Natural Ingredients
                                </h4>

                                <p className="text-gray-600">
                                    Carefully selected premium Moroccan natural ingredients.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-green-100 p-3">
                                <FaFlask className="text-xl text-green-700" />
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900">
                                    Private Label Manufacturing
                                </h4>

                                <p className="text-gray-600">
                                    Complete OEM solutions from formulation to packaging.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-green-100 p-3">
                                <FaGlobe className="text-xl text-green-700" />
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900">
                                    Worldwide Export
                                </h4>

                                <p className="text-gray-600">
                                    Delivering Moroccan cosmetics to customers worldwide.
                                </p>
                            </div>
                        </div>

                    </div>

                    <Link
                        to="/about"
                        className="mt-10 inline-flex rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-green-800"
                    >
                        Learn More
                    </Link>

                </div>

            </div>
        </section>
    );
}

export default AboutSection;