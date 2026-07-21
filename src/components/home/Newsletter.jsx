import { Mail, Send } from "lucide-react";

function Newsletter() {
    return (
        <section className="bg-[#5A7D2B] py-20">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl lg:flex lg:items-center lg:justify-between">

                    <div className="mb-8 lg:mb-0 lg:max-w-xl">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF4DD]">
                            <Mail className="text-[#5A7D2B]" size={30} />
                        </div>

                        <h2 className="mb-4 text-4xl font-bold text-[#1F2937]">
                            Subscribe to Our Newsletter
                        </h2>

                        <p className="text-gray-600 leading-8">
                            Stay updated with our latest natural products,
                            agricultural innovations, export news and exclusive
                            private label opportunities.
                        </p>
                    </div>

                    <form className="flex w-full max-w-xl flex-col gap-4 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#5A7D2B]"
                        />

                        <button
                            className="flex items-center justify-center gap-2 rounded-xl bg-[#5A7D2B] px-8 py-4 font-semibold text-white transition hover:bg-[#476421]"
                        >
                            Subscribe
                            <Send size={18} />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default Newsletter;