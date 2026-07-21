import { LayoutGrid, List, ArrowUpDown } from "lucide-react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

function ProductFilters({
    search = "",
    onSearchChange = () => { },
    onSearch = () => { },

    categories = [],
    selectedCategory = "All",
    onCategoryChange = () => { },

    sort = "latest",
    onSortChange = () => { },

    view = "grid",
    onViewChange = () => { },
}) {
    return (
        <section className="mb-12 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">

            {/* Search */}

            <SearchBar
                value={search}
                onChange={onSearchChange}
                onSearch={onSearch}
            />

            {/* Filters */}

            <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                {/* Left Side */}

                <div className="flex flex-col gap-4 md:flex-row md:items-center">

                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={onCategoryChange}
                    />

                    <div className="flex items-center gap-3">

                        <ArrowUpDown
                            size={20}
                            className="text-gray-600"
                        />

                        <select
                            value={sort}
                            onChange={(e) => onSortChange(e.target.value)}
                            className="rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-[#5A7D2B] focus:ring-2 focus:ring-[#5A7D2B]/20"
                        >
                            <option value="latest">Latest</option>
                            <option value="oldest">Oldest</option>
                            <option value="name-asc">Name (A-Z)</option>
                            <option value="name-desc">Name (Z-A)</option>
                        </select>

                    </div>

                </div>

                {/* Right Side */}

                <div className="flex items-center gap-3">

                    <button
                        onClick={() => onViewChange("grid")}
                        className={`rounded-xl p-3 transition ${view === "grid"
                                ? "bg-[#5A7D2B] text-white"
                                : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        <LayoutGrid size={20} />
                    </button>

                    <button
                        onClick={() => onViewChange("list")}
                        className={`rounded-xl p-3 transition ${view === "list"
                                ? "bg-[#5A7D2B] text-white"
                                : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        <List size={20} />
                    </button>

                </div>

            </div>

        </section>
    );
}

export default ProductFilters;