import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "#", label: "Facebook", svgPath: "<SVG_PATH_FOR_FACEBOOK>" },
    { href: "#", label: "Twitter", svgPath: "<SVG_PATH_FOR_TWITTER>" },
    // Add more social links as needed
  ];

  const footerLinks = [
    {
      title: "About",
      links: [
        { href: "/about", label: "Our Story" },
        { href: "/services", label: "Services" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact Us" },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "/services/wordpress-support", label: "WordPress Support" },
        { href: "/services/wordpress-maintenance", label: "Maintenance" },
        { href: "/services/wordpress-security", label: "Security" },
        { href: "/services/wordpress-optimization", label: "Optimization" },
      ],
    },
    {
      title: "Contact",
      content: (
        <>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Email: support@fixdemonium.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 FixDemonium Street, City, Country</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-gray-600 hover:text-teal-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  dangerouslySetInnerHTML={{ __html: link.svgPath }}
                />
              </a>
            ))}
          </div>
        </>
      ),
    },
  ];

  return (
    <footer className={"bg-gray-50 py-12 mt-20 " + poppins.className}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12">
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
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {section.title}
            </h3>
            {section.links ? (
              <ul className="space-y-2 text-gray-700 text-sm">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="hover:text-teal-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              section.content
            )}
          </div>
        ))}
      </div>
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {currentYear} FixDemonium. All rights reserved.
      </div>
    </footer>
  );
}
