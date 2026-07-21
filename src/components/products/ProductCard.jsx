import { ArrowRight } from "lucide-react";

function ProductCard({
    image,
    name,
    category,
    description,
    onViewDetails = () => { },
}) {
    return (
        <article className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Product Image */}

            <div className="overflow-hidden">

                <img
                    src={image}
                    alt={name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

            </div>

            {/* Content */}

            <div className="p-6">

                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-[#5A7D2B]">
                    {category}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-gray-900">
                    {name}
                </h3>

                <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
                    {description}
                </p>

                <button
                    onClick={onViewDetails}
                    className="mt-8 flex items-center gap-2 font-semibold text-[#5A7D2B] transition hover:gap-3"
                >
                    View Details
                    <ArrowRight size={18} />
                </button>

            </div>

        </article>
    );
}

export default ProductCard;