import { ArrowRight } from "lucide-react";

function ServiceCard({
    image,
    title,
    description,
    features = [],
    onClick = () => {},
}) {
    return (
        <article className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Image */}

            <div className="overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />

            </div>

            {/* Content */}

            <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900">
                    {title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                    {description}
                </p>

                {features.length > 0 && (
                    <ul className="mt-6 space-y-3">

                        {features.map((feature, index) => (

                            <li
                                key={index}
                                className="flex items-center gap-3 text-gray-700"
                            >
                                <span className="h-2 w-2 rounded-full bg-[#5A7D2B]" />

                                {feature}

                            </li>

                        ))}

                    </ul>
                )}

                <button
                    onClick={onClick}
                    className="mt-8 flex items-center gap-2 font-semibold text-[#5A7D2B] transition-all duration-300 hover:gap-3"
                >
                    Learn More
                    <ArrowRight size={18} />
                </button>

            </div>

        </article>
    );
}

export default ServiceCard;