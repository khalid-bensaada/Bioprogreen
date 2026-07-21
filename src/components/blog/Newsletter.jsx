import { Mail, ArrowRight } from "lucide-react";

function Newsletter() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">

                <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#5A7D2B] to-[#7DA33A] px-8 py-14 text-white md:px-16">

                    <div className="grid items-center gap-10 lg:grid-cols-2">


                        {/* Text */}

                        <div>

                            <div className="flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">

                                    <Mail size={25} />

                                </div>

                                <span className="font-semibold">
                                    Stay Updated
                                </span>

                            </div>


                            <h2 className="mt-6 text-4xl font-bold leading-tight">
                                Get Beauty & Industry Insights
                            </h2>


                            <p className="mt-5 leading-8 text-green-50">

                                Subscribe to our newsletter and receive the
                                latest articles about natural cosmetics,
                                ingredients, skincare trends, and BioProGreen
                                updates.

                            </p>

                        </div>



                        {/* Form */}

                        <form className="flex flex-col gap-4 sm:flex-row">

                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full rounded-xl px-5 py-4 text-gray-900 outline-none"
                            />


                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-[#5A7D2B] transition hover:bg-gray-100"
                            >

                                Subscribe

                                <ArrowRight size={20} />

                            </button>

                        </form>


                    </div>

                </div>

            </div>
        </section>
    );
}

export default Newsletter;