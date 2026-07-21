import { ArrowRight, Phone } from "lucide-react";

function CallToAction() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">

                <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#5A7D2B] to-[#7BAE3C] px-8 py-16 text-white shadow-2xl lg:px-16">

                    <div className="grid items-center gap-10 lg:grid-cols-2">

                        {/* Content */}

                        <div>

                            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                                Let's Grow Together
                            </span>

                            <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
                                Looking for a Reliable Agricultural Partner?
                            </h2>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-green-50">
                                Whether you're looking for premium agricultural
                                products, private label manufacturing, or
                                international export solutions, our team is
                                ready to help your business grow.
                            </p>

                        </div>

                        {/* Buttons */}

                        <div className="flex flex-col gap-5 lg:items-end">

                            <button className="flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-[#5A7D2B] transition duration-300 hover:scale-105">

                                Request a Quote

                                <ArrowRight size={20} />

                            </button>

                            <button className="flex items-center justify-center gap-3 rounded-xl border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#5A7D2B]">

                                <Phone size={20} />

                                Contact Us

                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default CallToAction;