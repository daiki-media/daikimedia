import "@/scss/theme.scss";
import PropTypes from "prop-types";
import { cn } from "@/utils/cn";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import GTMNoScript from "@/components/GTMNoScript";
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
  preload: false, 
  adjustFontFallback: false,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: false,
  adjustFontFallback: false,
});

export const metadata = {
  metadataBase: new URL("https://www.daikimedia.com"),
  title: "Daiki Media | Expert SEO & Website Development Agency",
  description: "Connect with the best graphic design agencies...",
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
      <head>
        <meta name="google-site-verification" content="EIBnMq71KKUDT895qyPc5L_RMaDrmBpUG8pgX3FO6N4" />
        
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        <meta property="og:title" content="Daiki Media" />
        <meta property="og:description" content="Daiki Media provides expert SEO..." />
        <meta property="og:image" content="https://www.daikimedia.com/images/logo.png" />
        <meta property="og:url" content="https://www.daikimedia.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        
        <GTMNoScript />
      </head>
      <body
        className={cn(
          "relative overflow-x-hidden bg-white text-base antialiased dark:bg-dark-300",
          inter.variable,
          jakarta_sans.variable,
          playfair.variable
        )}
        suppressHydrationWarning={true}
      >
        <PrimaryNavbar />
        <DynamicBreadcrumbSchema />
        {children}
        
        <ReviewSchema />
        <OrganizationSchema />
        <WebSiteSchema />
        <WhatsAppFloat />

        <Script
          id="gtm"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NZZ2849');
            `
          }}
        />
        
        <Script
          id="other-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "priqspzydx");
              
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              
              if (!window.fbq) {
                fbq('init', '4648082808576876');
                fbq('track', 'PageView');
              }
            `
          }}
        />
      </body>
    </html>
  );
}

RootLayout.propTypes = { children: PropTypes.node };