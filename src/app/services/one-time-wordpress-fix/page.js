import Image from "next/image";
import Link from "next/link";

export default function OneTimeFixPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          One-Time WordPress Fix
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Immediate, expert WordPress fixes with no ongoing commitment. Get your
          site back on track with our fast and reliable service.
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
            src="/images/mechanic.png"
            alt="One-Time WordPress Fix"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our One-Time Fix?
          </h2>
          <p className="text-gray-700 mb-4">
            Whether it&apos;s a bug, a performance issue, or a security concern,
            our experts are ready to help. We provide a quick diagnosis and
            solution to your WordPress problems with a clear, upfront cost. No
            surprises, just results.
          </p>
          <p className="text-gray-700">
            We don&apos;t just fix the problem—we ensure your website runs
            smoothly and securely after the fix, giving you peace of mind and
            allowing you to focus on your business.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="p-10 bg-white">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
          How It Works
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
              1. Describe Your Issue
            </h3>
            <p className="text-gray-700">
              Start by telling us what’s wrong. Our team will review the issue
              and provide an estimated timeline and cost.
            </p>
          </div>
          <div className="text-center px-6">
            <Image
              src="/images/maintenance.gif"
              alt="Fix"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              2. We Fix It
            </h3>
            <p className="text-gray-700">
              Our experts will fix the issue, testing everything in a secure
              staging environment before applying it to your live site.
            </p>
          </div>
          <div className="text-center px-6">
            <Image
              src="/images/credit-card.gif"
              alt="Confirm Fix"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Confirm & Pay
            </h3>
            <p className="text-gray-700">
              After confirming the fix, you only pay once you are completely
              satisfied. No hidden fees—just results.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="p-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Some Of Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Service 1 */}
          <div className="flex items-start space-x-6">
            <Image
              src="/images/bug.png"
              alt="Troubleshooting"
              width={64}
              height={64}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Troubleshooting & Bug Fixes
              </h3>
              <p className="text-gray-700">
                Our experts quickly identify and resolve any issues with your
                WordPress site, ensuring smooth performance and user experience.
              </p>
            </div>
          </div>
          {/* Service 2 */}
          <div className="flex items-start space-x-6">
            <Image
              src="/images/cyber-security.png"
              alt="Security Enhancement"
              width={64}
              height={64}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Security Enhancements
              </h3>
              <p className="text-gray-700">
                We strengthen your website’s security, protecting it from
                vulnerabilities and potential threats. Your site’s safety is our
                priority.
              </p>
            </div>
          </div>
          {/* Service 3 */}
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
                Improve your site’s speed and performance for a better user
                experience and SEO rankings. We optimize every aspect of your
                website to ensure it runs at peak efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We Fix It All
            </h2>
            <p className="text-gray-700 mb-4">
              From plugin conflicts to server issues, we handle it all. Our
              expert team has experience with a wide range of WordPress
              problems, and we’re ready to tackle whatever challenge your site
              is facing.
            </p>
            <p className="text-gray-700">
              We also provide recommendations to prevent future issues, so your
              site stays healthy and secure long after our work is done.
            </p>
          </div>
          <div>
            <Image
              src="/images/wizard.png"
              alt="We Fix It All"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center bg-white p-6 rounded-lg">
            <p className="text-gray-700 italic mb-4">
              &quot;Five stars are not enough! I&apos;d been delayed and put off
              by tech services. Found Milos thru the Divi site.Awesome! Answer
              to prayer!&quot;
            </p>
            <p className="text-gray-900 font-semibold">- Nancy</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg">
            <p className="text-gray-700 italic mb-4">
              &quot;We&apos;ve been working with Milos for a couple months in
              which time he has delivered a great website. He is responsive so
              changes are made quickly and is very easy to communicate with. His
              rates are very competitive and he goes the extra mile.&quot;
            </p>
            <p className="text-gray-900 font-semibold">- Kirk W</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg">
            <p className="text-gray-700 italic mb-4">
              &quot;We have just started working with Milos but plan to make
              this an ongoing support for our site. It&apos;s saved our in-house
              team many man-hours of frustration battling with WordPress.
              Response times are rapid, excellent technical knowledge goes
              beyond WordPress and it&apos;s a very cost efficient way of being
              able to get your site to do what you want and do it (technically)
              well. Highly recommend Wrdprssifix&apos;s services.&quot;
            </p>
            <p className="text-gray-900 font-semibold">- joanne lacey</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Need Immediate Help?</h2>
        <p className="text-xl mb-6">
          Contact us today to get your WordPress site fixed by experts.
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
