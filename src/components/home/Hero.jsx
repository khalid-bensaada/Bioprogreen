import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
    return (
        <section className="bg-[#FAF8F2]">
            <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row">

                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >
                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        100% Natural Cosmetics
                    </span>

                    <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
                        Nature's Beauty,
                        <span className="text-green-700"> Perfectly Crafted.</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg text-gray-600">
                        Discover premium Moroccan natural cosmetics, essential oils,
                        vegetable oils, floral waters, Rhassoul clay, and private label
                        manufacturing solutions.
                    </p>

                    <div className="mt-10 flex gap-4">
                        <button className="rounded-lg bg-green-700 px-7 py-4 font-semibold text-white transition hover:bg-green-800">
                            Shop Now
                        </button>

                        <button className="rounded-lg border border-green-700 px-7 py-4 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white">
                            Learn More
                        </button>
                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >
                    <img
                        src={heroImage}
                        alt="BioProGreen"
                        className="w-full rounded-3xl shadow-2xl"
                    />
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;