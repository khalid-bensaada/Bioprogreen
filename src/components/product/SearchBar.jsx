import { FaSearch } from "react-icons/fa";

function SearchBar() {
    return (
        <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-xl border bg-white py-4 pl-12 pr-4 outline-none focus:border-green-700"
            />
        </div>
    );
}

export default SearchBar;