import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gautam Bansal",
  description:
    "Gautam Bansal is a React Developer, Blockchain Enthusiast, Freelancer. He is a 3rd year student at CGC Landran. He is proefficient in frontend technologies like React, NextJS, TailwindCSS, etc.",
  keywords:
    "Gautam Bansal, Gautam, Bansal, React Developer, Blockchain Enthusiast, Freelancer, CGC Landran, React, NextJS, TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth snap-mandatory snap-y">
      <body className={`${inter.className} select-none`}>{children}</body>
    </html>
  );
}
