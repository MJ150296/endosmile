'use client';

import Script from 'next/script';

const StructuredData = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "EndoSmile Dental Care",
    "description": "Top rated dental clinic in Greater Noida West offering painless Root Canal Treatment, Smile Designing, Cosmetic Dentistry by Dr Sumit Dinkar.",
    "url": "https://endosmiledentalcare.com",
    "telephone": "+91 83688 47831",
    "email": "endosmiledentalcare@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Iteda, Greater Noida West",
      "addressLocality": "Greater Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4744,
      "longitude": 77.5040
    },
    "openingHours": [
      "Mo 10:00-13:00, 17:00-20:00",
      "Tu 10:00-13:00, 17:00-20:00",
      "We 10:00-13:00, 17:00-20:00",
      "Th 10:00-13:00, 17:00-20:00",
      "Fr 10:00-13:00, 17:00-20:00",
      "Sa 10:00-13:00, 17:00-20:00"
    ],
    "priceRange": "₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127",
      "bestRating": "5"
    },
    "medicalSpecialty": [
      "Endodontics",
      "Cosmetic Dentistry",
      "General Dentistry",
      "Orthodontics"
    ],
    "practitioner": {
      "@type": "Person",
      "name": "Dr. Sumit Dinkar",
      "description": "Micro Endodontist and Aesthetic Dentist",
      "url": "https://endosmiledentalcare.com/about"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61570948870281",
      "https://www.instagram.com/sumit_dinkar24/"
    ],
    "areaServed": "Greater Noida, Noida Extension, Iteda, Bisrakh, Ghaziabad"
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default StructuredData;