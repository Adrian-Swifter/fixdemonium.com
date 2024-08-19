import { notFound } from "next/navigation";
import { decode } from "he";
import Image from "next/image";
import Link from "next/link";

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

  const author = post._embedded?.author?.[0];
  const authorAvatar =
    author?.avatar_urls?.["96"] || "/images/default-avatar.png"; // Default avatar if not available

  return (
    <article className="container mx-auto px-6 py-10">
      {/* Hero Section with Featured Image */}
      {featuredImage && (
        <div className="mb-10">
          <Image
            src={featuredImage}
            alt={post.title.rendered}
            width={1200}
            height={600}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      )}

      {/* Post Title and Meta Info */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title.rendered}
        </h1>
        <p className="text-gray-500 text-sm">
          <em>Published on {publishedDate}</em>
        </p>
      </header>

      {/* Post Content */}
      <section
        className="prose lg:prose-xl max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

      {/* Social Sharing Buttons */}
      <div className="mt-12 flex space-x-4">
        <a
          href={`https://twitter.com/intent/tweet?url=https://yourwebsite.com/wordpress-tutorials/${slug}&text=${encodeURIComponent(
            post.title.rendered
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          Share on Twitter
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com/wordpress-tutorials/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-full"
        >
          Share on Facebook
        </a>
      </div>

      {/* Related Posts (Placeholder for now) */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Related Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Related posts would be fetched and displayed here */}
          <p>Related posts go here...</p>
        </div>
      </div>

      {/* Author Bio (Optional) */}
      {author && (
        <div className="mt-12 flex items-center space-x-4">
          <Image
            src={authorAvatar}
            alt={author.name}
            width={96}
            height={96}
            className="rounded-full"
          />
          <div>
            <h4 className="text-lg font-semibold">{author.name}</h4>
            <p className="text-gray-600">{author.description}</p>
          </div>
        </div>
      )}

      {/* Comments Section (Optional Placeholder) */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Comments</h3>
        <p>Comments would go here...</p>
      </div>
    </article>
  );
}
