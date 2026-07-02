const ReviewSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Daiki Media",
        "url": "https://www.daikimedia.com",
        "image": "https://www.daikimedia.com/logo.jpg",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jalan Ara, SD 7/3d, Bandar Sri Damansara",
            "addressLocality": "Kuala Lumpur",
            "addressRegion": "KL",
            "postalCode": "52200",
            "addressCountry": "MY" 
        },
        "telephone": "601114850067",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "10"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Oy Yong Hui En" },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "We worked with Daiki Media for our SEO needs and had a good experience with them. The team was very responsive and always ready to help with any questions or concerns. They provided useful insights that helped improve our online presence in just a few months. We highly recommend their services!",
                "datePublished": "2024-01-30"
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Favour Eugene" },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "I had the pleasure of working with an SEO agency in Malaysia, and the results were impressive. Their expert team boosted my website's search engine ranking and organic traffic in just weeks. They offer tailored SEO strategies and stay updated with the latest trends.",
                "datePublished": "2024-01-30"
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Hauz Capital" },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "We hired this SEO agency in Kuala Lumpur to improve our online visibility, and the results have been fantastic! They offered a complete strategy, from on-page SEO to building good quality backlinks that actually made a difference.",
                "datePublished": "2023-09-30"
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Bilal Rawn" },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "I recently hired this SEO agency for its digital marketing expertise and I am extremely impressed with the results. They have a deep understanding of search marketing and SEO and have helped my business achieve higher search engine rankings.",
                "datePublished": "2022-06-30"
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Tehmina Bukhari" },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "This team is simply the best when it comes to digital marketing and search engine optimization. Their expertise in SEO has helped my business stay ahead of the competition and reach a wider audience. I couldn't be happier with their results and highly recommend them to any business looking to improve their online marketing efforts.",
                "datePublished": "2022-06-30"
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Babar Hussain" },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "I have been working with this SEO agency for several months now and I am beyond impressed with their digital marketing and search engine optimization skills. Their team is knowledgeable, friendly, and always available to answer any questions.",
                "datePublished": "2022-06-30"
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Muhammad Adnan Rana" },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "If you're looking for a top-notch SEO agency that specializes in digital marketing and search marketing, look no further. This team is professional, knowledgeable, and always delivers results. I have seen a significant increase in my online visibility.",
                "datePublished": "2022-06-30"
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Faizatul Nazifah" },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "Got some amazing advice from them on how to improve my website.. Definitely one of the best SEO agency in Malaysia!",
                "datePublished": "2023-09-30"
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "MD. Shafayatul Haque" },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "Daiki Media has made my business smooth. They are great with SEO and WordPress development which is far better than any other service provider. They provide website with 90+ google page speed score, which makes it easier to rank the website on Google.",
                "datePublished": "2022-06-30"
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Vicknes Mohan" },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": "Recently I requested a design for my company COO's farewell & I need it on the very last minute to complete the design together print it on a photo frame style. Few hours later on the same day, the team completed the final design after minor changes and I'm able to present it on time. Truly remarkable services and extra mile commitments despite completing it at very late night.",
                "datePublished": "2019-06-30"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default ReviewSchema;