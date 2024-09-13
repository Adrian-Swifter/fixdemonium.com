import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Expert Divi Support & Troubleshooting | Fixdemonium",
  description:
    "Fixdemonium offers expert Divi support and troubleshooting services to ensure your website runs smoothly. Get fast, reliable help with Divi customization, performance optimization, and more.",
  keywords:
    "Divi support, Divi help, Divi troubleshooting, Divi theme customization, WordPress support",
  openGraph: {
    title: "Expert Divi Support & Troubleshooting | Fixdemonium",
    description:
      "Fixdemonium offers expert Divi support and troubleshooting services to ensure your website runs smoothly. Get fast, reliable help with Divi customization, performance optimization, and more.",
    url: "https://www.fixdemonium.com/divi-support",
    siteName: "Fixdemonium",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fixdemonium Divi Support",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Divi Support & Troubleshooting | Fixdemonium",
    description:
      "Fixdemonium offers expert Divi support and troubleshooting services to ensure your website runs smoothly. Get fast, reliable help with Divi customization, performance optimization, and more.",
    image: "/images/og-image.jpg",
  },
  alternates: {
    canonical: "https://www.fixdemonium.com/services/divi-support",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DiviSupportPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Header Section */}
      <header className="text-center py-20 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-6">
          Expert Divi Support & Troubleshooting
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Your one-stop solution for all things Divi. From theme customization
          to performance optimization, our experts are here to help you get the
          most out of Divi.
        </p>
        <div>
          <Link href="/contact-us">
            <span className="bg-white text-emerald-500 px-8 py-3 rounded-full font-semibold cursor-pointer transition-transform transform hover:scale-105">
              Get Expert Help Now
            </span>
          </Link>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Divi Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="bg-white rounded-lg p-8 text-center transition-transform transform hover:scale-105">
            <Image
              src="/images/wrench.png"
              alt="Divi Theme Customization"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Divi Theme Customization
            </h3>
            <p className="text-gray-700">
              Tailor the Divi theme to match your brand&apos;s identity. We
              create stunning designs and layouts that resonate with your
              audience.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg p-8 text-center transition-transform transform hover:scale-105">
            <Image
              src="/images/performance-optimization.png"
              alt="Speed & Performance Optimization"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Speed & Performance Optimization
            </h3>
            <p className="text-gray-700">
              Ensure your Divi site loads quickly and performs optimally. We
              enhance page speed and overall site performance.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg p-8 text-center transition-transform transform hover:scale-105">
            <Image
              src="/images/bug.png"
              alt="Troubleshooting & Bug Fixes"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Troubleshooting & Bug Fixes
            </h3>
            <p className="text-gray-700">
              Encountering issues with Divi? Our experts diagnose and resolve
              all Divi-related problems efficiently.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-lg p-8 text-center transition-transform transform hover:scale-105">
            <Image
              src="/images/wall.png"
              alt="Divi Builder Assistance"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Divi Builder Assistance
            </h3>
            <p className="text-gray-700">
              Need help with Divi Builder? From layouts to advanced features,
              our team ensures you make the most of Divi Builder.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-lg p-8 text-center transition-transform transform hover:scale-105">
            <Image
              src="/images/plug-in.png"
              alt="Plugin Integration"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Plugin Integration
            </h3>
            <p className="text-gray-700">
              Seamlessly integrate plugins with Divi for extended functionality
              and better performance.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white rounded-lg p-8 text-center transition-transform transform hover:scale-105">
            <Image
              src="/images/monitoring.png"
              alt="Ongoing Maintenance & Support"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ongoing Maintenance & Support
            </h3>
            <p className="text-gray-700">
              Keep your Divi site running smoothly with our ongoing maintenance
              and support services.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          How We Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center px-6">
            <Image
              src="/images/presentation.gif"
              alt="Consultation"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Describe Your Divi Issue
            </h3>
            <p className="text-gray-700">
              Share the problems you&apos;re facing with your Divi theme.
              Whether it&apos;s a design, functionality, or performance issue,
              our experts will review it and provide a clear solution plan.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center px-6">
            <Image
              src="/images/technician.gif"
              alt="We Fix It"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              2. We Fix Your Divi Theme
            </h3>
            <p className="text-gray-700">
              Our Divi experts will resolve the issue, making necessary
              adjustments or fixes in a secure environment. We ensure everything
              works perfectly before applying changes to your live website.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center px-6">
            <Image
              src="/images/credit-card.gif"
              alt="Confirm Fix"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Review & Pay
            </h3>
            <p className="text-gray-700">
              Once you&apos;re satisfied with the fix, confirm the results, and
              pay. We only charge you when you&apos;re happy with the outcome,
              with no hidden fees.
            </p>
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

      {/* FAQ Section */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-10 max-w-3xl mx-auto">
          {/* FAQ 1 */}
          <div className="border-l-4 border-emerald-500 pl-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              What kind of Divi support does Fixdemonium.com offer?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Fixdemonium.com offers expert Divi support to solve any issue that
              may arise with your Divi theme or downloaded child themes. Our
              support team specializes in resolving slow loading times,
              unresponsive Divi Builder, and other problems that may occur with
              your website.
            </p>
          </div>
          {/* FAQ 2 */}
          <div className="border-l-4 border-emerald-500 pl-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              How can I contact the Divi support team at Fixdemonium.com?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To contact our Divi support team at Fixdemonium.com, simply visit
              our website and fill out our contact form with details of your
              issue. We will respond promptly to provide the necessary
              assistance to get your website back up and running smoothly.
            </p>
          </div>
          {/* FAQ 3 */}
          <div className="border-l-4 border-emerald-500 pl-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Can Fixdemonium.com help me optimize my Divi website for speed?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes, we can help optimize your Divi website for speed by using
              caching plugins, optimizing images, minimizing CSS and JavaScript
              files, and using a content delivery network (CDN) to serve your
              files from a nearby server. We can also suggest upgrading your
              hosting plan to a faster server or using a managed WordPress
              hosting service that is optimized for speed and security.
            </p>
          </div>
          {/* FAQ 4 */}
          <div className="border-l-4 border-emerald-500 pl-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              How much does Divi support cost at Fixdemonium.com?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At Fixdemonium.com, we offer affordable and competitive pricing
              for our Divi support services starting at $25. We have different
              packages to suit your specific needs and budget, and we always
              provide a clear and transparent breakdown of our costs upfront.
              Contact us today to learn more about our pricing and how we can
              help you with your Divi website.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-green-400 text-white text-center rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to get expert Divi support and make your website
          stand out.
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
