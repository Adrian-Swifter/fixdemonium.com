// src/app/services/performance-optimization/page.js

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

// SEO metadata
export const metadata = {
  title: "WordPress Performance Optimization | Fixdemonium",
  description:
    "Fixdemonium offers expert WordPress performance optimization services to improve your website’s speed, reduce load times, and enhance user experience.",
  keywords:
    "WordPress performance optimization, WordPress speed optimization, website speed improvement, faster WordPress site, WordPress loading times",
  openGraph: {
    title: "WordPress Performance Optimization | Fixdemonium",
    description:
      "Boost your website's speed and performance with Fixdemonium's expert WordPress performance optimization services.",
    url: "https://www.fixdemonium.com/services/performance-optimization",
    siteName: "Fixdemonium",
    images: [
      {
        url: "/images/performance-optimization.jpg",
        width: 1200,
        height: 630,
        alt: "WordPress Performance Optimization",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Performance Optimization | Fixdemonium",
    description:
      "Get expert performance optimization services to improve your WordPress site speed and enhance user experience.",
    image: "/images/performance-optimization.jpg",
  },
};

export default function PerformanceOptimizationPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-6">
          WordPress Performance Optimization
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Speed matters. Our WordPress performance optimization services help
          reduce load times, improve user experience, and boost SEO rankings.
        </p>
        <div>
          <Link href="/contact-us">
            <span className="bg-white text-emerald-500 px-8 py-3 rounded-full font-semibold cursor-pointer transition-transform transform hover:scale-105">
              Optimize My Website
            </span>
          </Link>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our WordPress Performance Optimization Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="text-center">
            <Image
              src="/images/cache.png"
              alt="Cache Optimization"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Cache Optimization
            </h3>
            <p className="text-gray-700">
              Reduce load times by leveraging browser caching, page caching, and
              object caching techniques for faster website performance.
            </p>
          </div>
          {/* Service 2 */}
          <div className="text-center">
            <Image
              src="/images/gallery.png"
              alt="Image Optimization"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Image Optimization
            </h3>
            <p className="text-gray-700">
              Compress and resize images without sacrificing quality, improving
              page speed while maintaining visual appeal.
            </p>
          </div>
          {/* Service 3 */}
          <div className="text-center">
            <Image
              src="/images/arrows.png"
              alt="Minify CSS & JavaScript"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Minify CSS & JavaScript
            </h3>
            <p className="text-gray-700">
              Reduce the size of your CSS, JavaScript, and HTML files, leading
              to faster load times and improved site performance.
            </p>
          </div>
          {/* Service 4 */}
          <div className="text-center">
            <Image
              src="/images/clouds.png"
              alt="Content Delivery Network (CDN)"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Content Delivery Network (CDN)
            </h3>
            <p className="text-gray-700">
              Implement a CDN to serve your website&apos;s assets from servers
              closest to your users, speeding up global load times.
            </p>
          </div>
          {/* Service 5 */}
          <div className="text-center">
            <Image
              src="/images/cloud-server.png"
              alt="Server Optimization"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Server Optimization
            </h3>
            <p className="text-gray-700">
              Enhance server performance through optimizations such as database
              tuning, HTTP/2 support, and load balancing.
            </p>
          </div>
          {/* Service 6 */}
          <div className="text-center">
            <Image
              src="/images/gzip.png"
              alt="GZIP Compression"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              GZIP Compression
            </h3>
            <p className="text-gray-700">
              Compress your website&apos;s files with GZIP to reduce bandwidth
              usage and improve page speed.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">
          How We Optimize Your WordPress Site
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center px-6">
            <Image
              src="/images/search.gif"
              alt="Performance Audit"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Performance Audit
            </h3>
            <p className="text-gray-700">
              We start by conducting a full audit of your WordPress site to
              identify performance bottlenecks and areas for improvement.
            </p>
          </div>
          <div className="text-center px-6">
            <Image
              src="/images/page-optimization.gif"
              alt="Optimization"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Optimization Process
            </h3>
            <p className="text-gray-700">
              Our experts implement key optimizations, from image compression to
              server-side improvements, ensuring your site loads faster.
            </p>
          </div>
          <div className="text-center px-6">
            <Image
              src="/images/test.gif"
              alt="Performance Testing"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Performance Testing
            </h3>
            <p className="text-gray-700">
              After optimization, we test your site using industry-leading tools
              like Google PageSpeed Insights and GTmetrix to ensure optimal
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* WordPress Performance Section for SEO */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Fixdemonium for WordPress Performance Optimization?
        </h2>
        <p className="text-lg max-w-4xl mx-auto text-gray-700 mb-12 text-center">
          At Fixdemonium, we understand how important it is for your website to
          load quickly and efficiently. A fast website not only provides a
          better user experience but also improves your SEO rankings and
          conversion rates. Our team of WordPress experts specializes in
          optimizing your site’s speed by addressing key performance areas like
          caching, code minification, and database optimization. With our
          tailored solutions, we ensure your site runs smoothly and quickly,
          helping you stay ahead of the competition.
        </p>
        <p className="text-lg max-w-4xl mx-auto text-gray-700 text-center">
          Whether you run a small blog or a large eCommerce store, our
          performance optimization services are designed to enhance your site’s
          speed and overall performance. Trust Fixdemonium to make your website
          faster, more efficient, and more reliable.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-green-400 text-white text-center rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Boost Your Website’s Performance?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get in touch with Fixdemonium today and start improving your website’s
          speed and performance.
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
