"use client";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getCMSImageUrl } from "@/utils/imageUtils";
import FallbackImage from "@/components/shared/FallbackImage";
import "swiper/css";
import "swiper/css/pagination";

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<\/?[^>]+(>|$)/g, "");
};

const fixImagePath = (path) => {
  return getCMSImageUrl(path);
};

const FeatureBlog = ({ initialBlogs }) => {
  const processedApiBlogs = (initialBlogs || []).map((blog) => ({
    ...blog,
    content:
      blog.excerpt ?? stripHtml(blog.content?.rendered || blog.content || ""),
    featuredImage: fixImagePath(blog.featuredImage),
    date: blog.created_at || "Unknown Date",
  }));

  const stripHTML = (html) => {
    if (typeof document === "undefined") return html;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const featuredBlogFiltered = processedApiBlogs.filter(
    (blog) => blog.featured === true || blog.featured === undefined
  );

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="swiper !pb-20 md:!px-6"
      >
        {featuredBlogFiltered.length > 0 ? (
          featuredBlogFiltered.slice(0, 3).map((blogItem, index) => {
            const contentPreview = blogItem.content
              ? stripHTML(blogItem.content).slice(0, 120)
              : "";

            return (
              <SwiperSlide
                key={`${blogItem.slug || blogItem.id || "blog"}-${index}`}
              >
                <article>
                  <div className="grid grid-cols-2 items-center gap-12 max-md:grid-cols-1 max-md:gap-y-5">
                    <div className="relative h-[450px] w-full overflow-hidden rounded-xl xl:min-h-[330px]">
                      <FallbackImage
                        src={
                          blogItem.featuredImage ||
                          "/images/blog/blog-fallback-img.webp"
                        }
                        alt={blogItem.title || "Blog image"}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center"
                        priority={index === 0}
                      />
                    </div>
                    <div>
                      <Link href={`/blog/${blogItem.slug}`} className="block">
                        <h3 className="mb-3 font-semibold leading-[1.33]">
                          {stripHTML(blogItem.title || "")}
                        </h3>
                      </Link>
                      <div className="mb-4 flex items-center gap-x-2">
                        <p>{new Date(blogItem.date).toLocaleDateString()}</p>
                      </div>
                      <ReactMarkdown className="mb-6">
                        {contentPreview}
                      </ReactMarkdown>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            );
          })
        ) : (
          <div>No featured blogs available</div>
        )}
      </Swiper>
    </div>
  );
};

export default FeatureBlog;
