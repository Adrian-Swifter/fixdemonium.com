"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormStatus("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("Error sending message. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Get a Quote</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          We&apos;d love to help you with your WordPress needs. Please fill out
          the form below, and we&apos;ll get in touch with you shortly!
        </p>
      </header>

      {/* Contact Form Section */}
      <section className="py-10">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone (Optional)
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500"
              rows="5"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              Get a Quote
            </button>
          </div>
          {formStatus && (
            <p className="text-center mt-4 text-gray-700">{formStatus}</p>
          )}
        </form>
      </section>

      {/* Social Media Section */}
      <section className="text-center py-10 bg-white mt-16 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Connect with Us
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Follow us on social media and stay up to date with the latest
          WordPress tips and services.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/fixdemonium/"
            target="_blank"
            className="text-emerald-500 hover:text-emerald-600 text-3xl"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/fixdemonium/"
            target="_blank"
            className="text-emerald-500 hover:text-emerald-600 text-3xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.tiktok.com/@fixdemonium.com"
            target="_blank"
            className="text-emerald-500 hover:text-emerald-600 text-3xl"
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a
            href="https://x.com/fixdemonium"
            target="_blank"
            className="text-emerald-500 hover:text-emerald-600 text-3xl"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Why Choose Fixdemonium?
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          We provide 24/7 WordPress support, expert troubleshooting, and
          top-notch maintenance to ensure your website is always running
          smoothly. Here’s why our clients love working with us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-lg">
            <i className="fas fa-tools text-4xl text-emerald-500 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Expert Support
            </h3>
            <p className="text-gray-700">
              Our team of WordPress experts is ready to assist you with any
              challenge, no matter how complex.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg">
            <i className="fas fa-clock text-4xl text-emerald-500 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              24/7 Availability
            </h3>
            <p className="text-gray-700">
              We are available around the clock to make sure your WordPress site
              gets the attention it deserves.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg">
            <i className="fas fa-shield-alt text-4xl text-emerald-500 mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Security Focused
            </h3>
            <p className="text-gray-700">
              Your site’s security is our top priority, ensuring protection
              against malware, hacks, and vulnerabilities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
