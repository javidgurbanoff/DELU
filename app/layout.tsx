import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DELU — Campus Marketplace for Verified Students",
    template: "%s | ADEL",
  },
  description:
    "Discover verified essentials, book peer services, and grab local bites — all within the ADEL student community. The premier marketplace exclusive to verified students.",
  keywords: [
    "student marketplace",
    "campus exchange",
    "university",
    "verified students",
    "textbooks",
    "services",
    "food",
  ],
};

import ToastProvider from "./components/shared/ToastProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} h-full`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-background text-on-background">
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
