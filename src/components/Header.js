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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  let hoverTimeout;

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

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
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-gray-700 hover:text-teal-600 flex items-center">
              Services
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06-.02L10 10.92l3.71-3.73a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01-.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 top-full mt-2 w-[280px] md:w-[350px] lg:w-[400px] bg-white border border-gray-200 shadow-lg rounded-lg grid grid-cols-2 p-4 gap-4">
                <Link
                  href="/services/support-troubleshooting"
                  onClick={() => {
                    setIsOpen(false);
                    setIsServicesOpen(false);
                  }}
                  className="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
                >
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12,2a8,8,0,0,0-8,8v1.9A2.92,2.92,0,0,0,3,14a2.88,2.88,0,0,0,1.94,2.61C6.24,19.72,8.85,22,12,22h3V20H12c-2.26,0-4.31-1.7-5.34-4.39l-.21-.55L5.86,15A1,1,0,0,1,5,14a1,1,0,0,1,.5-.86l.5-.29V11a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1v5H13.91a1.5,1.5,0,1,0-1.52,2H20a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2V10A8,8,0,0,0,12,2Z" />
                  </svg>
                  <span>24/7 Support & Troubleshooting</span>
                </Link>
                <Link
                  href="/services/performance-optimization"
                  onClick={() => {
                    setIsOpen(false);
                    setIsServicesOpen(false);
                  }}
                  className="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
                >
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="0" fill="none" width="20" height="20" />
                    <path d="M3.76 17.01h12.48C17.34 15.63 18 13.9 18 12c0-4.41-3.58-8-8-8s-8 3.59-8 8c0 1.9.66 3.63 1.76 5.01zM9 6c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zM4 8c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zm4.52 3.4c.84-.83 6.51-3.5 6.51-3.5s-2.66 5.68-3.49 6.51c-.84.84-2.18.84-3.02 0-.83-.83-.83-2.18 0-3.01zM3 13c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zm6 0c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zm6 0c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1z" />
                  </svg>
                  <span>Performance Optimization</span>
                </Link>
                <Link
                  href="/services/security-malware-removal"
                  onClick={() => {
                    setIsOpen(false);
                    setIsServicesOpen(false);
                  }}
                  className="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
                >
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M256.001,0L29.89,130.537c0,47.476,4.506,88.936,12.057,125.463C88.61,481.721,256.001,512,256.001,512
                s167.389-30.279,214.053-256c7.551-36.527,12.057-77.986,12.057-125.463L256.001,0z M256.118,466.723
                c-0.035-0.012-0.082-0.028-0.117-0.039v-47.672V256H140.77H91.122c-6.67-29.738-11.109-63.506-12.394-101.93L255.999,51.728h0.002
                v51.73V256h115.27h49.625C385.636,413.404,287.327,456.774,256.118,466.723z"
                    />
                  </svg>
                  <span>Security & Malware Removal</span>
                </Link>
                <Link
                  href="/services/backup-recovery"
                  onClick={() => {
                    setIsOpen(false);
                    setIsServicesOpen(false);
                  }}
                  className="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
                >
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 128 128"
                  >
                    <path d="M1,38h126V2H1V38z M9,10h110v20H9V10z" />
                    <path d="M1,82h126V46H1V82z M9,54h110v20H9V54z" />
                    <path d="M1,127h126V91H1V127z M9,99h110v20H9V99z" />
                    <rect height="8" width="8" x="15" y="16" />
                    <rect height="8" width="8" x="31" y="16" />
                    <rect height="8" width="8" x="47" y="16" />
                    <rect height="8" width="8" x="15" y="59" />
                    <rect height="8" width="8" x="31" y="59" />
                    <rect height="8" width="8" x="47" y="59" />
                    <rect height="8" width="8" x="15" y="105" />
                    <rect height="8" width="8" x="31" y="105" />
                    <rect height="8" width="8" x="47" y="105" />
                  </svg>
                  <span>Backup & Recovery</span>
                </Link>
                <Link
                  href="/services/divi-support"
                  onClick={() => {
                    setIsOpen(false);
                    setIsServicesOpen(false);
                  }}
                  className="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
                >
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 9.01C11.4477 9.01 11 8.56229 11 8.01V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V8.01C13 8.56228 12.5523 9.01 12 9.01ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM11 16.01C11 16.5623 11.4477 17.01 12 17.01C12.5523 17.01 13 16.5623 13 16.01V16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16V16.01ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" />
                  </svg>
                  <span>Divi Theme Support</span>
                </Link>
                <Link
                  href="/services/custom-development-integration"
                  onClick={() => {
                    setIsOpen(false);
                    setIsServicesOpen(false);
                  }}
                  className="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
                >
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="#10B981"
                    viewBox="0 0 230.795 230.795"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M60.357,63.289c-2.929-2.929-7.678-2.93-10.606-0.001L2.197,110.836C0.79,112.243,0,114.151,0,116.14
      c0,1.989,0.79,3.896,2.196,5.303l47.348,47.35c1.465,1.465,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196
      c2.93-2.929,2.93-7.678,0.001-10.606L18.107,116.14l42.25-42.245C63.286,70.966,63.286,66.217,60.357,63.289z"
                    />
                    <path
                      d="M228.598,110.639l-47.355-47.352c-2.928-2.928-7.677-2.929-10.606,0.001c-2.929,2.929-2.929,7.678,0.001,10.607
      l42.051,42.048l-42.249,42.243c-2.93,2.929-2.93,7.678-0.001,10.606c1.465,1.465,3.384,2.197,5.304,2.197
      c1.919,0,3.839-0.732,5.303-2.196l47.554-47.547c1.407-1.406,2.197-3.314,2.197-5.304
      C230.795,113.954,230.005,112.046,228.598,110.639z"
                    />
                    <path
                      d="M155.889,61.302c-3.314-2.484-8.017-1.806-10.498,1.51l-71.994,96.184c-2.482,3.316-1.807,8.017,1.51,10.498
      c1.348,1.01,2.925,1.496,4.488,1.496c2.282,0,4.537-1.038,6.01-3.006L157.398,71.8C159.881,68.484,159.205,63.784,155.889,61.302z"
                    />
                  </svg>
                  <span>Custom Development & Integration</span>
                </Link>
              </div>
            )}
          </div>
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
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsServicesOpen(!isServicesOpen);
                }}
                className="block w-full text-left text-gray-700 hover:text-teal-600 focus:outline-none"
              >
                Services
                <svg
                  className="w-4 h-4 ml-1 inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.92l3.71-3.73a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="ml-6 space-y-2 mt-2">
                  <Link
                    href="/services/support-troubleshooting"
                    onClick={() => {
                      setIsOpen(false);
                      setIsServicesOpen(false);
                    }}
                    className="block text-gray-700 hover:text-teal-600"
                  >
                    24/7 Support & Troubleshooting
                  </Link>
                  <Link
                    href="/services/performance-optimization"
                    onClick={() => {
                      setIsOpen(false);
                      setIsServicesOpen(false);
                    }}
                    className="block text-gray-700 hover:text-teal-600"
                  >
                    Performance Optimization
                  </Link>
                  <Link
                    href="/services/security-malware-removal"
                    onClick={() => {
                      setIsOpen(false);
                      setIsServicesOpen(false);
                    }}
                    className="block text-gray-700 hover:text-teal-600"
                  >
                    Security & Malware Removal
                  </Link>
                  <Link
                    href="/services/backup-recovery"
                    onClick={() => {
                      setIsOpen(false);
                      setIsServicesOpen(false);
                    }}
                    className="block text-gray-700 hover:text-teal-600"
                  >
                    Backup & Recovery
                  </Link>
                  <Link
                    href="/services/divi-support"
                    onClick={() => {
                      setIsOpen(false);
                      setIsServicesOpen(false);
                    }}
                    className="block text-gray-700 hover:text-teal-600"
                  >
                    Divi Theme Support
                  </Link>
                  <Link
                    href="/services/custom-development-integration"
                    onClick={() => {
                      setIsOpen(false);
                      setIsServicesOpen(false);
                    }}
                    className="block text-gray-700 hover:text-teal-600"
                  >
                    Custom Development & Integration
                  </Link>
                </div>
              )}
            </div>
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
