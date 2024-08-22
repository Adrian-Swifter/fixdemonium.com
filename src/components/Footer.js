import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12">
        {/* Logo and About */}
        <div>
          <Image
            src="/images/fixdemonium-logo.png"
            alt="FixDemonium Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <p className="text-gray-700 text-sm">
            FixDemonium is your go-to solution for WordPress support. From
            maintenance to performance optimization, we keep your website
            running smoothly.
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <a href="/about" className="hover:text-teal-600">
                Our Story
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-teal-600">
                Services
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-teal-600">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-teal-600">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <a
                href="/services/wordpress-support"
                className="hover:text-teal-600"
              >
                WordPress Support
              </a>
            </li>
            <li>
              <a
                href="/services/wordpress-maintenance"
                className="hover:text-teal-600"
              >
                Maintenance
              </a>
            </li>
            <li>
              <a
                href="/services/wordpress-security"
                className="hover:text-teal-600"
              >
                Security
              </a>
            </li>
            <li>
              <a
                href="/services/wordpress-optimization"
                className="hover:text-teal-600"
              >
                Optimization
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Email: support@fixdemonium.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 FixDemonium Street, City, Country</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            {/* Social Icons */}
            <a href="#" className="text-gray-600 hover:text-teal-600">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Social Icon SVG */}
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Social Icon SVG */}
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} FixDemonium. All rights reserved.
      </div>
    </footer>
  );
}
