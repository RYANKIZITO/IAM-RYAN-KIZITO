import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ryankizito.com"),
  title: {
    default: "Ryan Kizito | Full-Stack Software Developer",
    template: "%s | Ryan Kizito",
  },
  description:
    "Ryan Kizito builds scalable websites, SaaS platforms, dashboards, school systems, booking platforms, payment integrations, and AI-powered business automation systems.",
  keywords: [
    "Ryan Kizito",
    "full-stack developer",
    "business software developer",
    "Next.js developer",
    "SaaS developer",
    "school management systems",
    "LMS development",
    "business automation",
  ],
  authors: [{ name: "Ryan Kizito" }],
  creator: "Ryan Kizito",
  openGraph: {
    title: "Ryan Kizito | Full-Stack Software Developer",
    description:
      "Modern web systems, SaaS platforms, dashboards, payment integrations, and AI-powered business automation for growing organizations.",
    url: "https://ryankizito.com",
    siteName: "Ryan Kizito Portfolio",
    images: [
      {
        url: "/ryan-profile.png",
        width: 412,
        height: 606,
        alt: "Ryan Kizito",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Kizito | Full-Stack Software Developer",
    description:
      "Scalable digital platforms, business systems, dashboards, and automation tools.",
    images: ["/ryan-profile.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
