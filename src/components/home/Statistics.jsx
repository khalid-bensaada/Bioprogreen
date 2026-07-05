function Statistics() {
    const stats = [
        {
            number: "500+",
            title: "Products",
            description: "Natural cosmetic products",
        },
        {
            number: "40+",
            title: "Countries",
            description: "Worldwide export destinations",
        },
        {
            number: "15+",
            title: "Years",
            description: "Industry experience",
        },
        {
            number: "100%",
            title: "Natural",
            description: "Premium Moroccan ingredients",
        },
    ];

    return (
        <section className="bg-green-700 py-24 text-white">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">

                    <span className="uppercase tracking-[4px] text-green-200">
                        BioProGreen In Numbers
                    </span>

                    <h2 className="mt-4 text-5xl font-bold">
                        Trusted Worldwide
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">
                        We proudly serve international brands with premium Moroccan
                        cosmetic products, combining quality, innovation and sustainable
                        manufacturing.
                    </p>

                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {stats.map((stat) => (
                        <div
                            key={stat.title}
                            className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/20"
                        >
                            <h3 className="text-5xl font-bold">
                                {stat.number}
                            </h3>

                            <h4 className="mt-4 text-2xl font-semibold">
                                {stat.title}
                            </h4>

                            <p className="mt-3 text-green-100">
                                {stat.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Statistics;