import "@/scss/theme.scss";
import PropTypes from "prop-types";
import { cn } from "@/utils/cn";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import OrganizationSchema from "@/components/schema/OrganizationSchema";
import WebSiteSchema from "@/components/schema/WebSiteSchema";
import DynamicBreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import PrimaryNavbar from "@/components/navbar/PrimaryNavbar";
import ReviewSchema from "@/components/schema/ReviewSchema";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ['system-ui', 'arial', 'sans-serif'],
  adjustFontFallback: true,
});

const jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta_sans",
  preload: true,
  fallback: ['system-ui', 'arial', 'sans-serif'],
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
  fallback: ['system-ui', 'arial', 'sans-serif'],
  adjustFontFallback: true,
});

export const metadata = {
  metadataBase: new URL("https://www.daikimedia.com"),
  title: "Daiki Media | Expert SEO & Website Development Agency",
  description: "Connect with the best graphic design agencies...",
  verification: {
    google: "EIBnMq71KKUDT895qyPc5L_RMaDrmBpUG8pgX3FO6N4",
  },
  openGraph: {
    title: "Daiki Media",
    description: "Daiki Media provides expert SEO...",
    url: "https://www.daikimedia.com/",
    type: "website",
    images: ["https://www.daikimedia.com/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const criticalCSS = `
  header, nav, .navbar { height: 80px; }
  body { padding-top: 80px; }
  img, video { aspect-ratio: attr(width) / attr(height); }
  .hero-section { min-height: 50vh; }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative overflow-x-hidden bg-white text-base antialiased dark:bg-dark-300",
          inter.variable,
          jakarta_sans.variable,
          playfair.variable
        )}
        suppressHydrationWarning={true}
      >
        {/* Manual font preloads: Next 15.5 emits an empty next-font-manifest,
            so next/font's automatic preload links never render. These hashes
            are content-based and only change if the font files or next/font
            version change — re-check them after upgrading Next (see
            .next/static/media/*.p.woff2). */}
        <link
          rel="preload"
          href="/_next/static/media/e4af272ccee01ff0-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/636a5ac981f94f8b-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/eaead17c7dbfcd5d-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NZZ2849"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <PrimaryNavbar />
        <DynamicBreadcrumbSchema />
        {children}
        
        <ReviewSchema />
        <OrganizationSchema />
        <WebSiteSchema />
        <WhatsAppFloat />

        {/* Analytics (GTM + Clarity) load on first user interaction, with a
            late fallback after the page is fully loaded and idle. Keeps the
            ~1.3s of third-party main-thread work out of the critical load. */}
        <Script
          id="deferred-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var loaded = false;
                var events = ['pointerdown','keydown','touchstart','scroll'];
                function loadAnalytics(){
                  if (loaded) return;
                  loaded = true;
                  events.forEach(function(e){ window.removeEventListener(e, loadAnalytics, {passive:true}); });

                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
                  var g = document.createElement('script');
                  g.async = true;
                  g.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-NZZ2849';
                  document.head.appendChild(g);

                  window.clarity = window.clarity || function(){ (window.clarity.q = window.clarity.q || []).push(arguments); };
                  var c = document.createElement('script');
                  c.async = true;
                  c.src = 'https://www.clarity.ms/tag/priqspzydx';
                  document.head.appendChild(c);
                }
                events.forEach(function(e){ window.addEventListener(e, loadAnalytics, {passive:true}); });
                if (document.readyState === 'complete') {
                  setTimeout(loadAnalytics, 12000);
                } else {
                  window.addEventListener('load', function(){ setTimeout(loadAnalytics, 12000); });
                }
              })();
            `
          }}
        />
      </body>
    </html>
  );
}

RootLayout.propTypes = { children: PropTypes.node };