import {
    FaLeaf,
    FaSpa,
    FaSoap,
    FaFlask,
    FaIndustry,
    FaSeedling,
} from "react-icons/fa";

const categories = [
    {
        title: "Essential Oils",
        icon: <FaLeaf />,
    },
    {
        title: "Vegetable Oils",
        icon: <FaSeedling />,
    },
    {
        title: "Floral Waters",
        icon: <FaSpa />,
    },
    {
        title: "Moroccan Soap",
        icon: <FaSoap />,
    },
    {
        title: "Rhassoul Clay",
        icon: <FaFlask />,
    },
    {
        title: "Private Label",
        icon: <FaIndustry />,
    },
];

function Categories() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-14 text-center">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Product Categories
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Explore our premium natural cosmetic collections.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className="rounded-2xl border border-gray-200 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-green-700 hover:shadow-xl"
                        >
                            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-700">
                                {category.icon}
                            </div>

                            <h3 className="text-xl font-semibold">
                                {category.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Categories;