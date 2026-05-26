"use client";
import { useState, useEffect, useMemo } from "react";
import Pagination from "../shared/Pagination";
import BlogItems from "./BlogItems";
import { getCMSImageUrl } from "@/utils/imageUtils";

const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<\/?[^>]+(>|$)/g, "");
};

const processBlogs = (blogs) =>
  (blogs || []).map((blog) => ({
    ...blog,
    // Prefer the server-provided excerpt; fall back to stripping content for
    // the client-fetch path.
    content: blog.excerpt ?? stripHtml(blog.content?.rendered || blog.content || ""),
    featuredImage: getCMSImageUrl(blog.featuredImage),
    date: blog.created_at || "Unknown Creator",
  }));

const RecentNews = ({ initialBlogs = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rawBlogs, setRawBlogs] = useState(initialBlogs);
  // Only show a spinner if we arrived without server-provided data.
  const [isLoading, setIsLoading] = useState(initialBlogs.length === 0);
  const itemsPerPage = 12;

  useEffect(() => {
    // Server already supplied the data — skip the client fetch entirely.
    if (initialBlogs.length > 0) return;

    let cancelled = false;
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://cms.daikimedia.com/api/blogs");
        const apiBlogs = response.ok ? await response.json() : [];
        if (!cancelled) setRawBlogs(Array.isArray(apiBlogs) ? apiBlogs : []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        if (!cancelled) setRawBlogs([]);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    fetchBlogs();
    return () => {
      cancelled = true;
    };
  }, [initialBlogs.length]);

  const featureBlog = useMemo(() => processBlogs(rawBlogs), [rawBlogs]);

  const paginationData = useMemo(() => {
    const totalPage = Math.ceil(featureBlog.length / itemsPerPage);

    const paginateData = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return featureBlog.slice(startIndex, endIndex);
    };

    return {
      totalPage,
      currentPageData: paginateData(),
    };
  }, [featureBlog, currentPage, itemsPerPage]);

  const goToNextPage = () => {
    if (currentPage < paginationData.totalPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const paginateFunction = {
    totalPage: paginationData.totalPage,
    currentPage,
    setCurrentPage,
    goToNextPage,
    goToPreviousPage,
  };

  return (
    <section className="relative py-20 max-md:py-20">
      <div className="absolute left-1/2 top-20 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative mb-16">
        <div className="mx-auto mb-16 max-w-[550px] text-center">
          <p className="section-tagline text-gray-900">
            Stay updated with the latest trends, news, and insights from the
            world of Daiki Media.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900">
            Our Recent News & Insights
          </h2>
        </div>
        <div className="relative z-10">
          {isLoading ? (
            <div className="flex justify-center items-center py-10">
              <p className="text-lg text-gray-600">Loading...</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
              {paginationData.currentPageData.map((blog) => (
                <BlogItems
                  key={blog.id}
                  id={blog.id}
                  slug={blog.slug}
                  blogData={blog}
                  content={blog.content}
                  date={blog.date}
                  thumbnail={blog.featuredImage}
                  status={blog.categories}
                  title={blog.title || "Untitled"}
                  column={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Pagination paginateFunction={paginateFunction} />
    </section>
  );
};

export default RecentNews;
