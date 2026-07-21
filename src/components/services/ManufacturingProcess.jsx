import {
    MessageSquare,
    Search,
    FlaskConical,
    Factory,
    ShieldCheck,
    Package,
    Truck,
} from "lucide-react";

const steps = [
    {
        id: 1,
        icon: MessageSquare,
        title: "Consultation",
        description:
            "We discuss your business goals, target market, and product requirements.",
    },
    {
        id: 2,
        icon: Search,
        title: "Product Selection",
        description:
            "Choose from our existing products or define a custom solution.",
    },
    {
        id: 3,
        icon: FlaskConical,
        title: "Formula Development",
        description:
            "Our experts develop and refine formulas using premium natural ingredients.",
    },
    {
        id: 4,
        icon: Factory,
        title: "Manufacturing",
        description:
            "Products are manufactured in our modern facilities following strict quality standards.",
    },
    {
        id: 5,
        icon: ShieldCheck,
        title: "Quality Control",
        description:
            "Every batch undergoes comprehensive quality inspection before packaging.",
    },
    {
        id: 6,
        icon: Package,
        title: "Packaging",
        description:
            "Products are packaged with your branding and prepared for shipment.",
    },
    {
        id: 7,
        icon: Truck,
        title: "Worldwide Delivery",
        description:
            "Orders are safely delivered to customers across international markets.",
    },
];

function ManufacturingProcess() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">

                {/* Header */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        Manufacturing Process
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        From Idea to Global Delivery
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        We follow a structured production process to ensure
                        every product meets international quality standards.
                    </p>

                </div>

                {/* Steps */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.id}
                                className="relative rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Number */}

                                <span className="absolute right-6 top-6 text-5xl font-bold text-gray-100">
                                    {step.id}
                                </span>

                                {/* Icon */}

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5A7D2B]/10">
                                    <Icon
                                        size={30}
                                        className="text-[#5A7D2B]"
                                    />
                                </div>

                                {/* Content */}

                                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                                    {step.title}
                                </h3>

                                <p className="mt-4 leading-7 text-gray-600">
                                    {step.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default ManufacturingProcess;