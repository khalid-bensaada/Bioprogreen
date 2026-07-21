import ServiceCard from "./ServiceCard";
import services from "../../data/services";

function ServicesGrid() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">

                {/* Section Header */}

                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        What We Offer
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        Our Professional Services
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        BioProGreen provides complete manufacturing and export
                        solutions for brands looking to develop premium natural
                        cosmetic products with international quality standards.
                    </p>

                </div>

                {/* Services */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            {...service}
                            onClick={() =>
                                console.log(service.slug)
                            }
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}

export default ServicesGrid;