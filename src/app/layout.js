import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    title: "24/7 Expert WordPress Support & Maintenance | Fixdemonium",
    description:
      "Fixdemonium offers expert WordPress support and maintenance services, including troubleshooting, performance optimization, security, and more. Get 24/7 support from our team.",
    keywords:
      "WordPress support, WordPress maintenance, WordPress troubleshooting, WordPress performance optimization, WordPress security, Fixdemonium",
    openGraph: {
      title: "24/7 Expert WordPress Support & Maintenance | Fixdemonium",
      description:
        "Fixdemonium offers expert WordPress support and maintenance services, including troubleshooting, performance optimization, security, and more. Get 24/7 support from our team.",
      url: "https://www.fixdemonium.com",
      siteName: "Fixdemonium",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Fixdemonium",
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "24/7 Expert WordPress Support & Maintenance | Fixdemonium",
      description:
        "Fixdemonium offers expert WordPress support and maintenance services, including troubleshooting, performance optimization, security, and more. Get 24/7 support from our team.",
      image: "/images/og-image.jpg",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://www.fixdemonium.com",
    },
    other: {
      "X-UA-Compatible": "IE=edge",
    },
    icons: {
      icon: "/favicon.ico",
    },
    // Structured data (JSON-LD)
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Fixdemonium",
      url: "https://www.fixdemonium.com",
      logo: "https://www.fixdemonium.com/images/logo.png",
      sameAs: [
        "https://www.facebook.com/Fixdemonium",
        "https://www.twitter.com/Fixdemonium",
        "https://www.linkedin.com/company/fixdemonium",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-800-555-5555",
        contactType: "Customer Service",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script id="trustpilot-script" strategy="afterInteractive">
          {`
            (function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
                a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;f=d.getElementsByTagName(s)[0];
                f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
                tp('register', 'lpkpiB28EW8UVIQ5');
          `}
        </Script>
      </body>
    </html>
  );
}
