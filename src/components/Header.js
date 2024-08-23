// components/Header.js
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`${poppins.className} bg-white`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" passHref>
          <Image
            src="/images/fixdemonium-logo.png"
            alt="Fixdemonium Logo"
            width={100}
            height={100}
            className="mr-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-teal-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-teal-600">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-teal-600">
            Services
          </Link>
          <Link
            href="/wordpress-tutorials"
            className="text-gray-700 hover:text-teal-600"
          >
            Blog
          </Link>
          <Link
            href="/demo"
            className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
          >
            Try Our Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-700 hover:text-teal-600 focus:outline-none focus:text-teal-600"
            aria-label="toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-6 py-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-teal-600">
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-teal-600"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-teal-600"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-teal-600"
            >
              Contact
            </Link>
            <Link
              href="/demo"
              className="block bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
            >
              Try Our Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
