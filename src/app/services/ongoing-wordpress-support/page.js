import Image from "next/image";
import Link from "next/link";

export default function OngoingSupportPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Ongoing WordPress Support & Maintenance
        </h1>
        <p className="text-xl text-gray-700">
          Keep your WordPress site running smoothly with our ongoing support and
          maintenance services. From updates to security, we’ve got you covered.
        </p>
        <div className="mt-6">
          <Link href="/contact-us">
            <span className="bg-emerald-400 text-white px-8 py-3 hover:bg-emerald-500 font-semibold cursor-pointer">
              Get Started Now
            </span>
          </Link>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <Image
            src="/images/wordpress.png"
            alt="Ongoing WordPress Support"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Support for Your WordPress Site
          </h2>
          <p className="text-gray-700 mb-4">
            With our ongoing support plan, you can rest easy knowing your
            WordPress site is in expert hands. We handle everything from routine
            updates and backups to advanced troubleshooting and performance
            optimization.
          </p>
          <p className="text-gray-700">
            Our team is available 24/7 to assist with any issues that may arise,
            ensuring your site remains secure, fast, and always online.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-50">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Our Ongoing Support Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="flex items-start space-x-6">
            <Image
              src="/images/updated.png"
              alt="Regular Updates"
              width={64}
              height={64}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Regular Updates
              </h3>
              <p className="text-gray-700">
                We keep your WordPress core, themes, and plugins up to date,
                ensuring compatibility and security.
              </p>
            </div>
          </div>
          {/* Service 2 */}
          <div className="flex items-start space-x-6">
            <Image
              src="/images/backup.png"
              alt="Daily Backups"
              width={64}
              height={64}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Daily Backups
              </h3>
              <p className="text-gray-700">
                We perform daily backups of your site, so you can always restore
                your data in case of an emergency.
              </p>
            </div>
          </div>
          {/* Service 3 */}
          <div className="flex items-start space-x-6">
            <Image
              src="/images/cyber-security.png"
              alt="Security Monitoring"
              width={64}
              height={64}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Security Monitoring
              </h3>
              <p className="text-gray-700">
                Our team continuously monitors your site for security threats
                and applies patches as needed.
              </p>
            </div>
          </div>
          {/* Service 4 */}
          <div className="flex items-start space-x-6">
            <Image
              src="/images/performance-optimization.png"
              alt="Performance Optimization"
              width={64}
              height={64}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Performance Optimization
              </h3>
              <p className="text-gray-700">
                We optimize your site’s performance, ensuring it loads quickly
                and efficiently for all visitors.
              </p>
            </div>
          </div>
          {/* Service 5 */}
          <div className="flex items-start space-x-6">
            <Image
              src="/images/priority-support.png"
              alt="Priority Support"
              width={64}
              height={64}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Priority Support
              </h3>
              <p className="text-gray-700">
                Our support team is available 24/7 to handle any issues that may
                arise, with priority response times.
              </p>
            </div>
          </div>
          {/* Service 6 */}
          <div className="flex items-start space-x-6">
            <Image
              src="/images/wrench.png"
              alt="Ongoing Maintenance"
              width={64}
              height={64}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Ongoing Maintenance
              </h3>
              <p className="text-gray-700">
                From broken links to outdated content, we keep your site
                well-maintained and up to date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
          How Our Ongoing Support Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center px-6">
            <Image
              src="/images/onboarding.gif"
              alt="Onboarding"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Onboarding
            </h3>
            <p className="text-gray-700">
              We start by assessing your current site and identifying areas for
              improvement. Our team then creates a custom plan tailored to your
              needs.
            </p>
          </div>
          <div className="text-center px-6">
            <Image
              src="/images/maintenance.gif"
              alt="Ongoing Maintenance"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Ongoing Maintenance
            </h3>
            <p className="text-gray-700">
              Our team performs regular maintenance tasks to keep your site in
              top condition, including updates, backups, and security checks.
            </p>
          </div>
          <div className="text-center px-6">
            <Image
              src="/images/page-optimization.gif"
              alt="Continuous Optimization"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Continuous Optimization
            </h3>
            <p className="text-gray-700">
              We continually monitor and optimize your site’s performance,
              ensuring it runs smoothly and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16 bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tailored to Your Needs
            </h2>
            <p className="text-gray-700 mb-4">
              No two WordPress sites are the same, and neither are our support
              plans. We work with you to understand your unique needs and create
              a plan that ensures your site remains secure, fast, and up to
              date.
            </p>
            <p className="text-gray-700">
              Whether you’re running a small blog or a large e-commerce store,
              our ongoing support services are designed to keep your site
              running at its best.
            </p>
          </div>
          <div>
            <Image
              src="/images/ab-test.png"
              alt="Tailored Support"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-6">
          Contact us today to secure your ongoing WordPress support plan.
        </p>
        <Link href="/contact-us">
          <span className="bg-white text-emerald-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 cursor-pointer">
            Get in Touch
          </span>
        </Link>
      </section>
    </div>
  );
}
