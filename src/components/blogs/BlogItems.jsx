"use client";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";
import FallbackImage from "@/components/shared/FallbackImage";

const BlogItems = ({ slug, blogData, content, column, thumbnail }) => {
  const stripHTML = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText;
  };

  const contentPreview =
    typeof content === "object" && content !== null && content.rendered
      ? stripHTML(content.rendered).slice(0, 120)
      : content.slice(0, 120);

  const title =
    typeof blogData.title === "object" &&
    blogData.title !== null &&
    blogData.title.rendered
      ? stripHTML(blogData.title.rendered)
      : blogData.title;

  const imageUrl =
    thumbnail && thumbnail !== ""
      ? thumbnail
      : "/images/blog/blog-fallback-img.webp";

  return column ? (
    <article className="rounded-medium bg-white p-2.5">
      <div className="rounded-2xl border p-6 ease-in-out max-md:px-4">
        <div className="space-y-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>{dayjs(blogData.date).format("MMMM D, YYYY")}</p>
          </div>
          <div className="relative mb-6 h-[200px] w-full overflow-hidden rounded-lg shadow-md">
            <FallbackImage
              src={imageUrl}
              alt={title || "Blog image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="space-y-4">
            <div className="block text-2xl font-semibold text-gray-800 dark:text-white transition-all duration-300 ease-in-out">
              {title}
            </div>

            <ReactMarkdown className="text-gray-700 dark:text-gray-300">
              {contentPreview}
            </ReactMarkdown>
          </div>
          <div className="mt-6">
            <Link
              href={`/blog/${slug}`}
              className="inline-block font-semibold text-sm"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </article>
  ) : (
    <article className="rounded-medium p-2.5 shadow-nav">
      <div className="rounded border border-dashed border-gray-500 p-6 max-md:p-4">
        <Image
          src={thumbnail || "/images/blog/blog-fallback-img.webp"}
          alt="Blog Image"
          className="mb-6 w-full rounded-md"
          width={389}
          height={189}
        />
        <div>
          <Link href={`/tags/${blogData.tags}`} className="badge">
            {blogData.tags}
          </Link>
          <Link href={`/blog/${slug}`} className="block">
            <h3 className="mb-3 font-semibold leading-[1.33]">{title}</h3>
          </Link>
          <div className="mb-4 flex items-center gap-x-2 ">
            <p>{blogData.author}</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle
                  cx="2.5"
                  cy="3"
                  r="2.5"
                  fill=""
                  className="fill-[#D8DBD0] dark:fill-[#3B3C39]"
                />
              </svg>
            </span>
            <p>{blogData.date}</p>
          </div>
          <ReactMarkdown>{content.slice(0, 70)}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default BlogItems;
