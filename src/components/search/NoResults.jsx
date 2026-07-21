import { SearchX, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function NoResults() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">

                <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">

                        <SearchX
                            size={40}
                            className="text-[#5A7D2B]"
                        />

                    </div>


                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        No Results Found
                    </h2>


                    <p className="mt-4 leading-7 text-gray-600">
                        We couldn't find anything matching your search.
                        Try using different keywords or explore our products
                        and categories.
                    </p>


                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                        <Link
                            to="/products"
                            className="flex items-center justify-center gap-2 rounded-xl bg-[#5A7D2B] px-7 py-4 font-semibold text-white transition hover:bg-[#4C6A24]"
                        >

                            Browse Products

                            <ArrowRight size={20} />

                        </Link>


                        <Link
                            to="/"
                            className="rounded-xl border border-gray-200 px-7 py-4 font-semibold text-gray-700 transition hover:border-[#5A7D2B] hover:text-[#5A7D2B]"
                        >

                            Back Home

                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default NoResults;