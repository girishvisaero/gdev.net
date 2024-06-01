import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Girish Chaudhari",
  description: "Developer, writer, and creator.",
  authors: [
    { name: "Girish Chaudhari", url: new URL("https://net-blog.vercel.app") },
  ],
  applicationName: "gdev.net",
  creator: "Girish Chaudhari",
  openGraph: {
    title: "Girish Chaudhari",
    description: "Developer, writer, and creator.",
    url: "https://net-blog.vercel.app",
    siteName: "Girish Chaudhari",
    locale: "en_US",
    type: "website",
  },
  icons: [
    {
      rel: "icon",
      url: "/avatar.png",
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Girish Chaudhari",
    card: "summary_large_image",
  },
  verification: {
    // google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    // yandex: '14d2e73487fa6c71',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
