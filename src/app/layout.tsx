import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import StructuredData from "./components/StructuredData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://endosmiledentalcare.com'),
  title: {
    default: "EndoSmile Dental Care | Dentist in Greater Noida West",
    template: "%s | EndoSmile Dental Care"
  },
  description:
    "Top rated dental clinic in Greater Noida West (Iteda). Root Canal Treatment, Smile Designing, Cosmetic Dentistry by Dr Sumit Dinkar. 5 Star Google Rating | Emergency Dental Care Open 7 Days.",
  keywords: ["dentist greater noida", "root canal greater noida", "dental clinic greater noida west", "dentist near me", "endodontist greater noida", "smile designing", "cosmetic dentistry", "dr sumit dinkar", "ended smile iteda"],
  authors: [{ name: "Dr Sumit Dinkar" }],
  creator: "EndoSmile Dental Care",
  publisher: "EndoSmile Dental Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "EndoSmile Dental Care | Dentist in Greater Noida West",
    description: "Top rated dental clinic in Greater Noida West offering Root Canal, Cosmetic Dentistry, Implants and all dental treatments.",
    url: 'https://endosmiledentalcare.com',
    siteName: 'EndoSmile Dental Care',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.png" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen overflow-hidden`}
      >
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
