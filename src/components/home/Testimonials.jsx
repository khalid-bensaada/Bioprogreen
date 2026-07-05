import { FaStar } from "react-icons/fa";
import testimonials from "../../data/testimonials";

function Testimonials() {
    return (
        <section className="bg-[#FAF8F2] py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">

                    <span className="font-semibold uppercase tracking-[4px] text-green-700">
                        Testimonials
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-gray-900">
                        What Our Clients Say
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
                        Trusted by cosmetic brands, wholesalers and distributors worldwide.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {testimonials.map((client) => (

                        <div
                            key={client.id}
                            className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2"
                        >

                            <div className="mb-5 flex">

                                {[...Array(client.rating)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className="mr-1 text-yellow-400"
                                    />
                                ))}

                            </div>

                            <p className="leading-8 text-gray-600">
                                "{client.comment}"
                            </p>

                            <div className="mt-8 flex items-center gap-4">

                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="h-16 w-16 rounded-full object-cover"
                                />

                                <div>

                                    <h4 className="font-bold text-gray-900">
                                        {client.name}
                                    </h4>

                                    <p className="text-gray-500">
                                        {client.country}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Testimonials;