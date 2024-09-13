/** @type {import('next-sitemap').IConfig} */

const fetch = require("node-fetch");

const NEW_SITE_URL = "https://www.fixdemonium.com";
const OLD_SITE_URL = "https://wrdprssifix.com";

// Function to fetch dynamic blog post routes
async function fetchBlogPosts() {
  try {
    const res = await fetch(`${OLD_SITE_URL}/wp-json/wp/v2/posts?per_page=100`);
    const posts = await res.json();
    return posts.map((post) => `/wordpress-tutorials/${post.slug}`);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

module.exports = {
  siteUrl: NEW_SITE_URL,
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404", "/500"], // Exclude specific paths
  transform: async (config, url) => {
    return {
      loc: url,
      changefreq: config.changefreq,
      priority: url === config.siteUrl ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const dynamicPaths = await fetchBlogPosts();
    return dynamicPaths.map((url) => ({
      loc: url,
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};
