import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({
    currentPage = 1,
    totalPages = 5,
    onPageChange
}) {

    return (
        <div className="flex justify-center gap-3 py-10">


            <button
                onClick={() => onPageChange?.(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-lg border p-3 disabled:opacity-40"
            >
                <ChevronLeft size={18}/>
            </button>


            {[...Array(totalPages)].map((_, index) => {

                const page = index + 1;

                return (
                    <button
                        key={page}
                        onClick={() => onPageChange?.(page)}
                        className={`rounded-lg px-4 py-2 ${
                            currentPage === page
                            ? "bg-[#5A7D2B] text-white"
                            : "border"
                        }`}
                    >
                        {page}
                    </button>
                );

            })}


            <button
                onClick={() => onPageChange?.(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-lg border p-3 disabled:opacity-40"
            >
                <ChevronRight size={18}/>
            </button>


        </div>
    );
}

export default Pagination;