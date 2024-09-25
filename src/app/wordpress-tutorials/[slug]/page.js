import { notFound } from "next/navigation";
import { decode } from "he";
import WordPressPostClient from "@/components/WordPressPostClient";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const res = await fetch(
    `https://wrdprssifix.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );
  const posts = await res.json();

  if (!posts.length) {
    return { title: "Post Not Found" };
  }

  const post = posts[0];

  const metaDescription = post.excerpt.rendered
    ? decode(post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "").trim())
    : "Get expert WordPress support with Fixdemonium. We fix your WordPress issues quickly and professionally.";

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://fixdemonium.com/default-image.jpg";
  const publishedDate = new Date(post.date).toISOString();

  return {
    title: `${post.title.rendered} | WordPress Tutorials`,
    description: metaDescription,
    openGraph: {
      title: `${post.title.rendered} | WordPress Tutorials`,
      description: metaDescription,
      url: `https://fixdemonium.com/wordpress-tutorials/${slug}`,
      type: "article",
      images: [
        {
          url: featuredImage,
          width: 800,
          height: 600,
          alt: post.title.rendered,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title.rendered} | WordPress Tutorials`,
      description: metaDescription,
      images: [featuredImage],
    },
    canonical: `https://www.fixdemonium.com/wordpress-tutorials/${slug}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.fixdemonium.com/wordpress-tutorials/${slug}`,
      },
      headline: post.title.rendered,
      image: featuredImage,
      datePublished: publishedDate,
      dateModified: publishedDate,
      author: {
        "@type": "Person",
        name: post._embedded?.author?.[0]?.name || "Fixdemonium Team",
      },
      publisher: {
        "@type": "Organization",
        name: "Fixdemonium",
        logo: {
          "@type": "ImageObject",
          url: "https://fixdemonium.com/images/logo.png",
        },
      },
      description: metaDescription,
    },
  };
}

export default function PostLayout({ children }) {
  return (
    <div>
      <WordPressPostClient />
    </div>
  );
}
