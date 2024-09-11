import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

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
      <body className={poppins.className}>
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
        <Script id="livechat-script" strategy="afterInteractive">
          {`
            window.__lc = window.__lc || {};
            window.__lc.license = 18537651;
            window.__lc.integration_name = "manual_onboarding";
            window.__lc.product_name = "livechat";
            (function(n,t,c){
              function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}
              var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},
              once:function(){i(["once",c.call(arguments)])},
              off:function(){i(["off",c.call(arguments)])},
              get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");
              return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},
              init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",
              n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};
              !n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e
            }(window,document,[].slice))
          `}
        </Script>
        <noscript>
          <a href="https://www.livechat.com/chat-with/18537651/" rel="nofollow">
            Chat with us
          </a>
          , powered by
          <a
            href="https://www.livechat.com/?welcome"
            rel="noopener nofollow"
            target="_blank"
          >
            LiveChat
          </a>
        </noscript>
      </body>
    </html>
  );
}
