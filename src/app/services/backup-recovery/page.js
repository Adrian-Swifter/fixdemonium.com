// src/app/services/backup-recovery/page.js

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

// SEO metadata
export const metadata = {
  title: "WordPress Backup & Recovery Services | Fixdemonium",
  description:
    "Ensure your WordPress site is secure with regular backups and professional recovery services. Fixdemonium provides reliable WordPress backup and recovery solutions to keep your data safe.",
  keywords:
    "WordPress backup, website recovery, WordPress restore, backup solutions, WordPress backup service, WordPress data recovery, secure WordPress backups",
  openGraph: {
    title: "WordPress Backup & Recovery Services | Fixdemonium",
    description:
      "Get secure and reliable WordPress backup and recovery services to protect your website's data. Fixdemonium ensures that your site is always safe.",
    url: "https://www.fixdemonium.com/services/backup-recovery",
    siteName: "Fixdemonium",
    images: [
      {
        url: "/images/backup-recovery.jpg",
        width: 1200,
        height: 630,
        alt: "WordPress Backup & Recovery Services",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Backup & Recovery Services | Fixdemonium",
    description:
      "Fixdemonium offers secure WordPress backup and reliable recovery services to ensure your website's data is protected.",
    image: "/images/backup-recovery.jpg",
  },
};

export default function BackupRecoveryPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-6">
          WordPress Backup & Recovery Services
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Protect your WordPress site with reliable backup solutions. We ensure
          your data is secure and can be recovered quickly in the event of an
          issue.
        </p>
        <div>
          <Link href="/contact-us">
            <span className="bg-white text-emerald-500 px-8 py-3 rounded-full font-semibold cursor-pointer transition-transform transform hover:scale-105">
              Secure My Site Now
            </span>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our WordPress Backup & Recovery Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="text-center">
            <Image
              src="/images/backup.png"
              alt="Scheduled Backups"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Scheduled Backups
            </h3>
            <p className="text-gray-700">
              We set up regular backups for your WordPress site to ensure your
              data is always secure and up to date.
            </p>
          </div>
          {/* Service 2 */}
          <div className="text-center">
            <Image
              src="/images/data-recovery.png"
              alt="Recovery Assistance"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Recovery Assistance
            </h3>
            <p className="text-gray-700">
              Need to restore a backup? We provide quick and reliable recovery
              services to get your site back online.
            </p>
          </div>
          {/* Service 3 */}
          <div className="text-center">
            <Image
              src="/images/clouds.png"
              alt="Cloud Storage Integration"
              width={64}
              height={64}
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Cloud Storage Integration
            </h3>
            <p className="text-gray-700">
              We integrate with cloud storage providers to securely store your
              backups, ensuring they&apos;re always accessible.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">
          How We Protect Your WordPress Site
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center px-6">
            <Image
              src="/images/backup.gif"
              alt="Backup Setup"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Backup Setup
            </h3>
            <p className="text-gray-700">
              We set up scheduled backups to ensure your site’s data is
              regularly saved and always available when needed.
            </p>
          </div>
          <div className="text-center px-6">
            <Image
              src="/images/file-transfer.gif"
              alt="Secure Recovery"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Secure Recovery
            </h3>
            <p className="text-gray-700">
              Our team securely restores your data from the latest backup,
              ensuring your site is back up quickly and safely.
            </p>
          </div>
          <div className="text-center px-6">
            <Image
              src="/images/24-hours-support.gif"
              alt="Continuous Support"
              width={64}
              height={64}
              className="mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Continuous Support
            </h3>
            <p className="text-gray-700">
              We offer ongoing monitoring and support to ensure your backup and
              recovery processes work flawlessly.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Fixdemonium for WordPress Backup & Recovery?
        </h2>
        <p className="text-lg max-w-4xl mx-auto text-gray-700 mb-12 text-center">
          At Fixdemonium, we provide secure and reliable WordPress backup and
          recovery services. With automated backups, incremental options, and
          cloud storage integration, we ensure your website&apos;s data is
          always protected. Whether you&apos;re recovering from an error or just
          need peace of mind, we&apos;ve got your WordPress site covered.
        </p>
        <p className="text-lg max-w-4xl mx-auto text-gray-700 text-center">
          Choose Fixdemonium for expert WordPress backup services that
          prioritize your data&apos;s security. Our dedicated team ensures your
          site is safe from data loss, hacking, or system failure with reliable
          recovery solutions tailored to your needs.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-green-400 text-white text-center rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Protect Your WordPress Data?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get in touch with Fixdemonium today to set up your WordPress backup
          and recovery plan.
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
