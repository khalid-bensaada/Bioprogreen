import { Search } from "lucide-react";

function SearchBar({
    value = "",
    onChange = () => { },
    onSearch = () => { },
    placeholder = "Search products...",
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full items-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
            <div className="flex items-center px-5 text-gray-400">
                <Search size={20} />
            </div>

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="flex-1 py-4 text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />

            <button
                type="submit"
                className="bg-[#5A7D2B] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-[#4C6A24]"
            >
                Search
            </button>
        </form>
    );
}

export default SearchBar;