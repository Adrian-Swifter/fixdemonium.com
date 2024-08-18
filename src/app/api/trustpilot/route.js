import axios from "axios";
import * as cheerio from "cheerio";

export async function GET(request) {
  try {
    const response = await axios.get(
      "https://www.trustpilot.com/review/wrdprssifix.com"
    );
    const html = response.data;
    const $ = cheerio.load(html);

    const reviews = [];

    $(".styles_cardWrapper__LcCPA").each((index, element) => {
      const title = $(element)
        .find("h2.typography_heading-s__f7029")
        .text()
        .trim();
      const text = $(element).find("p.typography_body-l__KUYFJ").text().trim();
      const rating = parseInt(
        $(element)
          .find("div.star-rating_starRating__4rrcf img")
          .attr("alt")
          .replace(/[^0-9]/g, ""),
        10
      );
      const date = $(element).find("time").attr("datetime").trim();
      const avatarElement = $(element)
        .find(".avatar_imageWrapper__8wdWb img")
        .filter((i, el) => {
          return $(el)
            .attr("src")
            .startsWith("https://user-images.trustpilot.com/");
        });
      const avatar = avatarElement.attr("src") || null;
      const name = $(element)
        .find(".typography_heading-xxs__QKBS8")
        .text()
        .trim();
      const location = $(element)
        .find(".styles_detailsIcon__Fo_ua span")
        .text()
        .trim();

      reviews.push({ title, text, rating, date, avatar, name, location });
    });

    return new Response(JSON.stringify({ reviews }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching TrustPilot reviews:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch reviews" }), {
      status: 500,
    });
  }
}
