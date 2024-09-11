// src/app/services/custom-development-integration/page.js

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

// SEO metadata
export const metadata = {
  title: "WordPress Custom Development & Integration | Fixdemonium",
  description:
    "Get tailored WordPress development and integration services from Fixdemonium. Our experts create custom solutions for your website, ensuring seamless integration with third-party tools.",
  keywords:
    "WordPress custom development, WordPress integration, WordPress custom solutions, third-party integration, WordPress plugin development, WordPress API integration, WordPress developer services",
  openGraph: {
    title: "WordPress Custom Development & Integration | Fixdemonium",
    description:
      "Fixdemonium provides custom WordPress development and integration services. From custom plugins to third-party integrations, we create solutions tailored to your business.",
    url: "https://www.fixdemonium.com/services/custom-development-integration",
    siteName: "Fixdemonium",
    images: [
      {
        url: "/images/custom-development.jpg",
        width: 1200,
        height: 630,
        alt: "WordPress Custom Development & Integration",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Custom Development & Integration | Fixdemonium",
    description:
      "Fixdemonium offers custom WordPress development and seamless third-party integration services to elevate your website.",
    image: "/images/custom-development.jpg",
  },
};

export default function CustomDevelopmentIntegrationPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-6">
          WordPress Custom Development & Integration
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Unlock the full potential of your WordPress website with custom
          development and seamless integration. Tailor-made solutions for your
          unique business needs.
        </p>
        <div>
          <Link href="/contact-us">
            <span className="bg-white text-emerald-500 px-8 py-3 rounded-full font-semibold cursor-pointer transition-transform transform hover:scale-105">
              Get a Custom Solution
            </span>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Custom Development & Integration Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="text-center">
            <Image
              src="/images/plug-in.png"
              alt="Custom Plugin Development"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Custom Plugin Development
            </h3>
            <p className="text-gray-700">
              We develop custom WordPress plugins tailored to your specific
              needs, enhancing the functionality of your site.
            </p>
          </div>
          {/* Service 2 */}
          <div className="text-center">
            <Image
              src="/images/api.png"
              alt="API Integration"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              API Integration
            </h3>
            <p className="text-gray-700">
              Seamlessly integrate third-party services with your WordPress site
              through powerful API connections.
            </p>
          </div>
          {/* Service 3 */}
          <div className="text-center">
            <Image
              src="/images/shopping-online.png"
              alt="eCommerce Integration"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              eCommerce Integration
            </h3>
            <p className="text-gray-700">
              Optimize your online store with custom eCommerce solutions,
              ensuring smooth transactions and seamless functionality.
            </p>
          </div>
          {/* Service 4 */}
          <div className="text-center">
            <Image
              src="/images/custom.png"
              alt="Custom Theme Development"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Custom Theme Development
            </h3>
            <p className="text-gray-700">
              Build a custom WordPress theme that aligns perfectly with your
              brand and delivers a unique user experience.
            </p>
          </div>
          {/* Service 5 */}
          <div className="text-center">
            <Image
              src="/images/crm.png"
              alt="CRM Integration"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              CRM Integration
            </h3>
            <p className="text-gray-700">
              Integrate your WordPress site with popular CRM platforms for
              enhanced lead management and customer engagement.
            </p>
          </div>
          {/* Service 6 */}
          <div className="text-center">
            <Image
              src="/images/cyber-security.png"
              alt="Security Upgrades"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Security Upgrades
            </h3>
            <p className="text-gray-700">
              Protect your WordPress site with advanced security measures and
              custom firewall configurations.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">
          How We Tailor Solutions for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center px-6">
            <Image
              src="/images/presentation.gif"
              alt="Consultation"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Consultation
            </h3>
            <p className="text-gray-700">
              We begin with an in-depth consultation to understand your business
              needs and goals.
            </p>
          </div>
          <div className="text-center px-6">
            <Image
              src="/images/programmer.gif"
              alt="Development"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Development
            </h3>
            <p className="text-gray-700">
              Our team creates custom WordPress solutions and integrates
              third-party services tailored to your requirements.
            </p>
          </div>
          <div className="text-center px-6">
            <Image
              src="/images/test.gif"
              alt="Testing & Deployment"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Testing & Deployment
            </h3>
            <p className="text-gray-700">
              After development, we rigorously test your solution and deploy it
              on your live site.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Fixdemonium for Custom Development?
        </h2>
        <p className="text-lg max-w-4xl mx-auto text-gray-700 mb-12 text-center">
          At Fixdemonium, we specialize in creating tailored WordPress solutions
          that are designed to meet the unique needs of your business. Whether
          you need a custom plugin, API integration, or a completely custom
          theme, we have the expertise to deliver scalable, high-performance
          solutions.
        </p>
        <p className="text-lg max-w-4xl mx-auto text-gray-700 text-center">
          We ensure seamless integration with existing systems and provide
          ongoing support to ensure your site remains optimized and functional.
          Choose Fixdemonium for development services that elevate your
          WordPress experience.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-green-400 text-white text-center rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Elevate Your WordPress Site?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get in touch with Fixdemonium today to start your custom WordPress
          development and integration project.
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
