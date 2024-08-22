// components/Header.js
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/fixdemonium-logo.png" // Replace with the actual path to your logo
            alt="Logo"
            width={100}
            height={100}
            className="mr-2"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="/" className="text-gray-700 hover:text-teal-600">
            Home
          </a>
          <a href="/about" className="text-gray-700 hover:text-teal-600">
            About
          </a>
          <a href="/services" className="text-gray-700 hover:text-teal-600">
            Services
          </a>
          <a
            href="/wordpress-tutorials"
            className="text-gray-700 hover:text-teal-600"
          >
            Blog
          </a>
          <a
            href="/demo"
            className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
          >
            Try Our Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
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
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-6 py-4 space-y-2">
            <a href="/" className="block text-gray-700 hover:text-teal-600">
              Home
            </a>
            <a
              href="/about"
              className="block text-gray-700 hover:text-teal-600"
            >
              About
            </a>
            <a
              href="/services"
              className="block text-gray-700 hover:text-teal-600"
            >
              Services
            </a>
            <a
              href="/contact"
              className="block text-gray-700 hover:text-teal-600"
            >
              Contact
            </a>
            <a
              href="/demo"
              className="block bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
            >
              Try Our Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
