"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function WordPressTutorials() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async (page) => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://wrdprssifix.com/wp-json/wp/v2/posts?page=${page}&per_page=10&_embed`
        );
        const data = await res.json();
        const total = res.headers.get("X-WP-TotalPages");

        setPosts(data);
        setTotalPages(total ? parseInt(total, 10) : 1);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const truncateExcerpt = (excerpt, maxLength = 150) => {
    return excerpt.length > maxLength
      ? excerpt.substring(0, maxLength) + "..."
      : excerpt;
  };
  console.log(posts);
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        WordPress Tutorials
      </h1>

      {/* Loading Indicator */}
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-emerald-500"></div>
        </div>
      ) : (
        <div className="space-y-10">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } bg-white shadow-md rounded-lg overflow-hidden`}
            >
              {/* Image Section */}
              {post._embedded && post._embedded["wp:featuredmedia"] && (
                <div className="md:w-1/2 h-64">
                  <Image
                    src={
                      post._embedded && post._embedded["wp:featuredmedia"]
                        ? post._embedded["wp:featuredmedia"][0].source_url
                        : "/images/default.jpg"
                    }
                    alt={post.title.rendered}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              {/* Content Section */}
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="text-2xl font-semibold mb-3">
                    <Link href={`/wordpress-tutorials/${post.slug}`}>
                      <h2
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      ></h2>
                    </Link>
                  </h2>
                  <p
                    className="text-gray-600 mb-4"
                    dangerouslySetInnerHTML={{
                      __html: truncateExcerpt(
                        post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")
                      ),
                    }}
                  ></p>
                </div>
                <Link href={`/wordpress-tutorials/${post.slug}`}>
                  <span className="text-emerald-400 font-semibold">
                    Read more
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {!loading && (
        <div className="mt-10 flex justify-between items-center">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
