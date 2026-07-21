import {
    Award,
    Globe,
    Leaf,
    Truck,
    Factory,
    Headset,
} from "lucide-react";

const features = [
    {
        icon: Award,
        title: "Premium Quality",
        description:
            "Every product is manufactured following strict quality standards to ensure maximum performance and reliability.",
    },
    {
        icon: Leaf,
        title: "Natural Ingredients",
        description:
            "We use carefully selected natural ingredients that support sustainable and eco-friendly agriculture.",
    },
    {
        icon: Globe,
        title: "Worldwide Export",
        description:
            "We proudly supply our products to international markets with efficient logistics and reliable export services.",
    },
    {
        icon: Factory,
        title: "Private Label",
        description:
            "Launch your own brand with our OEM and private label manufacturing solutions tailored to your business.",
    },
    {
        icon: Truck,
        title: "Fast Delivery",
        description:
            "Our optimized production and shipping process ensures timely deliveries for partners worldwide.",
    },
    {
        icon: Headset,
        title: "Expert Support",
        description:
            "Our experienced team provides technical guidance and personalized assistance before and after every order.",
    },
];

function WhyChoose() {
    return (
        <section className="bg-[#F8FAF5] py-24">
            <div className="container mx-auto px-6">

                {/* Section Header */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        Why Choose Us
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        Your Trusted Partner in Natural Agriculture
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        We combine innovation, quality, and sustainability to
                        deliver premium agricultural solutions that help your
                        business grow with confidence.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {features.map(({ icon: Icon, title, description }) => (

                        <div
                            key={title}
                            className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >

                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition group-hover:bg-[#5A7D2B]">

                                <Icon
                                    size={30}
                                    className="text-[#5A7D2B] transition group-hover:text-white"
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

export default WhyChoose;