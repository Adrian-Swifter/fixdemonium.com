"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/trustpilot");
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const data = await response.json();
        if (data.error) throw new Error(data.error);

        setReviews(data.reviews || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the reviews:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const getInitials = (name) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("");
    return initials.toUpperCase();
  };

  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>
          24/7 Expert WordPress Support & Maintenance | WP Supportly
        </title>
        <meta
          name="description"
          content="WP Supportly offers expert WordPress support and maintenance services, including troubleshooting, performance optimization, security, and more. Get 24/7 support from our team."
        />
        <meta
          name="keywords"
          content="WordPress support, WordPress maintenance, WordPress troubleshooting, WordPress performance optimization, WordPress security, WP Supportly"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="WP Supportly" />
        <link rel="canonical" href="https://www.wpsupportly.com" />
        <meta
          property="og:title"
          content="24/7 Expert WordPress Support & Maintenance | WP Supportly"
        />
        <meta
          property="og:description"
          content="WP Supportly offers expert WordPress support and maintenance services, including troubleshooting, performance optimization, security, and more. Get 24/7 support from our team."
        />
        <meta property="og:url" content="https://www.wpsupportly.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="24/7 Expert WordPress Support & Maintenance | WP Supportly"
        />
        <meta
          name="twitter:description"
          content="WP Supportly offers expert WordPress support and maintenance services, including troubleshooting, performance optimization, security, and more. Get 24/7 support from our team."
        />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Structured Data for SEO */}
      <Script type="application/ld+json" id="structured-data">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "WP Supportly",
          url: "https://www.wpsupportly.com",
          logo: "https://www.wpsupportly.com/images/logo.png",
          sameAs: [
            "https://www.facebook.com/WPSupportly",
            "https://www.twitter.com/WPSupportly",
            "https://www.linkedin.com/company/wpsupportly",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-800-555-5555",
            contactType: "Customer Service",
            areaServed: "Worldwide",
            availableLanguage: ["English", "Spanish"],
          },
          description:
            "WP Supportly offers expert WordPress support and maintenance services, including troubleshooting, performance optimization, security, and more.",
        })}
      </Script>

      <main className={`${roboto.className} container mx-auto px-4 md:px-0`}>
        {/* Hero Section */}
        <div className="w-full py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                24/7 Expert WordPress Support & Maintenance
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10">
                Your WordPress website is in good hands. We fix issues, optimize
                performance, and keep your site secure.
              </p>
              <a
                href="#"
                className="inline-block bg-emerald-300 text-white px-8 py-3 text-lg font-bold hover:bg-emerald-500"
              >
                TRY OUR DEMO VERSION
              </a>
            </div>
            <div>
              <Image
                src="/images/test.png" // Replace with actual image
                alt="WordPress Support"
                width={1200}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="w-full py-20">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
            Our WordPress Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Item 1 */}
            <div className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>support</title>
                  <rect width="24" height="24" fill="none" />
                  <path d="M12,2a8,8,0,0,0-8,8v1.9A2.92,2.92,0,0,0,3,14a2.88,2.88,0,0,0,1.94,2.61C6.24,19.72,8.85,22,12,22h3V20H12c-2.26,0-4.31-1.7-5.34-4.39l-.21-.55L5.86,15A1,1,0,0,1,5,14a1,1,0,0,1,.5-.86l.5-.29V11a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1v5H13.91a1.5,1.5,0,1,0-1.52,2H20a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2V10A8,8,0,0,0,12,2Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                24/7 Support & Troubleshooting
              </h3>
              <p className="text-gray-600 text-center">
                Get round-the-clock support to resolve any WordPress issues,
                ensuring your website is always running smoothly.
              </p>
            </div>
            {/* Service Item 2 */}
            <div className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0" fill="none" width="20" height="20" />
                  <g>
                    <path d="M3.76 17.01h12.48C17.34 15.63 18 13.9 18 12c0-4.41-3.58-8-8-8s-8 3.59-8 8c0 1.9.66 3.63 1.76 5.01zM9 6c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zM4 8c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zm4.52 3.4c.84-.83 6.51-3.5 6.51-3.5s-2.66 5.68-3.49 6.51c-.84.84-2.18.84-3.02 0-.83-.83-.83-2.18 0-3.01zM3 13c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zm6 0c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1zm6 0c0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1s-1-.44-1-1z" />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                WordPress Performance Optimization
              </h3>
              <p className="text-gray-600 text-center">
                Enhance your website’s speed and performance, providing a better
                user experience and improved SEO rankings.
              </p>
            </div>
            {/* Service Item 3 */}
            <div className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path
                      d="M256.001,0L29.89,130.537c0,47.476,4.506,88.936,12.057,125.463C88.61,481.721,256.001,512,256.001,512
            s167.389-30.279,214.053-256c7.551-36.527,12.057-77.986,12.057-125.463L256.001,0z M256.118,466.723
            c-0.035-0.012-0.082-0.028-0.117-0.039v-47.672V256H140.77H91.122c-6.67-29.738-11.109-63.506-12.394-101.93L255.999,51.728h0.002
            v51.73V256h115.27h49.625C385.636,413.404,287.327,456.774,256.118,466.723z"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                Security & Malware Removal
              </h3>
              <p className="text-gray-600 text-center">
                Protect your WordPress site with our security services,
                including malware removal and vulnerability fixes.
              </p>
            </div>
            {/* Service Item 4 */}
            <div className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <svg
                  fill="currentColor"
                  className="w-12 h-12 text-emerald-400"
                  viewBox="0 0 128 128"
                >
                  <g>
                    <path d="M1,38h126V2H1V38z M9,10h110v20H9V10z" />
                    <path d="M1,82h126V46H1V82z M9,54h110v20H9V54z" />
                    <path d="M1,127h126V91H1V127z M9,99h110v20H9V99z" />
                    <rect height="8" width="8" x="15" y="16" />
                    <rect height="8" width="8" x="31" y="16" />
                    <rect height="8" width="8" x="47" y="16" />
                    <rect height="8" width="8" x="15" y="59" />
                    <rect height="8" width="8" x="31" y="59" />
                    <rect height="8" width="8" x="47" y="59" />
                    <rect height="8" width="8" x="15" y="105" />
                    <rect height="8" width="8" x="31" y="105" />
                    <rect height="8" width="8" x="47" y="105" />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                WordPress Backup & Recovery
              </h3>
              <p className="text-gray-600 text-center">
                Keep your data safe with regular backups and reliable recovery
                options, ensuring business continuity.
              </p>
            </div>
            {/* Service Item 5 */}
            <div className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="white" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 9.01C11.4477 9.01 11 8.56229 11 8.01V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V8.01C13 8.56228 12.5523 9.01 12 9.01ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM11 16.01C11 16.5623 11.4477 17.01 12 17.01C12.5523 17.01 13 16.5623 13 16.01V16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16V16.01ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
                    fill="#10B981"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                Divi Theme Support
              </h3>
              <p className="text-gray-600 text-center">
                Expert help with Divi theme customization, troubleshooting, and
                updates to keep your site running smoothly.
              </p>
            </div>
            {/* Service Item 6 */}
            <div className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <svg
                  fill="#10B981"
                  height="48px"
                  width="48px"
                  viewBox="0 0 230.795 230.795"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M60.357,63.289c-2.929-2.929-7.678-2.93-10.606-0.001L2.197,110.836C0.79,112.243,0,114.151,0,116.14
      c0,1.989,0.79,3.896,2.196,5.303l47.348,47.35c1.465,1.465,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196
      c2.93-2.929,2.93-7.678,0.001-10.606L18.107,116.14l42.25-42.245C63.286,70.966,63.286,66.217,60.357,63.289z"
                    />
                    <path
                      d="M228.598,110.639l-47.355-47.352c-2.928-2.928-7.677-2.929-10.606,0.001c-2.929,2.929-2.929,7.678,0.001,10.607
      l42.051,42.048l-42.249,42.243c-2.93,2.929-2.93,7.678-0.001,10.606c1.465,1.465,3.384,2.197,5.304,2.197
      c1.919,0,3.839-0.732,5.303-2.196l47.554-47.547c1.407-1.406,2.197-3.314,2.197-5.304
      C230.795,113.954,230.005,112.046,228.598,110.639z"
                    />
                    <path
                      d="M155.889,61.302c-3.314-2.484-8.017-1.806-10.498,1.51l-71.994,96.184c-2.482,3.316-1.807,8.017,1.51,10.498
      c1.348,1.01,2.925,1.496,4.488,1.496c2.282,0,4.537-1.038,6.01-3.006L157.398,71.8C159.881,68.484,159.205,63.784,155.889,61.302z"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                Custom Development & Integration
              </h3>
              <p className="text-gray-600 text-center">
                Get tailored solutions for your business with our custom
                WordPress development and integration services.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Control Section */}
        <div className="w-full text-white py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:flex justify-center">
            <Image
              src="/images/test.png"
              alt="Mission Control"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-emerald-400 mb-8 px-4">
              One-Time Fix
            </h2>
            <div className="space-y-6 px-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Explain the issue
                </h3>
                <p className="text-gray-600">
                  Use our ticketing system to send a detailed description of the
                  issue you’re having – then we’ll ask for login details so we
                  can fix your site.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Troubleshooting and fixing
                </h3>
                <p className="text-gray-600">
                  We’ll copy your website to the staging environment to debug
                  the issue without harming the live website in the process.
                  After the issue is resolved, we’ll apply the fix on the live
                  site.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Pay for the results
                </h3>
                <p className="text-gray-600">
                  After you review your website and confirm the fix was 100%
                  successful, we’ll send you the payment link.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-emerald-400 text-white px-8 py-4 mx-4 text-lg font-bold hover:bg-emerald-500"
              >
                ORDER ONE-TIME FIX
              </a>
            </div>
          </div>
        </div>

        {/* TrustPilot Reviews */}
        <div className="w-full py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">
            TrustPilot Reviews
          </h1>
          {loading ? (
            <p className="text-center">Loading reviews...</p>
          ) : error ? (
            <p className="text-center text-red-500">
              Error loading reviews: {error}
            </p>
          ) : (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div
                    key={index}
                    className=" p-6 hover:shadow-xl transition-shadow"
                  >
                    {/* User Info */}
                    <div className="flex items-center mb-4">
                      {review.avatar ? (
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mr-4">
                          <span className="font-bold">
                            {getInitials(review.name)}
                          </span>
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {review.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {review.location}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating
                              ? "text-emerald-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927a.997.997 0 011.902 0l1.92 5.885h6.191c.85 0 1.204 1.091.516 1.583l-5.003 3.637 1.92 5.885c.35 1.071-.916 1.963-1.83 1.279l-5.003-3.637-5.003 3.637c-.914.684-2.18-.208-1.83-1.279l1.92-5.885L.74 10.395c-.688-.492-.334-1.583.516-1.583h6.191l1.92-5.885z" />
                        </svg>
                      ))}
                    </div>

                    {/* Review Title */}
                    <h2 className="text-lg font-semibold mb-2 text-gray-800">
                      {review.title}
                    </h2>

                    {/* Review Text */}
                    <p className="mb-4 text-gray-700">{review.text}</p>

                    {/* Date of Experience */}
                    <p className="text-sm text-gray-500">
                      <strong>Date of experience:</strong>{" "}
                      {new Date(review.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                ))
              ) : (
                <p>No reviews available.</p>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
