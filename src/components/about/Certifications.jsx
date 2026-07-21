import {
    Award,
    ShieldCheck,
    Leaf,
    BadgeCheck,
    Globe,
    FileCheck,
} from "lucide-react";

const certifications = [
    {
        icon: Award,
        title: "ISO 9001",
        description:
            "Certified quality management system ensuring consistent products and services.",
    },
    {
        icon: ShieldCheck,
        title: "GMP Certified",
        description:
            "Manufactured according to Good Manufacturing Practices for safety and reliability.",
    },
    {
        icon: Leaf,
        title: "Organic Standards",
        description:
            "Products developed with environmentally friendly and sustainable practices.",
    },
    {
        icon: BadgeCheck,
        title: "Halal Certified",
        description:
            "Production processes comply with internationally recognized Halal standards.",
    },
    {
        icon: Globe,
        title: "Export Ready",
        description:
            "Prepared to meet international regulations and export requirements worldwide.",
    },
    {
        icon: FileCheck,
        title: "Quality Assurance",
        description:
            "Every batch is inspected and validated before packaging and shipment.",
    },
];

function Certifications() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6">

                {/* Section Header */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        Certifications
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        Certified Excellence You Can Trust
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        We follow internationally recognized standards to ensure
                        quality, safety, and reliability in every product we
                        manufacture.
                    </p>

                </div>

                {/* Grid */}

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {certifications.map(({ icon: Icon, title, description }) => (

                        <div
                            key={title}
                            className="group rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >

                            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 transition-colors duration-300 group-hover:bg-[#5A7D2B]">

                                <Icon
                                    size={38}
                                    className="text-[#5A7D2B] transition-colors duration-300 group-hover:text-white"
                                />

                            </div>

                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                {title}
                            </h3>

                            <p className="leading-7 text-gray-600">
                                {description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Certifications;