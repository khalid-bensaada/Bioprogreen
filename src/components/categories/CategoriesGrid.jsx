import CategoryCard from "./CategoryCard";
import categories from "../../data/categories";

function CategoriesGrid() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">

                <div className="mb-12 text-center">
                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        Our Categories
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        Explore Our Product Categories
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl leading-8 text-gray-600">
                        Browse our carefully selected categories to discover premium Moroccan natural products.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            {...category}
                            onClick={() => console.log(category.slug)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default CategoriesGrid;