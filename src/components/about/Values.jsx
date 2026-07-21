import {
    ShieldCheck,
    Lightbulb,
    Leaf,
    Handshake,
} from "lucide-react";

const values = [
    {
        icon: ShieldCheck,
        title: "Quality",
        description:
            "We maintain the highest quality standards to ensure reliable and effective products for every customer.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "We continuously improve our products and processes through research, technology, and creative thinking.",
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description:
            "We are committed to environmentally responsible practices that support sustainable agriculture.",
    },
    {
        icon: Handshake,
        title: "Integrity",
        description:
            "We build long-term relationships based on transparency, trust, and respect with our partners worldwide.",
    },
];

function Values() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        Our Core Values
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        The Principles That Define BioProGreen
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        Everything we do is guided by strong values that help us
                        deliver exceptional products and build lasting
                        partnerships across the world.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {values.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition-colors group-hover:bg-[#5A7D2B]">

                                <Icon
                                    size={30}
                                    className="text-[#5A7D2B] transition-colors group-hover:text-white"
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

export default Values;