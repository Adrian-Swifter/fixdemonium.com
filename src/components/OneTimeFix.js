import Image from "next/image";
import Link from "next/link";

export default function OneTimeFixPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          One-Time WordPress Fix
        </h1>
        <p className="text-xl text-gray-700">
          Get your WordPress issues fixed fast by our expert team. No ongoing
          commitment, just a one-time fix to get your site back on track.
        </p>
        <div className="mt-6">
          <Link href="/contact">
            <span className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 font-semibold cursor-pointer">
              Get Started Now
            </span>
          </Link>
        </div>
      </header>

      {/* What We Offer Section */}
      <section className="py-10 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="/images/troubleshooting.png"
              alt="Troubleshooting"
              width={64}
              height={64}
              className="mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
              Troubleshooting & Bug Fixes
            </h3>
            <p className="text-gray-600 text-center">
              Our experts quickly identify and resolve any issues with your
              WordPress site, ensuring smooth performance.
            </p>
          </div>
          {/* Service 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="/images/security.png"
              alt="Security Enhancement"
              width={64}
              height={64}
              className="mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
              Security Enhancements
            </h3>
            <p className="text-gray-600 text-center">
              We strengthen your website’s security, protecting it from
              vulnerabilities and potential threats.
            </p>
          </div>
          {/* Service 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="/images/performance.png"
              alt="Performance Optimization"
              width={64}
              height={64}
              className="mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
              Performance Optimization
            </h3>
            <p className="text-gray-600 text-center">
              Improve your site’s speed and performance for a better user
              experience and SEO rankings.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10">
        <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="/images/consultation.png"
              alt="Consultation"
              width={64}
              height={64}
              className="mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              1. Describe Your Issue
            </h3>
            <p className="text-gray-600">
              Start by telling us what’s wrong. Our team will review the issue
              and provide an estimated timeline and cost.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="/images/fix.png"
              alt="Fix"
              width={64}
              height={64}
              className="mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              2. We Fix It
            </h3>
            <p className="text-gray-600">
              Our experts will fix the issue, testing everything in a secure
              staging environment before applying it to your live site.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="/images/confirm.png"
              alt="Confirm Fix"
              width={64}
              height={64}
              className="mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              3. Confirm & Pay
            </h3>
            <p className="text-gray-600">
              After confirming the fix, you only pay once you are completely
              satisfied. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <p className="text-gray-600 italic">
              &quot;FixDemonium quickly resolved our website issues and got us
              back online fast. Highly recommended!&quot;
            </p>
            <p className="text-gray-800 font-semibold mt-4">- John Doe</p>
          </div>
          {/* Testimonial 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <p className="text-gray-600 italic">
              &quot;Their one-time fix service was a lifesaver. Our site is now
              secure and running smoothly.&quot;
            </p>
            <p className="text-gray-800 font-semibold mt-4">- Jane Smith</p>
          </div>
          {/* Testimonial 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <p className="text-gray-600 italic">
              &quot;The team at FixDemonium is top-notch. They fixed our issues
              and provided great advice for the future.&quot;
            </p>
            <p className="text-gray-800 font-semibold mt-4">- Michael Brown</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 bg-emerald-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Need Immediate Help?</h2>
        <p className="text-xl mb-6">
          Contact us today to get your WordPress site fixed by experts.
        </p>
        <Link href="/contact">
          <span className="bg-white text-emerald-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 cursor-pointer">
            Get in Touch
          </span>
        </Link>
      </section>
    </div>
  );
}
