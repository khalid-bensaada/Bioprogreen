import { Grid2x2 } from "lucide-react";

function CategoryFilter({
    categories = [],
    selectedCategory = "All",
    onCategoryChange = () => { },
}) {
    return (
        <div className="flex items-center gap-3">

            <div className="flex items-center gap-2 text-gray-700">
                <Grid2x2 size={20} />
                <span className="font-medium">Category</span>
            </div>

            <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-[#5A7D2B] focus:ring-2 focus:ring-[#5A7D2B]/20"
            >
                <option value="All">All Categories</option>

                {categories.map((category) => (
                    <option
                        key={category}
                        value={category}
                    >
                        {category}
                    </option>
                ))}
            </select>

        </div>
    );
}

export default CategoryFilter;