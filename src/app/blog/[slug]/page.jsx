import { redirect } from "next/navigation";
import Footer from "@/components/footer/Footer";
import NewsLetter from "@/components/shared/NewsLetter";
import ArticleSchema from "@/components/schema/ArticleSchema";
import BlogContent from "@/components/blogs/BlogContent";
import BlogDetailHero from "@/components/blogs/BlogDetailHero";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";
import { getAllBlogs, getBlogBySlug, getRelatedBlogs } from "@/lib/blogs";
import { getCMSImageUrl } from "@/utils/imageUtils";
import {
  decodeHtmlEntities,
  stripHtml,
  getReadingTime,
  truncate,
} from "@/utils/textUtils";
import dayjs from "dayjs";
export const revalidate = false;

const AUTHOR_HREF = "/author/lukesh-pillai";

async function getBlogData(slug) {
  const [blog, allBlogs] = await Promise.all([
    getBlogBySlug(slug),
    getAllBlogs(),
  ]);
  if (!blog) return null;

  return {
    blog,
    relatedBlogs: getRelatedBlogs(allBlogs, blog, 3),
    isApiBlog: true,
  };
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs();

  const params = blogs.map((blog) => ({ slug: blog.slug }));

  return params.filter(
    (param, index, self) =>
      index === self.findIndex((p) => p.slug === param.slug)
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getBlogData(slug);

  if (!data?.blog) {
    // Fallback metadata — the page redirects to /blog when no blog is found.
    return {
      title: "Redirecting to Blog",
      description:
        "The requested blog post could not be found. Redirecting to our blog.",
    };
  }

  const { blog } = data;

  const title = decodeHtmlEntities(blog.meta_title || blog.title || "Blog Details");

  const description = decodeHtmlEntities(
    blog.meta_description ||
      blog.description ||
      stripHtml(blog.content).substring(0, 150) ||
      "Blog post details"
  );

  const imageUrl = getCMSImageUrl(blog.featuredImage);
  const imageAlt = decodeHtmlEntities(blog.featuredImageAlt || blog.title || title);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      type: "article",
      publishedTime: blog.created_at,
      modifiedTime: blog.updated_at || blog.created_at,
      authors: [blog.author || "Daiki Media"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://www.daikimedia.com/blog/${slug}`,
    },
  };
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const data = await getBlogData(slug);

  if (!data?.blog) {
    // Instead of a 404, redirect to the main blog page.
    // This dynamically handles broken blog links from the Ahrefs report.
    redirect("/blog");
  }

  const { blog, relatedBlogs } = data;

  const getCurrentUrl = () => `https://www.daikimedia.com/blog/${slug}`;

  // ---- Derived display values ----
  const title = decodeHtmlEntities(blog.title || "Untitled Blog");

  const heroDescription =
    decodeHtmlEntities(blog.description || "") ||
    truncate(stripHtml(blog.content), 160);

  const imageUrl = getCMSImageUrl(blog.featuredImage);

  // Featured image alt: featuredImageAlt, falling back to the title.
  const featuredImageAlt =
    decodeHtmlEntities((blog.featuredImageAlt || "").trim()) || title;

  const formattedDate = blog.created_at
    ? dayjs(blog.created_at).format("MMMM D, YYYY")
    : "";

  const readTime = getReadingTime(blog.content);

  const schemaDescription = decodeHtmlEntities(
    blog.description ||
      stripHtml(blog.content).substring(0, 160) ||
      "Blog post content"
  );

  return (
    <>
      <ArticleSchema
        headline={title}
        description={schemaDescription}
        authorName={blog.author || "Daiki Media"}
        authorUrl="https://www.daikimedia.com/author"
        publisherName="Daiki Media"
        publisherLogo="https://www.daikimedia.com/logo.png"
        datePublished={blog.created_at || new Date().toISOString()}
        dateModified={
          blog.updated_at || blog.created_at || new Date().toISOString()
        }
        mainEntityUrl={getCurrentUrl()}
        imageUrl={imageUrl}
        imageWidth={1200}
        imageHeight={630}
      />

      <main className="flex flex-col">
        <BlogDetailHero
          title={title}
          category={blog.category}
          formattedDate={formattedDate}
          dateISO={blog.created_at}
          description={heroDescription}
          author={blog.author || "Daiki Media"}
          authorHref={AUTHOR_HREF}
          readTime={readTime}
          imageUrl={imageUrl}
          imageAlt={featuredImageAlt}
        />

        <article className="w-full pt-12 pb-16">
          <BlogContent content={blog.content} />
        </article>

        <RelatedBlogs blogs={relatedBlogs} />

        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}
