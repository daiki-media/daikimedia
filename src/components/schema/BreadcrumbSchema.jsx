// components/schema/DynamicBreadcrumbSchema.js
"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const DynamicBreadcrumbSchema = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Remove existing breadcrumb schema if any
        const existingSchema = document.querySelector('script[data-breadcrumb-schema]');
        if (existingSchema) {
            existingSchema.remove();
        }

        // Generate breadcrumbs from current pathname
        const generateBreadcrumbs = (path) => {
            const segments = path.split('/').filter(segment => segment !== '');
            const breadcrumbs = [
                { name: 'Home', url: 'https://www.daikimedia.com' }
            ];

            let currentPath = '';
            segments.forEach((segment,) => {
                currentPath += `/${segment}`;

                // Convert URL segment to readable name
                const name = segment
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');

                breadcrumbs.push({
                    name: name,
                    url: `https://www.daikimedia.com${currentPath}`
                });
            });

            return breadcrumbs;
        };

        const breadcrumbs = generateBreadcrumbs(pathname);

        // Create schema object
        const schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": breadcrumb.name,
                "item": breadcrumb.url
            }))
        };

        // Create and inject script tag
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-breadcrumb-schema', 'true');
        script.innerHTML = JSON.stringify(schema);
        document.head.appendChild(script);

        // Cleanup function
        return () => {
            const schemaScript = document.querySelector('script[data-breadcrumb-schema]');
            if (schemaScript) {
                schemaScript.remove();
            }
        };
    }, [pathname]);

    return null; // This component doesn't render anything visible
};

export default DynamicBreadcrumbSchema;