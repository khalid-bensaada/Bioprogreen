import {
    MapPin,
    Phone,
    Mail,
    Globe,
} from "lucide-react";

const contactInfo = [
    {
        id: 1,
        icon: MapPin,
        title: "Our Address",
        value: "Safi, Morocco",
        description:
            "Visit our facilities and discover our natural cosmetic manufacturing process.",
    },
    {
        id: 2,
        icon: Phone,
        title: "Phone Number",
        value: "+212 XXX XX XX XX",
        description:
            "Speak directly with our sales and customer support team.",
    },
    {
        id: 3,
        icon: Mail,
        title: "Email Address",
        value: "contact@bioprogreen.com",
        description:
            "Send us your inquiries and receive a prompt response.",
    },
    {
        id: 4,
        icon: Globe,
        title: "Worldwide Export",
        value: "30+ Countries",
        description:
            "We export premium Moroccan natural products across international markets.",
    },
];

function ContactInfo() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">

                {/* Header */}

                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        Get In Touch
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        Contact Information
                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">
                        Our team is ready to answer your questions and help you
                        find the best manufacturing and private label solutions
                        for your business.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {contactInfo.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5A7D2B]/10">
                                    <Icon
                                        size={30}
                                        className="text-[#5A7D2B]"
                                    />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="mt-3 font-semibold text-[#5A7D2B]">
                                    {item.value}
                                </p>

                                <p className="mt-4 leading-7 text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default ContactInfo;