import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";

const varelaRound = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-varela-round",
});

export const metadata: Metadata = {
  title: "Guru International | Real Estate Finance & Bulk Agro-Commodity Trading",
  description:
    "Institutional capital advisory for commercial assets, SARFAESI possession matters, and bulk supply of verified Cumin Seeds, Black Gram, and Tuwar from Gujarat APMCs.",
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
    <html lang="en" className={`${varelaRound.variable} ${varelaRound.className} antialiased`}>
      <body className={`min-h-screen bg-[#F7F6F2] text-[#1A1A1A] flex flex-col ${varelaRound.className}`}>
        {children}
      </body>
    </html>
  );
}
