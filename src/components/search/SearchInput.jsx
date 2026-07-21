import { useState } from "react";
import { Search } from "lucide-react";

function SearchInput({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <section className="py-12">
            <div className="container mx-auto px-6">

                <form
                    onSubmit={handleSubmit}
                    className="mx-auto flex max-w-3xl flex-col gap-4 rounded-3xl bg-white p-4 shadow-lg sm:flex-row"
                >

                    <div className="relative flex-1">

                        <Search
                            size={22}
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search products, categories, articles..."
                            className="w-full rounded-2xl border border-gray-200 py-4 pl-14 pr-5 text-gray-900 outline-none transition focus:border-[#5A7D2B]"
                        />

                    </div>


                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 rounded-2xl bg-[#5A7D2B] px-8 py-4 font-semibold text-white transition hover:bg-[#4C6A24]"
                    >

                        Search

                        <Search size={20} />

                    </button>


                </form>

            </div>
        </section>
    );
}

export default SearchInput;