import { ArrowRight, Package, FileText, Layers } from "lucide-react";

const results = [
    {
        id: 1,
        type: "Product",
        title: "Organic Argan Oil",
        description:
            "Premium Moroccan argan oil suitable for skincare and haircare formulations.",
        icon: Package,
    },
    {
        id: 2,
        type: "Article",
        title: "Benefits of Natural Ingredients",
        description:
            "Discover the advantages of using natural ingredients in cosmetic products.",
        icon: FileText,
    },
    {
        id: 3,
        type: "Category",
        title: "Essential Oils",
        description:
            "Explore our collection of natural essential oils.",
        icon: Layers,
    },
];

function SearchResults({ query }) {
    return (
        <section className="py-16">
            <div className="container mx-auto px-6">

                {/* Header */}

                <div className="mb-10">

                    <h2 className="text-3xl font-bold text-gray-900">
                        Search Results
                    </h2>

                    {query && (
                        <p className="mt-3 text-gray-600">
                            Results for:
                            <span className="ml-2 font-semibold text-[#5A7D2B]">
                                {query}
                            </span>
                        </p>
                    )}

                </div>


                {/* Results */}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {results.map((item) => {

                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#5A7D2B]/10">

                                    <Icon
                                        size={26}
                                        className="text-[#5A7D2B]"
                                    />

                                </div>


                                <span className="mt-5 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-[#5A7D2B]">
                                    {item.type}
                                </span>


                                <h3 className="mt-4 text-xl font-bold text-gray-900">
                                    {item.title}
                                </h3>


                                <p className="mt-3 leading-7 text-gray-600">
                                    {item.description}
                                </p>


                                <button className="mt-5 flex items-center gap-2 font-semibold text-[#5A7D2B]">
                                    View Details
                                    <ArrowRight size={18} />
                                </button>


                            </div>
                        );

                    })}

                </div>

            </div>
        </section>
    );
}

export default SearchResults;