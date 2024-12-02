// components/SEO.tsx
import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string; // Optional image for Open Graph and Twitter cards
  url?: string; // URL for the page (important for OG tags)
  author?: string; // Author meta tag (optional)
  twitterCardType?: "summary" | "summary_large_image" | "app" | "player"; // Twitter card type
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "",
  image = "",
  url = "",
  author = "",
  twitterCardType = "summary_large_image",
}) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {author && <meta name="author" content={author} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || ""} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="EndoSmile Dental Care" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:creator" content="@EndoSmileDental" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url || ""} />
    </Head>
  );
};

export default SEO;
