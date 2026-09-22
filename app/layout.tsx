import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-newsreader",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedSpace AI | Clinical Intelligence & Healthcare AI Platform",
  description:
    "MedSpace AI is a healthcare technology platform connecting clinical data, patient information and medical devices through a governed clinical knowledge graph. Five products for documentation, monitoring, operations, patient engagement and enterprise intelligence.",
  openGraph: {
    title: "MedSpace AI | Clinical Intelligence & Healthcare AI Platform",
    description:
      "Healthcare technology platform connecting clinical data through a governed knowledge graph. Clinical documentation, remote monitoring, clinic operations and enterprise intelligence.",
    url: "https://medspace.ai",
    siteName: "MedSpace AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedSpace AI | Clinical Intelligence & Healthcare AI Platform",
    description:
      "Healthcare technology platform connecting clinical data through a governed knowledge graph.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://medspace.ai",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakarta.variable} ${spaceMono.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface-porcelain font-body text-on-surface antialiased selection:bg-secondary-container selection:text-forest-deep">
        <JsonLd />
        <Header />
        <main className="w-full pt-28 bg-surface-porcelain">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
