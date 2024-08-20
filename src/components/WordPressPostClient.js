"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function WordPressPostClient() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `https://wrdprssifix.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        const posts = await res.json();

        if (!posts.length) {
          throw new Error("Post not found");
        }

        setPost(posts[0]);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-emerald-500"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Post not found.</p>
      </div>
    );
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const publishedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container mx-auto flex flex-col md:flex-row px-6 py-10">
      {/* Main Content */}
      <article className="md:w-3/4">
        {featuredImage && (
          <div className="mb-10">
            <Image
              src={featuredImage}
              alt={post.title.rendered || "Featured image for the post"}
              width={1200}
              height={600}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        )}

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title.rendered}
          </h1>
          <p className="text-gray-500 text-sm">
            <em>Published on {publishedDate}</em>
          </p>
        </header>

        {/* Apply the Prose Class */}
        <section
          className="prose lg:prose-xl max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>

      {/* Sidebar */}
      <aside className="md:w-1/4 md:pl-10">
        <div className="sticky top-20 space-y-8">
          <div className="bg-emerald-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Need WordPress Help?
            </h3>
            <p className="text-gray-700 mb-4">
              Get expert support for your WordPress website today!
            </p>
            <a
              href="/services"
              className="block bg-emerald-400 text-white text-center py-2 rounded-md font-semibold"
            >
              See Our Services
            </a>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Featured Services
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/service/wordpress-support"
                  className="text-emerald-400"
                >
                  24/7 WordPress Support
                </a>
              </li>
              <li>
                <a
                  href="/service/wordpress-security"
                  className="text-emerald-400"
                >
                  WordPress Security
                </a>
              </li>
              <li>
                <a
                  href="/service/wordpress-maintenance"
                  className="text-emerald-400"
                >
                  WordPress Maintenance
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
