// src/app/services/support-troubleshooting/page.js

import Image from "next/image";
import Link from "next/link";

// SEO metadata
export const metadata = {
  title: "24/7 WordPress Support & Troubleshooting | Fixdemonium",
  description:
    "Fixdemonium offers 24/7 WordPress support and troubleshooting services. Get fast help with website errors, performance issues, and security vulnerabilities.",
  keywords:
    "WordPress support, WordPress troubleshooting, 24/7 WordPress help, website performance, security vulnerabilities",
  openGraph: {
    title: "24/7 WordPress Support & Troubleshooting | Fixdemonium",
    description:
      "Fixdemonium offers 24/7 WordPress support and troubleshooting services for website errors, performance, and security issues.",
    url: "https://www.fixdemonium.com/services/support-troubleshooting",
    siteName: "Fixdemonium",
    images: [
      {
        url: "/images/support-troubleshooting.jpg",
        width: 1200,
        height: 630,
        alt: "24/7 WordPress Support",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 WordPress Support & Troubleshooting | Fixdemonium",
    description:
      "Get expert 24/7 support from Fixdemonium for all your WordPress troubleshooting needs.",
    image: "/images/support-troubleshooting.jpg",
  },
};

export default function SupportTroubleshootingPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Hero Section */}
      <section className="text-center py-16 sm:py-20 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-lg shadow-lg">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 px-4">
          24/7 WordPress Support & Troubleshooting
        </h1>
        <p className="text-base sm:text-xl max-w-md sm:max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
          Experiencing website issues? We’re here to help anytime, day or night.
          Get fast support to resolve errors, improve performance, and secure
          your WordPress site.
        </p>
        <div>
          <Link href="/contact-us">
            <span className="bg-white text-emerald-500 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold cursor-pointer transition-transform transform hover:scale-105">
              Get Support Now
            </span>
          </Link>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our WordPress Support Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="text-center">
            <Image
              src="/images/warning.png"
              alt="Error Troubleshooting"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Error Troubleshooting
            </h3>
            <p className="text-gray-700">
              We diagnose and resolve WordPress errors quickly, minimizing
              downtime and keeping your site functional.
            </p>
          </div>
          {/* Service 2 */}
          <div className="text-center">
            <Image
              src="/images/performance-optimization.png"
              alt="Performance Optimization"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Performance Optimization
            </h3>
            <p className="text-gray-700">
              Is your site slow? We identify performance bottlenecks and speed
              up your WordPress site for a better user experience.
            </p>
          </div>
          {/* Service 3 */}
          <div className="text-center">
            <Image
              src="/images/cyber-security.png"
              alt="Security Vulnerabilities"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Security Vulnerabilities
            </h3>
            <p className="text-gray-700">
              Protect your site from hacking and malware with our proactive
              security solutions, including real-time monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center px-6">
            <Image
              src="/images/presentation.gif"
              alt="Describe Your Issue"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Describe Your Issue
            </h3>
            <p className="text-gray-700">
              Tell us what&apos;s wrong, and we&apos;ll assess the issue and
              provide an estimated timeline and cost.
            </p>
          </div>
          <div className="text-center px-6">
            <Image
              src="/images/technician.gif"
              alt="We Fix It"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              2. We Fix It
            </h3>
            <p className="text-gray-700">
              Our experts work on resolving the issue, testing everything in a
              secure staging environment before applying it to your live site.
            </p>
          </div>
          <div className="text-center px-6">
            <Image
              src="/images/credit-card.gif"
              alt="Confirm & Pay"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Confirm & Pay
            </h3>
            <p className="text-gray-700">
              You only pay once you&apos;re completely satisfied with the
              results. No hidden fees—just results.
            </p>
          </div>
        </div>
      </section>

      {/* WordPress Support Section for SEO */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Fixdemonium for WordPress Support?
        </h2>
        <p className="text-lg max-w-4xl mx-auto text-gray-700 mb-12 text-center">
          At Fixdemonium, we specialize in providing reliable, expert WordPress
          support and troubleshooting services to businesses and individuals
          alike. Our team has years of experience in managing and fixing all
          kinds of WordPress issues, from site crashes and plugin conflicts to
          complex performance optimization tasks. We also prioritize the
          security of your site, ensuring that vulnerabilities are patched and
          monitored around the clock. Whether you need one-time help or ongoing
          WordPress support, our team is available 24/7 to assist you.
        </p>
        <p className="text-lg max-w-4xl mx-auto text-gray-700 text-center">
          When you work with Fixdemonium, you’re not just getting WordPress
          support—you’re partnering with a dedicated team that takes care of
          your website as if it were our own. We offer personalized solutions to
          your specific problems, ensuring that your WordPress site runs
          smoothly, loads quickly, and remains secure at all times.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-10 max-w-3xl mx-auto">
          {/* FAQ 1 */}
          <div className="border-l-4 border-emerald-500 pl-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              How fast can you respond to issues?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our team is available 24/7, and we typically respond to urgent
              issues within 30 minutes.
            </p>
          </div>
          {/* FAQ 2 */}
          <div className="border-l-4 border-emerald-500 pl-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Do you offer long-term support plans?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes! We offer ongoing support packages tailored to your needs.
              Contact us for more details.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-green-400 text-white text-center rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6">Need Support Now?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get expert troubleshooting and support for your WordPress site,
          available 24/7. Don&apos;t wait—fix your issues today.
        </p>
        <Link href="/contact-us">
          <span className="bg-white text-emerald-500 px-8 py-4 rounded-full font-semibold cursor-pointer transition-transform transform hover:scale-105">
            Contact Us Now
          </span>
        </Link>
      </section>
    </div>
  );
}
