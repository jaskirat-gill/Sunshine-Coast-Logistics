import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunshine Coast Logistics | North America's Expedite Experts",
  description: "Reliable, fast, and secure logistics solutions across North America. We connect businesses with efficient transportation services.",
  keywords: "logistics, shipping, transportation, freight, expedite, North America, Sunshine Coast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-100 dark:bg-black`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
