import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { AttributionCapture } from "@/components/attribution-capture";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // The apex serves directly rather than redirecting to www, because Apple
  // doesn't follow redirects when fetching the app-site-association file. Both
  // hosts answer, so declare the apex as canonical.
  metadataBase: new URL("https://synemaapp.com"),
  alternates: {
    canonical: "/",
  },
  title: "Synema – Find a movie together",
  description:
    "Synema is an upcoming app for choosing a movie together. Each person swipes privately, and shared likes become matches. Join the waitlist for launch.",
  openGraph: {
    title: "An upcoming app for choosing a movie together",
    description:
      "Swipe on your own phone. Shared likes become matches. Public launch is still ahead — join the waitlist.",
    url: "/",
    type: "website",
    siteName: "Synema",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synema",
    description:
      "Join the waitlist for Synema. It helps the people you're watching with settle on a movie.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cinema text-text">
        <AttributionCapture />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
