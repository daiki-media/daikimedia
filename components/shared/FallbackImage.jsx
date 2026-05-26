"use client";
import { useState } from "react";
import Image from "next/image";

const FallbackImage = ({
  src,
  alt,
  fallbackSrc = "/images/blog/blog-fallback-img.webp",
  className = "",
  width,
  height,
  fill = false,
  sizes,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  // Fill mode — optimized responsive image that covers its (positioned) parent.
  if (fill) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes={sizes || "100vw"}
        className={className}
        onError={handleError}
        {...props}
      />
    );
  }

  // Fixed-size Next.js Image
  if (width && height) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={className}
        onError={handleError}
        {...props}
      />
    );
  }

  // Regular img tag
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default FallbackImage;
