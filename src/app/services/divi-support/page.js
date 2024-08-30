import Image from "next/image";
import Link from "next/link";

export default function DiviSupportPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Expert Divi Support & Troubleshooting
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Your one-stop solution for all things Divi. From theme customization
          to performance optimization, our experts are here to help you get the
          most out of Divi.
        </p>
        <div className="mt-6">
          <Link href="/contact">
            <span className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 font-semibold cursor-pointer transition-colors">
              Get Started
            </span>
          </Link>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-10 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Divi Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-6 bg-white rounded-lg border border-gray-200 transition-transform transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Divi Theme Customization
            </h3>
            <p className="text-gray-600">
              Tailor the Divi theme to match your brand's identity. We create
              stunning designs and layouts that resonate with your audience.
            </p>
          </div>
          {/* Service 2 */}
          <div className="p-6 bg-white rounded-lg border border-gray-200 transition-transform transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Speed & Performance Optimization
            </h3>
            <p className="text-gray-600">
              Ensure your Divi site loads quickly and performs optimally. We
              enhance page speed and overall site performance.
            </p>
          </div>
          {/* Service 3 */}
          <div className="p-6 bg-white rounded-lg border border-gray-200 transition-transform transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Troubleshooting & Bug Fixes
            </h3>
            <p className="text-gray-600">
              Encountering issues with Divi? Our experts diagnose and resolve
              all Divi-related problems efficiently.
            </p>
          </div>
          {/* Service 4 */}
          <div className="p-6 bg-white rounded-lg border border-gray-200 transition-transform transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Divi Builder Assistance
            </h3>
            <p className="text-gray-600">
              Need help with Divi Builder? From layouts to advanced features,
              our team ensures you make the most of Divi Builder.
            </p>
          </div>
          {/* Service 5 */}
          <div className="p-6 bg-white rounded-lg border border-gray-200 transition-transform transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Plugin Integration
            </h3>
            <p className="text-gray-600">
              Seamlessly integrate plugins with Divi for extended functionality
              and better performance.
            </p>
          </div>
          {/* Service 6 */}
          <div className="p-6 bg-white rounded-lg border border-gray-200 transition-transform transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Ongoing Maintenance & Support
            </h3>
            <p className="text-gray-600">
              Keep your Divi site running smoothly with our ongoing maintenance
              and support services.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-10">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-8 bg-white rounded-lg border border-gray-200 transition-transform transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              1. Consultation
            </h3>
            <p className="text-gray-600">
              We start with an in-depth consultation to understand your needs
              and goals.
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-lg border border-gray-200 transition-transform transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              2. Implementation
            </h3>
            <p className="text-gray-600">
              Our experts execute the plan, ensuring everything is done to
              perfection.
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-lg border border-gray-200 transition-transform transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              3. Review & Support
            </h3>
            <p className="text-gray-600">
              We review the results with you and provide ongoing support as
              needed.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-8 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-600 italic mb-4">
              "FixDemonium took our Divi site to the next level! Their expertise
              and support were invaluable."
            </p>
            <p className="text-gray-800 font-semibold">- John Doe</p>
          </div>
          {/* Testimonial 2 */}
          <div className="p-8 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-600 italic mb-4">
              "Our website was running slow, but thanks to FixDemonium, it now
              loads lightning fast!"
            </p>
            <p className="text-gray-800 font-semibold">- Jane Smith</p>
          </div>
          {/* Testimonial 3 */}
          <div className="p-8 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-600 italic mb-4">
              "Their Divi support services are top-notch. They resolved all our
              issues quickly and professionally."
            </p>
            <p className="text-gray-800 font-semibold">- Michael Brown</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {/* FAQ 1 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              What is Divi, and why should I use it?
            </h3>
            <p className="text-gray-600">
              Divi is a powerful WordPress theme and visual builder known for
              its flexibility and ease of use. It’s ideal for creating custom
              websites without needing to code.
            </p>
          </div>
          {/* FAQ 2 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              How long does it take to customize my Divi theme?
            </h3>
            <p className="text-gray-600">
              The timeframe depends on the complexity of the customization, but
              most projects are completed within 1-2 weeks.
            </p>
          </div>
          {/* FAQ 3 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Can you help with Divi Builder issues?
            </h3>
            <p className="text-gray-600">
              Absolutely! We specialize in troubleshooting Divi Builder problems
              and ensuring it works smoothly for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Contact us today to get expert Divi support and make your website
          stand out.
        </p>
        <Link href="/contact">
          <span className="bg-white text-emerald-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 cursor-pointer transition-colors">
            Contact Us Now
          </span>
        </Link>
      </section>
    </div>
  );
}
