import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    FaBars,
    FaTimes,
    FaSearch,
    FaShoppingCart,
    FaUser,
} from "react-icons/fa";

import logo from "../../assets/images/logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/products" },
        { name: "Private Label", path: "/services" },
        { name: "About", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <NavLink to="/">
                    <img src={logo} alt="BioProGreen" className="h-14" />
                </NavLink>

                {/* Desktop Menu */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `font-medium transition ${isActive
                                            ? "text-green-700"
                                            : "text-gray-700 hover:text-green-700"
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Icons */}
                <div className="hidden items-center gap-5 lg:flex">
                    <FaSearch className="cursor-pointer text-xl" />
                    <FaShoppingCart className="cursor-pointer text-xl" />
                    <FaUser className="cursor-pointer text-xl" />
                </div>

                {/* Mobile Button */}
                <button
                    className="text-2xl lg:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="border-t bg-white lg:hidden">
                    <ul className="flex flex-col">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="block border-b px-6 py-4 hover:bg-green-50"
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Navbar;