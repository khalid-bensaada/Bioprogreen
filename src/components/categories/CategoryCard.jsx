import { ArrowRight } from "lucide-react";

function CategoryCard({
    image,
    title,
    description,
    productCount,
    onClick = () => { },
}) {
    return (
        <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Image */}

            <div className="overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

            </div>

            {/* Content */}

            <div className="p-6">

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-[#5A7D2B]">
                    {productCount} Products
                </span>

                <h3 className="mt-4 text-2xl font-bold text-gray-900">
                    {title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600 line-clamp-3">
                    {description}
                </p>

                <button
                    onClick={onClick}
                    className="mt-8 flex items-center gap-2 font-semibold text-[#5A7D2B] transition-all duration-300 hover:gap-3"
                >
                    Explore Category
                    <ArrowRight size={18} />
                </button>

            </div>

        </article>
    );
}

export default CategoryCard;