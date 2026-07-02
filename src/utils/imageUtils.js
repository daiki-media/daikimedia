export const cleanImagePath = (imagePath) => {
  if (!imagePath) return "";

  const cleanPath = imagePath.replace(/\\/g, "/");

  return cleanPath.replace(/^\/+/, "");
};

export const getCMSImageUrl = (
  imagePath,
  fallbackPath = "/images/blog/blog-fallback-img.webp"
) => {
  if (!imagePath) return fallbackPath;

  const cleanPath = cleanImagePath(imagePath);
  return `https://cms.daikimedia.com/${cleanPath}`;
};

export const isCMSImage = (url) => {
  return url && url.includes("cms.daikimedia.com");
};

export const getFallbackImageUrl = (originalUrl) => {
  if (isCMSImage(originalUrl)) {
    return "/images/blog/blog-fallback-img.webp";
  }

  return originalUrl;
};
