import { ArrowRight, PhoneCall } from "lucide-react";

function CallToAction() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">

                <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#5A7D2B] via-[#6D9434] to-[#7DA33A] px-8 py-16 text-center text-white shadow-2xl md:px-16">

                    <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
                        Start Your Project Today
                    </span>

                    <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                        Ready to Build Your Cosmetic Brand?
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-50">
                        Whether you need private label manufacturing, custom
                        formulations, or worldwide export solutions, our team is
                        ready to help you bring your ideas to life with premium
                        Moroccan natural products.
                    </p>

                    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                        <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-[#5A7D2B] transition duration-300 hover:scale-105 hover:bg-gray-100">
                            Request a Quote
                            <ArrowRight size={20} />
                        </button>

                        <button className="flex items-center justify-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#5A7D2B]">
                            <PhoneCall size={20} />
                            Contact Us
                        </button>

                    </div>

                    {/* Statistics */}

                    <div className="mt-14 grid gap-8 border-t border-white/20 pt-10 sm:grid-cols-3">

                        <div>
                            <h3 className="text-3xl font-bold">15+</h3>
                            <p className="mt-2 text-green-100">
                                Years of Experience
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">30+</h3>
                            <p className="mt-2 text-green-100">
                                Countries Served
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">100%</h3>
                            <p className="mt-2 text-green-100">
                                Natural Ingredients
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default CallToAction;