"use client";

import { useState } from "react";
import Link from "next/link";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="w-full h-16 bg-yellow-400 flex justify-between items-center px-auto md:px-24 mt-2">
            
            <div className="relative group">
                
                <h1 className="text-4xl font-bold text-gray-800 w-96 transition-opacity duration-500 ease-in-out ml-5 group-hover:opacity-0">
                    Faiza Kanwal
                </h1>

                <h1 className="absolute top-0 left-0 text-4xl font-bold md:text-3xl w-96 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out ml-2">
                    Front-end Developer
                </h1>
            </div>

            <div
                className="flex md:hidden flex-col items-center cursor-pointer space-y-1"
                onClick={toggleMenu}
            >
                <div className="w-7 h-0.5 bg-gray-800 rounded transition-transform duration-300"></div>
                <div className="w-7 h-0.5 bg-gray-800 rounded transition-opacity duration-300"></div>
                <div className="w-7 h-0.5 bg-gray-800 rounded transition-transform duration-300"></div>
            </div>

            <div className="hidden md:flex justify-evenly items-center w-full">
                <ul className="flex space-x-10">
                    <li>
                        <Link
                            className="text-xl font-bold text-gray-800 hover:underline hover:text-wheat"
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-xl font-bold text-gray-800 hover:underline hover:text-wheat"
                            href="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-xl font-bold text-gray-800 hover:underline hover:text-wheat"
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div
                className={`absolute top-16 right-0 bg-yellow-400 flex flex-col items-end justify-evenly space-y-4 md:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "block" : "hidden"
                }`}
            >
                <ul className="w-full text-right">
                    <li>
                        <Link
                            className="text-xl font-bold text-gray-800 hover:underline hover:text-wheat"
                            href="/"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-xl font-bold text-gray-800 hover:underline hover:text-wheat"
                            href="/about"
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-xl font-bold text-gray-800 hover:underline hover:text-wheat"
                            href="/contact"
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
