import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

function NotFound() {
    return (
        <section className="flex min-h-[70vh] items-center justify-center px-6 py-20">

            <div className="text-center">

                {/* 404 */}

                <h1 className="text-8xl font-extrabold text-[#5A7D2B] md:text-9xl">
                    404
                </h1>


                <h2 className="mt-6 text-3xl font-bold text-gray-900 md:text-4xl">
                    Page Not Found
                </h2>


                <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-600">

                    Sorry, the page you are looking for does not exist or has
                    been moved. Let's get you back to BioProGreen.

                </p>


                {/* Buttons */}

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 rounded-xl bg-[#5A7D2B] px-8 py-4 font-semibold text-white transition hover:bg-[#4C6A24]"
                    >
                        <Home size={20} />
                        Go Home
                    </Link>


                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-8 py-4 font-semibold text-gray-700 transition hover:border-[#5A7D2B] hover:text-[#5A7D2B]"
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </button>

                </div>


            </div>

        </section>
    );
}

export default NotFound;