import { notFound } from "next/navigation";
import { decode } from "he";

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
    : "Default description"; // Fallback description

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://yourwebsite.com/default-image.jpg";
  const publishedDate = new Date(post.date).toISOString(); // ISO format for structured data

  return {
    title: `${post.title.rendered} | WordPress Tutorials`,
    description: metaDescription,
    openGraph: {
      title: `${post.title.rendered} | WordPress Tutorials`,
      description: metaDescription,
      url: `https://yourwebsite.com/wordpress-tutorials/${slug}`,
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
    canonical: `https://yourwebsite.com/wordpress-tutorials/${slug}`,
    alternates: {
      canonical: `https://yourwebsite.com/wordpress-tutorials/${slug}`,
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://yourwebsite.com/wordpress-tutorials/${slug}`,
      },
      headline: post.title.rendered,
      image: featuredImage,
      datePublished: publishedDate,
      dateModified: publishedDate,
      author: {
        "@type": "Person",
        name: post._embedded?.author?.[0]?.name || "Author Name",
      },
      publisher: {
        "@type": "Organization",
        name: "Your Website Name",
        logo: {
          "@type": "ImageObject",
          url: "https://yourwebsite.com/path-to-logo.jpg",
        },
      },
      description: metaDescription,
    },
  };
}

export default async function WordPressPost({ params }) {
  const { slug } = params;

  const res = await fetch(
    `https://wrdprssifix.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );
  const posts = await res.json();

  if (!posts.length) {
    notFound(); // Show 404 page if post not found
  }

  const post = posts[0];
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const publishedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <p>
        <em>Published on {publishedDate}</em>
      </p>
      {featuredImage && <img src={featuredImage} alt={post.title.rendered} />}
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}
