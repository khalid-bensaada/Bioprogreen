import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-[#1F2937] text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Company */}

                    <div>
                        <h2 className="mb-5 text-3xl font-bold text-[#8BC34A]">
                            BioProGreen
                        </h2>

                        <p className="leading-8 text-gray-300">
                            Premium natural products manufacturer specializing
                            in private label, wholesale and international export.
                        </p>
                    </div>

                    {/* Quick Links */}

                    <div>
                        <h3 className="mb-6 text-xl font-semibold">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-300">
                            <li>Home</li>
                            <li>About</li>
                            <li>Products</li>
                            <li>Private Label</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Categories */}

                    <div>
                        <h3 className="mb-6 text-xl font-semibold">
                            Categories
                        </h3>

                        <ul className="space-y-3 text-gray-300">
                            <li>Organic Fertilizers</li>
                            <li>Plant Nutrition</li>
                            <li>Soil Conditioners</li>
                            <li>Bio Stimulants</li>
                        </ul>
                    </div>

                    {/* Contact */}

                    <div>
                        <h3 className="mb-6 text-xl font-semibold">
                            Contact
                        </h3>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3">
                                <MapPin size={20} />
                                <span>Morocco</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={20} />
                                <span>+212 XXX XXX XXX</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={20} />
                                <span>contact@bioprogreen.com</span>
                            </div>

                        </div>

                        {/* Social Icons */}

                        <div className="mt-8 flex gap-5">

                            <FaFacebookF
                                size={20}
                                className="cursor-pointer transition hover:text-[#8BC34A]"
                            />

                            <FaInstagram
                                size={20}
                                className="cursor-pointer transition hover:text-[#8BC34A]"
                            />

                            <FaXTwitter
                                size={20}
                                className="cursor-pointer transition hover:text-[#8BC34A]"
                            />

                            <FaLinkedinIn
                                size={20}
                                className="cursor-pointer transition hover:text-[#8BC34A]"
                            />

                        </div>

                    </div>

                </div>
            </div>

            {/* Bottom Footer */}

            <div className="border-t border-gray-700">

                <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">

                    <p className="text-center text-gray-400">
                        © {new Date().getFullYear()} BioProGreen. All rights reserved.
                    </p>

                    <button
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                        className="rounded-full bg-[#8BC34A] p-3 transition hover:scale-110"
                    >
                        <ArrowUp className="text-black" size={20} />
                    </button>

                </div>

            </div>
        </footer>
    );
}

export default Footer;