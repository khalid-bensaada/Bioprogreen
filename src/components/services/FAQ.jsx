import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What is your minimum order quantity (MOQ)?",
        answer:
            "Our MOQ depends on the product and packaging requirements. Contact our team to receive a quotation tailored to your project.",
    },
    {
        question: "Do you offer private label services?",
        answer:
            "Yes. We provide complete private label solutions including formulation, packaging, labeling, and branding.",
    },
    {
        question: "Can you develop custom cosmetic formulations?",
        answer:
            "Absolutely. Our R&D team can create customized formulas based on your brand requirements and target market.",
    },
    {
        question: "Which countries do you export to?",
        answer:
            "We export our products worldwide and provide all necessary export documentation for international shipping.",
    },
    {
        question: "How long does production take?",
        answer:
            "Production time varies depending on the order size and customization requirements. We will provide an estimated timeline after confirming your order.",
    },
    {
        question: "Are your products made from natural ingredients?",
        answer:
            "Yes. We specialize in premium Moroccan natural ingredients and manufacture products that meet international quality standards.",
    },
];

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto max-w-4xl px-6">

                {/* Header */}

                <div className="mb-14 text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        Frequently Asked Questions
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        Everything You Need to Know
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        Find answers to the most common questions about our
                        manufacturing services, private label solutions, and
                        international export process.
                    </p>

                </div>

                {/* FAQ Items */}

                <div className="space-y-5">

                    {faqs.map((faq, index) => (

                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                        >

                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between px-6 py-5 text-left"
                            >
                                <span className="text-lg font-semibold text-gray-900">
                                    {faq.question}
                                </span>

                                <ChevronDown
                                    size={22}
                                    className={`transition-transform duration-300 ${activeIndex === index
                                            ? "rotate-180 text-[#5A7D2B]"
                                            : "text-gray-500"
                                        }`}
                                />
                            </button>

                            {activeIndex === index && (
                                <div className="border-t border-gray-100 px-6 py-5">
                                    <p className="leading-8 text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default FAQ;