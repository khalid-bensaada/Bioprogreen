import { MapPin } from "lucide-react";

function ContactMap() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">

                {/* Header */}

                <div className="mx-auto mb-12 max-w-3xl text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        Find Us
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        Our Location
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        Visit our facilities and discover our natural cosmetic
                        manufacturing solutions.
                    </p>

                </div>


                {/* Map */}

                <div className="overflow-hidden rounded-3xl shadow-lg">

                    <iframe
                        title="BioProGreen Location"
                        src="https://www.google.com/maps?q=Morocco&output=embed"
                        className="h-[450px] w-full border-0"
                        loading="lazy"
                    ></iframe>

                </div>


                {/* Location Card */}

                <div className="mx-auto mt-8 flex max-w-xl items-center gap-4 rounded-2xl bg-white p-6 shadow-md">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#5A7D2B]/10">
                        <MapPin
                            size={28}
                            className="text-[#5A7D2B]"
                        />
                    </div>


                    <div>

                        <h3 className="text-xl font-bold text-gray-900">
                            BioProGreen
                        </h3>

                        <p className="mt-1 text-gray-600">
                            Morocco - Natural Cosmetics Manufacturer
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default ContactMap;