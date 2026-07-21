import {
    Award,
    Leaf,
    Globe,
    ShieldCheck,
    PackageCheck,
    Headset,
} from "lucide-react";

const reasons = [
    {
        id: 1,
        icon: Award,
        title: "Certified Manufacturing",
        description:
            "Our production facilities follow international quality standards to ensure reliable and consistent products.",
    },
    {
        id: 2,
        icon: Leaf,
        title: "Natural Ingredients",
        description:
            "We carefully source premium Moroccan natural ingredients for safe and effective formulations.",
    },
    {
        id: 3,
        icon: Globe,
        title: "Worldwide Export",
        description:
            "We supply businesses across international markets with efficient export and logistics solutions.",
    },
    {
        id: 4,
        icon: ShieldCheck,
        title: "Quality Assurance",
        description:
            "Every product undergoes strict quality control before packaging and shipment.",
    },
    {
        id: 5,
        icon: PackageCheck,
        title: "Flexible MOQ",
        description:
            "Whether you need small production runs or large wholesale orders, we adapt to your business needs.",
    },
    {
        id: 6,
        icon: Headset,
        title: "Dedicated Support",
        description:
            "Our experienced team supports you from product development to final delivery.",
    },
];

function WhyChooseServices() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">

                {/* Header */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        Why Choose BioProGreen
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        Trusted Manufacturing Partner
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        We combine expertise, innovation, and premium natural
                        ingredients to help businesses create successful cosmetic
                        products for local and international markets.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {reasons.map((reason) => {
                        const Icon = reason.icon;

                        return (
                            <div
                                key={reason.id}
                                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5A7D2B]/10">
                                    <Icon
                                        size={30}
                                        className="text-[#5A7D2B]"
                                    />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                                    {reason.title}
                                </h3>

                                <p className="mt-4 leading-7 text-gray-600">
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default WhyChooseServices;