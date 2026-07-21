import { ArrowRight, CalendarDays } from "lucide-react";

function BlogCard({
    image,
    title,
    excerpt,
    category,
    date,
    onClick = () => { },
}) {
    return (
        <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

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

                {/* Category */}

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-[#5A7D2B]">
                    {category}
                </span>


                <h3 className="mt-5 text-2xl font-bold leading-tight text-gray-900">
                    {title}
                </h3>


                <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
                    {excerpt}
                </p>


                {/* Date */}

                <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">

                    <CalendarDays size={16} />

                    <span>
                        {date}
                    </span>

                </div>


                {/* Button */}

                <button
                    onClick={onClick}
                    className="mt-6 flex items-center gap-2 font-semibold text-[#5A7D2B] transition-all duration-300 hover:gap-3"
                >

                    Read More

                    <ArrowRight size={18} />

                </button>

            </div>

        </article>
    );
}

export default BlogCard;