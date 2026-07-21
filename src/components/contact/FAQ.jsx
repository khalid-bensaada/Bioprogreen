import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How can I request a quotation?",
        answer:
            "You can send us your project details through our contact form. Our team will review your requirements and provide a customized quotation.",
    },
    {
        question: "How quickly will you respond to my inquiry?",
        answer:
            "Our team usually responds within 24 hours during business days.",
    },
    {
        question: "Do you work with international clients?",
        answer:
            "Yes. BioProGreen works with brands, wholesalers, and distributors worldwide and provides international export solutions.",
    },
    {
        question: "Can I visit your facilities?",
        answer:
            "Yes, visits can be arranged by appointment. Please contact our team before planning your visit.",
    },
    {
        question: "What information should I provide for a project request?",
        answer:
            "Please include your company details, required products, estimated quantities, target market, and any customization needs.",
    },
];

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20">
            <div className="container mx-auto max-w-4xl px-6">

                {/* Header */}

                <div className="mb-14 text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        FAQ
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        Find answers to common questions about contacting
                        BioProGreen and starting your project with us.
                    </p>

                </div>


                {/* Questions */}

                <div className="space-y-4">

                    {faqs.map((faq, index) => (

                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
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

                                    <p className="leading-7 text-gray-600">
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