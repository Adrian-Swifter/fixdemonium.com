"use client";
import { useState } from "react";
import Image from "next/image";

export default function ServicesSection() {
  const [hoveredStepOneTime, setHoveredStepOneTime] = useState(1);
  const [hoveredStepOngoing, setHoveredStepOngoing] = useState(1);

  return (
    <section className=" py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* One Time Fix Column */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              One Time Fix
            </h3>
            <div className="relative space-y-12">
              {/* Vertical Line */}
              <div className="absolute left-5 top-0 bottom-0 w-1 bg-gray-300 z-0"></div>

              {/* Moving Ball */}
              <div
                className="absolute left-4 w-6 h-6 bg-emerald-500 rounded-full transition-all duration-500"
                style={{
                  top: `${(hoveredStepOneTime - 1) * 33.33}%`,
                }}
              ></div>

              <div
                className="relative flex items-center"
                onMouseEnter={() => setHoveredStepOneTime(1)}
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center text-emerald-500 font-bold">
                    1
                  </div>
                </div>
                <div className="ml-6 bg-white p-4 rounded-lg w-full flex items-center">
                  <Image
                    src="/images/bug.png"
                    alt="Describe Issue"
                    width={48}
                    height={48}
                    className="float-left mr-4"
                  />
                  <p className="text-gray-700">
                    Describe the issue and provide credentials to access your
                    WordPress dashboard.
                  </p>
                </div>
              </div>

              <div
                className="relative flex items-center"
                onMouseEnter={() => setHoveredStepOneTime(2)}
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center text-emerald-500 font-bold">
                    2
                  </div>
                </div>
                <div className="ml-6 bg-white p-4 rounded-lg w-full flex items-center">
                  <Image
                    src="/images/payment-method.png"
                    alt="Cost Estimation"
                    width={48}
                    height={48}
                    className="float-left mr-4"
                  />
                  <p className="text-gray-700">
                    Receive a cost estimate and make the payment.
                  </p>
                </div>
              </div>

              <div
                className="relative flex items-center"
                onMouseEnter={() => setHoveredStepOneTime(3)}
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center text-emerald-500 font-bold">
                    3
                  </div>
                </div>
                <div className="ml-6 bg-white p-4 rounded-lg w-full flex items-center">
                  <Image
                    src="/images/coffee-break.png"
                    alt="Fix Issue"
                    width={48}
                    height={48}
                    className="float-left mr-4"
                  />
                  <p className="text-gray-700">
                    Our experts resolve the issue using a staging environment.
                  </p>
                </div>
              </div>

              <div
                className="relative flex items-center"
                onMouseEnter={() => setHoveredStepOneTime(4)}
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center text-emerald-500 font-bold">
                    4
                  </div>
                </div>
                <div className="ml-6 bg-white p-4 rounded-lg w-full flex items-center">
                  <Image
                    src="/images/checklist.png"
                    alt="Verify Fix"
                    width={48}
                    height={48}
                    className="float-left mr-4"
                  />
                  <p className="text-gray-700">
                    Verify the fix and get tips for future prevention.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <a
                href="#"
                className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-600"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Ongoing Support Column */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Ongoing Support
            </h3>
            <div className="relative space-y-12">
              {/* Vertical Line */}
              <div className="absolute left-5 top-0 bottom-0 w-1 bg-gray-300 z-0"></div>

              {/* Moving Ball */}
              <div
                className="absolute left-4 w-6 h-6 bg-emerald-500 rounded-full transition-all duration-500"
                style={{
                  top: `${(hoveredStepOngoing - 1) * 25.5}%`,
                }}
              ></div>

              <div
                className="relative flex items-center"
                onMouseEnter={() => setHoveredStepOngoing(1)}
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center text-emerald-500 font-bold">
                    1
                  </div>
                </div>
                <div className="ml-6 bg-white p-4 rounded-lg w-full flex items-center">
                  <Image
                    src="/images/laptop.png"
                    alt="Submit Request"
                    width={48}
                    height={48}
                    className="float-left mr-4"
                  />
                  <p className="text-gray-700">
                    Send us your support request whenever an issue arises.
                  </p>
                </div>
              </div>

              <div
                className="relative flex items-center"
                onMouseEnter={() => setHoveredStepOngoing(2)}
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center text-emerald-500 font-bold">
                    2
                  </div>
                </div>
                <div className="ml-6 bg-white p-4 rounded-lg w-full flex items-center">
                  <Image
                    src="/images/wrench.png"
                    alt="Resolve Issue"
                    width={48}
                    height={48}
                    className="float-left mr-4"
                  />
                  <p className="text-gray-700">
                    Our experts diagnose and resolve the issue promptly.
                  </p>
                </div>
              </div>

              <div
                className="relative flex items-center"
                onMouseEnter={() => setHoveredStepOngoing(3)}
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center text-emerald-500 font-bold">
                    3
                  </div>
                </div>
                <div className="ml-6 bg-white p-4 rounded-lg w-full flex items-center">
                  <Image
                    src="/images/checklist.png"
                    alt="Verify Results"
                    width={48}
                    height={48}
                    className="float-left mr-4"
                  />
                  <p className="text-gray-700">
                    Verify the results to ensure your website is back on track.
                  </p>
                </div>
              </div>

              <div
                className="relative flex items-center"
                onMouseEnter={() => setHoveredStepOngoing(4)}
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center text-emerald-500 font-bold">
                    4
                  </div>
                </div>
                <div className="ml-6 bg-white p-4 rounded-lg w-full flex items-center">
                  <Image
                    src="/images/service.png"
                    alt="Continuous Improvement"
                    width={48}
                    height={48}
                    className="float-left mr-4"
                  />
                  <p className="text-gray-700">
                    Use your support hours to continuously improve your site.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <a
                href="#"
                className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-600"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
