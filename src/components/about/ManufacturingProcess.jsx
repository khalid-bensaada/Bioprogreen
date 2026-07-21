import {
    Sprout,
    FlaskConical,
    Factory,
    ShieldCheck,
    Package,
    Ship,
} from "lucide-react";

const process = [
    {
        icon: Sprout,
        title: "Raw Materials",
        description:
            "We carefully source premium natural ingredients from trusted suppliers to ensure exceptional quality.",
    },
    {
        icon: FlaskConical,
        title: "Research & Development",
        description:
            "Our experts develop innovative formulations that meet international quality and performance standards.",
    },
    {
        icon: Factory,
        title: "Production",
        description:
            "Products are manufactured using modern equipment and controlled production processes.",
    },
    {
        icon: ShieldCheck,
        title: "Quality Control",
        description:
            "Every batch undergoes strict testing and inspection before approval for packaging.",
    },
    {
        icon: Package,
        title: "Packaging",
        description:
            "Products are securely packaged with customizable private label solutions for global markets.",
    },
    {
        icon: Ship,
        title: "Worldwide Export",
        description:
            "Orders are prepared and shipped efficiently to customers and partners around the world.",
    },
];

function ManufacturingProcess() {
    return (
        <section className="bg-[#F8FAF5] py-24">
            <div className="container mx-auto px-6">

                {/* Section Header */}

                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        Manufacturing Process
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        From Nature to Your Business
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        Every product follows a carefully managed process to
                        guarantee premium quality, safety, and consistency
                        before reaching customers worldwide.
                    </p>

                </div>

                {/* Timeline */}

                <div className="relative">

                    {/* Line */}

                    <div className="absolute left-6 top-0 hidden h-full w-1 rounded bg-green-200 lg:block"></div>

                    <div className="space-y-10">

                        {process.map(({ icon: Icon, title, description }, index) => (

                            <div
                                key={title}
                                className="relative flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:flex-row lg:items-center lg:gap-10"
                            >

                                {/* Step Number */}

                                <div className="absolute -left-3 top-8 hidden h-6 w-6 rounded-full border-4 border-white bg-[#5A7D2B] lg:block"></div>

                                {/* Icon */}

                                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-100">

                                    <Icon
                                        size={36}
                                        className="text-[#5A7D2B]"
                                    />

                                </div>

                                {/* Content */}

                                <div className="flex-1">

                                    <span className="text-sm font-semibold uppercase tracking-wider text-[#5A7D2B]">
                                        Step {index + 1}
                                    </span>

                                    <h3 className="mt-2 text-2xl font-bold text-gray-900">
                                        {title}
                                    </h3>

                                    <p className="mt-4 leading-8 text-gray-600">
                                        {description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}

export default ManufacturingProcess;