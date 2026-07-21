import { Target, Eye } from "lucide-react";

function MissionVision() {
    return (
        <section className="bg-[#F8FAF5] py-24">
            <div className="container mx-auto px-6">

                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                        Mission & Vision
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900">
                        Driven by Purpose, Inspired by Nature
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        Our mission and vision guide every decision we make,
                        helping us deliver sustainable agricultural solutions
                        that create long-term value for our partners worldwide.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">

                    {/* Mission */}

                    <div className="rounded-3xl bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-green-100">
                            <Target
                                size={38}
                                className="text-[#5A7D2B]"
                            />
                        </div>

                        <h3 className="mb-6 text-3xl font-bold text-gray-900">
                            Our Mission
                        </h3>

                        <p className="leading-8 text-gray-600">
                            To provide premium natural agricultural products
                            that improve crop performance while promoting
                            sustainability, innovation, and environmental
                            responsibility for customers around the world.
                        </p>

                    </div>

                    {/* Vision */}

                    <div className="rounded-3xl bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-green-100">
                            <Eye
                                size={38}
                                className="text-[#5A7D2B]"
                            />
                        </div>

                        <h3 className="mb-6 text-3xl font-bold text-gray-900">
                            Our Vision
                        </h3>

                        <p className="leading-8 text-gray-600">
                            To become a globally recognized leader in natural
                            agricultural solutions by combining innovation,
                            quality, and customer satisfaction while supporting
                            a greener and healthier future.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default MissionVision;