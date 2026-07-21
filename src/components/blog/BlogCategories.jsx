import {
    Leaf,
    FlaskConical,
    Factory,
    Globe,
    Sparkles,
    TrendingUp,
} from "lucide-react";

const categories = [
    {
        id: 1,
        icon: Leaf,
        title: "Natural Ingredients",
        description:
            "Discover the benefits and uses of Moroccan natural ingredients.",
    },
    {
        id: 2,
        icon: FlaskConical,
        title: "Cosmetic Formulation",
        description:
            "Learn about formulas, development, and cosmetic innovation.",
    },
    {
        id: 3,
        icon: Factory,
        title: "Private Label",
        description:
            "Guides for creating and growing your own cosmetic brand.",
    },
    {
        id: 4,
        icon: Globe,
        title: "Export & Business",
        description:
            "Insights about international markets and beauty exports.",
    },
    {
        id: 5,
        icon: Sparkles,
        title: "Beauty Trends",
        description:
            "Latest trends in natural skincare and cosmetics.",
    },
    {
        id: 6,
        icon: TrendingUp,
        title: "Industry News",
        description:
            "Updates about the global cosmetic industry.",
    },
];

function BlogCategories() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">

                {/* Header */}

                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        Categories
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        Explore Our Topics
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        Learn more about natural cosmetics, manufacturing,
                        ingredients, and the beauty industry.
                    </p>

                </div>


                {/* Categories */}

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {categories.map((category) => {

                        const Icon = category.icon;

                        return (
                            <div
                                key={category.id}
                                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5A7D2B]/10">

                                    <Icon
                                        size={30}
                                        className="text-[#5A7D2B]"
                                    />

                                </div>


                                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                                    {category.title}
                                </h3>


                                <p className="mt-4 leading-7 text-gray-600">
                                    {category.description}
                                </p>


                            </div>
                        );

                    })}

                </div>

            </div>
        </section>
    );
}

export default BlogCategories;