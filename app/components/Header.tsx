"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-4 md:p-6">
                <div className="flex justify-between items-center w-full lg:w-auto lg:mb-0">
                    <div className='flex items-center'>
                        <div className="relative h-10 w-10 "> {/* Adjust size as needed */}
                            <Image
                                src="/logo-icon.png"
                                alt="Logo"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="text-2xl font-bold text-orange-600">
                            <Link href="/">iSalesBook</Link>
                        </div>
                    </div>
                    <button onClick={toggleMenu} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <nav className="space-y-2 lg:space-y-0 lg:space-x-6 hidden lg:flex">
                    <Link href="/" className="block text-gray-700 hover:text-orange-600">
                        Home
                    </Link>
                    <Link href="#features" className="block text-gray-700 hover:text-orange-600">
                        Features
                    </Link>
                    <Link href="#pricing" className="block text-gray-700 hover:text-orange-600">
                        Pricing
                    </Link>
                    <Link href="/blog" className="block text-gray-700 hover:text-orange-600">
                        Blog
                    </Link>
                    <Link href="/faq" className="block text-gray-700 hover:text-orange-600">
                        FAQs
                    </Link>
                    <Link href="/about" className="block text-gray-700 hover:text-orange-600">
                        About Us
                    </Link>
                    <Link href="/contact" className="block text-gray-700 hover:text-orange-600">
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center hidden lg:flex">
                    <Link href="/login" className="block w-full lg:inline-block lg:w-auto  text-gray-600 px-6 py-3 rounded-md text-center">
                        Log In
                    </Link>
                    <Link href="/request-demo" className="block w-full lg:inline-block lg:w-auto bg-orange-600 text-white px-6 py-3 rounded-md text-center">
                        Request a demo
                    </Link>
                </div>
            </div>
            {isOpen && (
                <div className="lg:hidden absolute top-0 left-0 w-full bg-white shadow-md p-6 space-y-4 animate-slide-in">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-2xl font-bold text-orange-600"><Link href="/">
                            iSalesBook</Link></div>
                        <button onClick={toggleMenu} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-4">
                        <Link href="/" className="block text-gray-700 hover:text-orange-600">
                            Home
                        </Link>
                        <Link href="#features" className="block text-gray-700 hover:text-orange-600">
                            Features
                        </Link>
                        <Link href="#pricing" className="block text-gray-700 hover:text-orange-600">
                            Pricing
                        </Link>
                        <Link href="/blog" className="block text-gray-700 hover:text-orange-600">
                            Blog
                        </Link>
                        <Link href="/faq" className="block text-gray-700 hover:text-orange-600">
                            FAQs
                        </Link>
                        <Link href="/about" className="block text-gray-700 hover:text-orange-600">
                            About Us
                        </Link>
                        <Link href="/contact" className="block text-gray-700 hover:text-orange-600">
                            Contact
                        </Link>
                        <Link href="/login" className="btn btn-sm">
                            Log In
                        </Link>
                        <Link href="/request-demo" className="block bg-orange-600 text-white px-6 py-3 rounded-md text-center">
                            Request a demo
                        </Link>
                    </nav>
                </div>
            )}
            <style jsx>{`
                .animate-slide-in {
                    animation: slide-in 0.3s ease-out forwards;
                }
                @keyframes slide-in {
                    from {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;
