import FeatureBlog from "@/components/blogs/FeatureBlog";
import RecentNews from "@/components/blogs/RecentNews";
import Footer from "@/components/footer/Footer";
import NewsLetter from "@/components/shared/NewsLetter";
import PageHero from "@/components/shared/PageHero";
import { getAllBlogs, toBlogSummary } from "@/lib/blogs";

export const metadata = {
  title: "Blog | Daiki Media",
  description:
    "Explore the latest blogs and articles from Daiki Media — SEO, digital marketing, and growth insights.",
  keywords:
    "Daiki Media, blogs, SEO, digital marketing, content, articles, updates",
  alternates: {
    canonical: "https://www.daikimedia.com/blog",
  },
};
export const revalidate = 3600;
export default async function Blog() {
  // Fetch once on the server (cached/ISR via lib/blogs) and hand SUMMARIES to
  // the client widgets as initial state — this removes the client-side fetch
  // waterfall + loading spinners that made this page feel slow, and keeps the
  // browser payload tiny (full content stays server-side).
  const initialBlogs = (await getAllBlogs()).map(toBlogSummary);

  return (
    <>
      <main>
        <PageHero subtitle="OUR BLOG" title="Recent Blogs <br/> By Daiki Media" />
        <FeatureBlog initialBlogs={initialBlogs} />
        <RecentNews initialBlogs={initialBlogs} />
        <NewsLetter />
      </main>
      <Footer />
    </>
  );
}
