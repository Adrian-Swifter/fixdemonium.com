import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "About",
      links: [
        { href: "/wordpress-tutorials", label: "Blog" },
        { href: "/contact-us", label: "Contact Us" },
      ],
    },
    {
      title: "Services",
      links: [
        {
          href: "/services/support-troubleshooting",
          label: "WordPress Support",
        },
        {
          href: "/services/performance-optimization",
          label: "Speed Optimization",
        },
        {
          href: "/services/security-malware-removal",
          label: "Malware Removal",
        },
        { href: "/services/divi-support", label: "Divi Support" },
        { href: "/services/backup-recovery", label: "Backup & Recovery" },
        {
          href: "/services/custom-development-integration",
          label: "Custom Development",
        },
      ],
    },
    {
      title: "Contact",
      content: (
        <>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Email: support@fixdemonium.com</li>
            <li>Phone: +381600178093</li>
            <li>Location: Belgrade, Serbia</li>
          </ul>
          <div className="flex space-x-6 mt-4">
            <a
              href="https://www.facebook.com/fixdemonium/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-600 text-3xl"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/fixdemonium/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-600 text-3xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.tiktok.com/@fixdemonium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-600 text-3xl"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://x.com/fixdemonium"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-600 text-3xl"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
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
        &copy; {currentYear} Fixdemonium. All rights reserved. Disclaimer: We
        are not affiliated with the WordPress Foundation or Automattic, Inc.
      </div>
    </footer>
  );
}
