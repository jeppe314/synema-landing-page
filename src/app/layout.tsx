import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synema – Find a movie together",
  description:
    "Find the perfect movie together by swiping with friends. Synema helps groups stop scrolling and start watching.",
  openGraph: {
    title: "Synema",
    description: "Stop scrolling. Start watching.",
    type: "website",
    siteName: "Synema",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synema",
    description: "Stop scrolling. Start watching.",
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
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
