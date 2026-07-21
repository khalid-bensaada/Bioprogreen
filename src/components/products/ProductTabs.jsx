import { useState } from "react";

const tabs = [
    {
        id: "description",
        label: "Description",
    },
    {
        id: "benefits",
        label: "Benefits",
    },
    {
        id: "ingredients",
        label: "Ingredients",
    },
    {
        id: "usage",
        label: "Usage",
    },
];

function ProductTabs({
    description = "",
    benefits = [],
    ingredients = [],
    usage = "",
}) {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <section className="mt-16">

            {/* Tabs */}

            <div className="flex flex-wrap gap-3 border-b border-gray-200">

                {tabs.map((tab) => (

                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`rounded-t-xl px-6 py-3 font-semibold transition ${activeTab === tab.id
                                ? "bg-[#5A7D2B] text-white"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        {tab.label}
                    </button>

                ))}

            </div>

            {/* Content */}

            <div className="rounded-b-3xl rounded-tr-3xl border border-t-0 border-gray-200 bg-white p-8 shadow-sm">

                {activeTab === "description" && (
                    <p className="leading-8 text-gray-600">
                        {description}
                    </p>
                )}

                {activeTab === "benefits" && (
                    <ul className="space-y-3">
                        {benefits.map((benefit, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-gray-600"
                            >
                                <span className="mt-2 h-2 w-2 rounded-full bg-[#5A7D2B]"></span>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                )}

                {activeTab === "ingredients" && (
                    <ul className="space-y-3">
                        {ingredients.map((ingredient, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-gray-600"
                            >
                                <span className="mt-2 h-2 w-2 rounded-full bg-[#5A7D2B]"></span>
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                )}

                {activeTab === "usage" && (
                    <p className="leading-8 text-gray-600">
                        {usage}
                    </p>
                )}

            </div>

        </section>
    );
}

export default ProductTabs;