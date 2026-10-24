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
    default: "Endo Smile Dental Care | Dentist in Greater Noida West",
    template: "%s | Endo Smile Dental Care"
  },
  description:
    "Dental consultation, preventive care, restorative dentistry, endodontic treatment, orthodontics, and pediatric dental services in Greater Noida West.",
  keywords: ["dentist greater noida", "root canal greater noida", "dental clinic greater noida west", "dentist near me", "endodontist greater noida", "smile designing", "cosmetic dentistry", "dr sumit dinkar", "ended smile iteda"],
  authors: [{ name: "Dr Sumit Dinkar" }],
  creator: "Endo Smile Dental Care",
  publisher: "Endo Smile Dental Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Endo Smile Dental Care | Dentist in Greater Noida West",
    description: "Dental consultation, preventive care, restorative dentistry, endodontic treatment, orthodontics, and pediatric dental services in Greater Noida West.",
    url: 'https://endosmiledentalcare.com',
    siteName: 'Endo Smile Dental Care',
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
