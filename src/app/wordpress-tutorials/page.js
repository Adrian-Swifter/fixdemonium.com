"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function WordPressTutorials() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async (page) => {
      const res = await fetch(
        `https://wrdprssifix.com/wp-json/wp/v2/posts?page=${page}&per_page=10`
      );
      const data = await res.json();
      const total = res.headers.get("X-WP-TotalPages"); // Fetch total number of pages from headers

      setPosts(data);
      setTotalPages(total ? parseInt(total, 10) : 1);
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

  return (
    <div className="container mx-auto">
      <h1>WordPress Tutorials</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/wordpress-tutorials/${post.slug}`}>
              {post.title.rendered}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
