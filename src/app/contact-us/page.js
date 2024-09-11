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
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          We&apos;d love to hear from you! Please fill out the form below and
          we&apos;ll get in touch with you shortly.
        </p>
      </header>

      <section className="py-10">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
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
              Send Message
            </button>
          </div>
          {formStatus && (
            <p className="text-center mt-4 text-gray-700">{formStatus}</p>
          )}
        </form>
      </section>
    </div>
  );
}
