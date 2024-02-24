"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Nav() {

    const [isClick, setIsClick] = useState(false);

    const toggleNavBar = () => {
        setIsClick(!isClick);
    }

    return (
        <nav className="fixed top-0 w-full py-2 px-8 z-50 bg-white shadow text-black">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-12">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            
                            <Link href="/" className="text-red-600 font-bold text-xl flex items-center">
                                <Image src="/logo.png" alt="Logo" width={100} height={100} className="h-14 w-14" />
                                Darkness Studio
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4 font-bold">
                            <Link
                                href="/"
                                className="text-black hover:text-red-600 px-1  rounded-md "
                            >
                                Documentation
                            </Link>
                            <Link
                                href="/about"
                                className="text-black hover:text-red-600 px-1 rounded-md "
                            >
                                Nocturnal-Ruse
                            </Link>
                            <Link
                                href="/contact"
                                className="text-black hover:text-red-600 px-1  rounded-md "
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400  hover:text-black  "
                        onClick={toggleNavBar}
                        >
                            {isClick ? (
                                <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                                </svg>
                            ): (
                                //svg
                                <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick &&(
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="text-black hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Documentation
                        </Link>
                        <Link
                            href="/about"
                            className="text-black hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Nocturnal-Ruse
                        </Link>
                        <Link
                            href="/contact"
                            className="text-black hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};