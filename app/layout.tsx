import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

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
  title: "Abdur Rehman",
  description:
    "Welcome to my personal website, where I showcase my skills, experience, and expertise. Feel free to explore my portfolio, and don’t hesitate to reach out for collaboration or to hire me directly through this platform.",
  icons: {
    icon: [
      "/favicon.ico?v=4",
      "/favicon-16x16.png?v=4",
      "/favicon-32x32.png?v=4",
    ],
    apple: ["/apple-touch-icon.png?v=4"],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png?v=4",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png?v=4",
      },
    ],
  },
  manifest: "/site.webmanifest?v=4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
