import { Clock, CalendarDays } from "lucide-react";

const hours = [
    {
        day: "Monday - Friday",
        time: "08:30 AM - 06:00 PM",
    },
    {
        day: "Saturday",
        time: "09:00 AM - 01:00 PM",
    },
    {
        day: "Sunday",
        time: "Closed",
    },
];

function BusinessHours() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">

                <div className="grid gap-8 lg:grid-cols-2">

                    {/* Text */}

                    <div>

                        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#5A7D2B]">
                            Business Hours
                        </span>

                        <h2 className="mt-6 text-4xl font-bold text-gray-900">
                            When Can You Reach Us?
                        </h2>

                        <p className="mt-5 leading-8 text-gray-600">
                            Our team is available during working hours to answer
                            your questions, discuss your projects, and provide
                            professional manufacturing solutions.
                        </p>


                        <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">

                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#5A7D2B]/10">
                                <Clock
                                    size={28}
                                    className="text-[#5A7D2B]"
                                />
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900">
                                    Response Time
                                </h3>

                                <p className="text-gray-600">
                                    We usually reply within 24 hours.
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* Hours Card */}

                    <div className="rounded-3xl bg-white p-8 shadow-sm">

                        <div className="mb-6 flex items-center gap-3">

                            <CalendarDays
                                size={28}
                                className="text-[#5A7D2B]"
                            />

                            <h3 className="text-2xl font-bold text-gray-900">
                                Opening Hours
                            </h3>

                        </div>


                        <div className="space-y-4">

                            {hours.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-center justify-between rounded-xl bg-gray-50 px-5 py-4"
                                >

                                    <span className="font-medium text-gray-700">
                                        {item.day}
                                    </span>

                                    <span
                                        className={`font-semibold ${item.time === "Closed"
                                                ? "text-red-500"
                                                : "text-[#5A7D2B]"
                                            }`}
                                    >
                                        {item.time}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default BusinessHours;