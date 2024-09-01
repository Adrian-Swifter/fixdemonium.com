"use client";
import { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function ServicesSection() {
  const [hoveredStepOneTime, setHoveredStepOneTime] = useState(1);
  const [hoveredStepOngoing, setHoveredStepOngoing] = useState(1);

  const StepColumn = ({
    title,
    steps,
    hoveredStep,
    setHoveredStep,
    linkHref,
  }) => {
    return (
      <div className="relative">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
          {title}
        </h3>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gray-300"></div>

          <div className="space-y-12">
            {steps.map(({ step, image, alt, text }, index) => (
              <div
                key={step}
                className="relative flex items-center"
                onMouseEnter={() => setHoveredStep(step)}
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center text-emerald-500 font-bold">
                    {step}
                  </div>
                </div>
                <div className="ml-6 bg-white p-4 rounded-lg w-full flex items-center">
                  <Image
                    src={image}
                    alt={alt}
                    width={48}
                    height={48}
                    className="float-left mr-4"
                  />
                  <p className={"text-gray-700 " + poppins.className}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={"text-center mt-10 " + poppins.className}>
          <a
            href={linkHref}
            className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-600"
          >
            Get Started
          </a>
        </div>
      </div>
    );
  };

  const oneTimeFixSteps = [
    {
      step: 1,
      image: "/images/bug.png",
      alt: "Describe Issue",
      text: "Describe the issue and provide credentials to access your WordPress dashboard.",
    },
    {
      step: 2,
      image: "/images/payment-method.png",
      alt: "Cost Estimation",
      text: "Receive a cost estimate and make the payment.",
    },
    {
      step: 3,
      image: "/images/coffee-break.png",
      alt: "Fix Issue",
      text: "Our experts resolve the issue using a staging environment.",
    },
    {
      step: 4,
      image: "/images/checklist.png",
      alt: "Verify Fix",
      text: "Verify the fix and get tips for future prevention.",
    },
  ];

  const ongoingSupportSteps = [
    {
      step: 1,
      image: "/images/laptop.png",
      alt: "Submit Request",
      text: "Send us your support request whenever an issue arises.",
    },
    {
      step: 2,
      image: "/images/wrench.png",
      alt: "Resolve Issue",
      text: "Our experts diagnose and resolve the issue promptly.",
    },
    {
      step: 3,
      image: "/images/checklist.png",
      alt: "Verify Results",
      text: "Verify the results to ensure your website is back on track.",
    },
    {
      step: 4,
      image: "/images/service.png",
      alt: "Continuous Improvement",
      text: "Use your support hours to continuously improve your site.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StepColumn
            title="One Time Fix"
            steps={oneTimeFixSteps}
            hoveredStep={hoveredStepOneTime}
            setHoveredStep={setHoveredStepOneTime}
            linkHref={"/services/one-time-wordpress-fix"}
          />
          <StepColumn
            title="Ongoing Support"
            steps={ongoingSupportSteps}
            hoveredStep={hoveredStepOngoing}
            setHoveredStep={setHoveredStepOngoing}
            linkHref={"/services/ongoing-wordpress-support"}
          />
        </div>
      </div>
    </section>
  );
}
