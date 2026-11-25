import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guru International | Real Estate Finance & Agro-Commodity Trading",
  description:
    "Corporate advisory for Industrial & Commercial Real Estate Financing, Government Tender & Possession Matters, and Bulk Agricultural Commodity Trading (Cumin Seeds, Black Gram, Tuwar).",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#F7F6F2] text-[#1A1A1A] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
