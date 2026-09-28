import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PlatformProvider } from "@/components/platform-provider";
import { getAppleAppId, launchConfig } from "@/lib/launch";
import { getRequestPlatform } from "@/lib/request-platform";
import "./globals.css";

const appleAppId =
  launchConfig.ios.status === "available"
    ? getAppleAppId(launchConfig.ios.storeUrl)
    : null;

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
    "Find movies you'll actually agree on — alone or together. Available on iPhone.",
  openGraph: {
    title: "Synema – Stop scrolling. Start watching.",
    description:
      "Find movies you'll actually agree on — alone or together. Available on iPhone.",
    type: "website",
    siteName: "Synema",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synema – Stop scrolling. Start watching.",
    description:
      "Find movies you'll actually agree on — alone or together. Available on iPhone.",
  },
  ...(appleAppId ? { itunes: { appId: appleAppId } } : {}),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const platform = await getRequestPlatform();

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <body data-platform={platform} className="flex min-h-full flex-col bg-cinema text-text">
        <PlatformProvider platform={platform}>
          <Header />
          {children}
          <Footer />
        </PlatformProvider>
        <Analytics />
      </body>
    </html>
  );
}
