import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import Footer from "@/components/footer/Footer";
import authorData from "@/data/singleAuthor.json";

const decodeHtmlEntities = (text) => {
  if (!text) return "";
  return text.replace(/&lt;br\/&gt;/g, "<br/>").replace(/&amp;/g, "&");
};

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const authorsArray = Array.isArray(authorData) ? authorData : [authorData];
  const authorSlug = params?.slug || params?.id;

  if (!authorSlug) {
    return {
      title: "Author Not Found | Daiki Media",
      description: "The requested author could not be found.",
      alternates: {
        canonical: `https://www.daikimedia.com/author/${authorSlug}`,
      },
    };
  }

  const author = authorsArray.find(
    (a) => a.slug === authorSlug || a.id === authorSlug
  );

  if (!author) {
    return {
      title: "Author Not Found | Daiki Media",
      description: "The requested author could not be found.",
      alternates: {
        canonical: `https://www.daikimedia.com/author/${authorSlug}`,
      },
    };
  }

  return {
    title: `${author.name} - Author | Daiki Media`,
    description: author.bio
      ? decodeHtmlEntities(author.bio)
          .replace(/<[^>]*>/g, "")
          .substring(0, 160)
      : `Learn more about ${author.name}, author at Daiki Media.`,
    alternates: {
      canonical: `https://www.daikimedia.com/author/${authorSlug}`,
    },
    openGraph: {
      title: `${author.name} - Author | Daiki Media`,
      description: author.bio
        ? decodeHtmlEntities(author.bio)
            .replace(/<[^>]*>/g, "")
            .substring(0, 160)
        : `Learn more about ${author.name}, author at Daiki Media.`,
      url: `https://www.daikimedia.com/author/${authorSlug}`,
      type: "profile",
      images: author.profile_picture ? [author.profile_picture] : [],
    },
  };
}

export default function AuthorDetails({ params }) {
  const authorsArray = Array.isArray(authorData) ? authorData : [authorData];
  const authorSlug = params?.slug || params?.id;

  if (!authorSlug) {
    // Redirect to main author page if no slug provided
    redirect("/author/lukesh-pillai");
  }

  const author = authorsArray.find(
    (a) => a.slug === authorSlug || a.id === authorSlug
  );

  if (!author) {
    // Instead of showing 404, redirect to the main author page
    // This handles broken author links dynamically
    redirect("/author/lukesh-pillai");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="mt-28 py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="h-32 bg-gradient-to-r from-red-500 to-red-700 relative">
              <div className="absolute -bottom-20 left-8 md:left-12">
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {author.profile_picture ? (
                    <Image
                      src={author.profile_picture}
                      alt={author.name || "Author profile"}
                      fill
                      sizes="176px"
                      priority
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-white flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-20 w-20 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row mt-24 px-8 md:px-12">
              <div className="w-full md:w-1/3 pr-0 md:pr-8">
                <h2 className="text-3xl font-bold text-gray-800">
                  {author.name}
                </h2>
                {author.specialization && (
                  <p className="text-lg text-red-600 font-medium mt-1 mb-6">
                    {author.specialization}
                  </p>
                )}

                <div className="my-6 flex gap-4">
                  {author.social_links?.linkedin && (
                    <Link
                      href={author.social_links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-red-600 text-red-600 hover:text-white p-3 rounded-full shadow-sm transition-all duration-300"
                      aria-label="LinkedIn Profile"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </Link>
                  )}
                  {author.social_links?.twitter && (
                    <Link
                      href={author.social_links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-red-500 text-red-500 hover:text-white p-3 rounded-full shadow-sm transition-all duration-300"
                      aria-label="Twitter Profile"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>

              <div className="w-full md:w-2/3 pt-6 md:pt-0">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  About
                </h3>

                {author.bio ? (
                  <div className="prose max-w-none text-gray-700 leading-relaxed">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: decodeHtmlEntities(author.bio),
                      }}
                    ></p>
                  </div>
                ) : (
                  <p className="text-gray-500 italic">
                    No biography available for this author.
                  </p>
                )}
              </div>
            </div>

            {author.published_blogs && author.published_blogs.length > 0 ? (
              <div className="bg-gray-50 p-8 md:p-12 border-t border-gray-200 mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  Published Articles
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {author.published_blogs.map((blog, index) => {
                    const blogTitle =
                      typeof blog === "string"
                        ? blog.replace("blog/", "").replace(/-/g, " ")
                        : blog.title || "Untitled Article";

                    const blogSlug =
                      typeof blog === "string"
                        ? blog.replace("blog/", "")
                        : blog.slug || "";

                    return (
                      <Link
                        key={index}
                        href={`/blog/${blogSlug}`}
                        className="group"
                      >
                        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 h-full flex flex-col justify-between border border-gray-100 group-hover:border-red-200">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-700 mb-3 capitalize">
                              {blogTitle}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              An article by {author.name}
                            </p>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <span className="text-red-600 group-hover:text-red-800 font-medium flex items-center text-sm">
                              Read article
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
