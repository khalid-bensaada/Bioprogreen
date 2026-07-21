import { Send } from "lucide-react";

const services = [
    "Private Label Manufacturing",
    "Contract Manufacturing",
    "Custom Formulation",
    "Wholesale Supply",
    "Export Services",
    "Other",
];

function ContactForm() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">

                <div className="mx-auto max-w-4xl">

                    {/* Header */}

                    <div className="mb-12 text-center">

                        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                            Request Information
                        </span>

                        <h2 className="mt-6 text-4xl font-bold text-gray-900">
                            Send Us Your Project Details
                        </h2>

                        <p className="mt-5 leading-8 text-gray-600">
                            Tell us about your business needs and our team will
                            contact you with the right solution.
                        </p>

                    </div>


                    {/* Form */}

                    <form className="rounded-3xl bg-white p-8 shadow-sm md:p-12">

                        <div className="grid gap-6 md:grid-cols-2">

                            {/* First Name */}

                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your first name"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#5A7D2B]"
                                />
                            </div>


                            {/* Last Name */}

                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your last name"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#5A7D2B]"
                                />
                            </div>


                            {/* Company */}

                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Company Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Company name"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#5A7D2B]"
                                />
                            </div>


                            {/* Email */}

                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="example@company.com"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#5A7D2B]"
                                />
                            </div>


                            {/* Phone */}

                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    placeholder="+212 ..."
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#5A7D2B]"
                                />
                            </div>


                            {/* Country */}

                            <div>
                                <label className="mb-2 block font-medium text-gray-700">
                                    Country
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your country"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#5A7D2B]"
                                />
                            </div>


                            {/* Service */}

                            <div className="md:col-span-2">

                                <label className="mb-2 block font-medium text-gray-700">
                                    Service Required
                                </label>

                                <select
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#5A7D2B]"
                                >

                                    <option value="">
                                        Select a service
                                    </option>

                                    {services.map((service) => (
                                        <option key={service}>
                                            {service}
                                        </option>
                                    ))}

                                </select>

                            </div>


                            {/* Message */}

                            <div className="md:col-span-2">

                                <label className="mb-2 block font-medium text-gray-700">
                                    Message
                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Tell us about your project..."
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#5A7D2B]"
                                ></textarea>

                            </div>

                        </div>


                        {/* Button */}

                        <button
                            type="submit"
                            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5A7D2B] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-[#4C6A24]"
                        >
                            Send Message
                            <Send size={20} />
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}

export default ContactForm;