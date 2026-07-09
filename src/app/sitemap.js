import { getAllBlogs } from "@/lib/blogs";

async function getServiceRoutes() {
  try {
    const serviceData = await import("../data/singleServiceData.json");
    const { SingleServiceData } = serviceData.default || {
      SingleServiceData: [],
    };
    return SingleServiceData.map((service) => ({
      slug: service.slug,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error importing service data:", error);
    return [];
  }
}

async function getAuthorRoutes() {
  try {
    const authorData = await import("../data/singleAuthor.json");
    const authors = Array.isArray(authorData.default)
      ? authorData.default
      : [authorData.default];
    return authors.map((author) => ({
      slug: author.slug || author.id,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error importing author data:", error);
    return [];
  }
}

async function getCaseStudyRoutes() {
  try {
    const caseStudyData = await import("../data/caseStudiesData.json");
    const { caseStudies } = caseStudyData.default || {
      caseStudies: [],
    };
    return caseStudies.map((caseStudy) => ({
      slug: caseStudy.slug,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error importing case study data:", error);
    return [];
  }
}

export default async function sitemap() {
  const baseUrl = "https://www.daikimedia.com";
  const date = new Date();

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: date,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: date,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: date,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: date,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/our-seo-results`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/what-is-seo-company`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/who-is-best-seo-company`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seo-guide-for-managers`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-marketing-tools`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seo-services`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/local-seo-agency-malaysia`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/top-seo-agencies`,
      lastModified: date,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const apiBlogs = await getAllBlogs();

  const blogRoutes = apiBlogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.updated_at || blog.date || date,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const services = await getServiceRoutes();
   // showing full site map for services
  // const serviceRoutes = services.map((service) => ({
    //   url: `${baseUrl}/${service.slug}`,
    //   lastModified: service.lastModified,
    //   changeFrequency: service.changeFrequency,
    //   priority: service.priority,
    // }));
  // Exclude these specific service URLs from sitemap

  
  const excludedSlugs = ['web-development', 'copywriting-services'];
  const serviceRoutes = services
    .filter((service) => !excludedSlugs.includes(service.slug))
    .map((service) => ({
      url: `${baseUrl}/${service.slug}`,
      lastModified: service.lastModified,
      changeFrequency: service.changeFrequency,
      priority: service.priority,
    }));

  const authors = await getAuthorRoutes();
  const authorRoutes = authors.map((author) => ({
    url: `${baseUrl}/author/${author.slug}`,
    lastModified: author.lastModified,
    changeFrequency: author.changeFrequency,
    priority: author.priority,
  }));

  const caseStudies = await getCaseStudyRoutes();
  const caseStudyRoutes = caseStudies.map((caseStudy) => ({
    url: `${baseUrl}/case-studies/${caseStudy.slug}`,
    lastModified: caseStudy.lastModified,
    changeFrequency: caseStudy.changeFrequency,
    priority: caseStudy.priority,
  }));

  return [...staticRoutes, ...blogRoutes, ...serviceRoutes, ...authorRoutes, ...caseStudyRoutes];
}
