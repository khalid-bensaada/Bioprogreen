import { ArrowRight, FileDown } from "lucide-react";

function ProductActions({
    onViewDetails = () => { },
    onRequestQuote = () => { },
    showCatalog = false,
    onDownloadCatalog = () => { },
}) {
    return (
        <div className="mt-8 flex flex-wrap gap-3">

            <button
                onClick={onViewDetails}
                className="flex items-center gap-2 rounded-xl bg-[#5A7D2B] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#4C6A24]"
            >
                View Details
                <ArrowRight size={18} />
            </button>

            <button
                onClick={onRequestQuote}
                className="rounded-xl border border-[#5A7D2B] px-5 py-3 font-semibold text-[#5A7D2B] transition-all duration-300 hover:bg-[#5A7D2B] hover:text-white"
            >
                Request Quote
            </button>

            {showCatalog && (
                <button
                    onClick={onDownloadCatalog}
                    className="flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-100"
                >
                    <FileDown size={18} />
                    Catalog
                </button>
            )}

        </div>
    );
}

export default ProductActions;