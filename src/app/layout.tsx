import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hiyoku合同会社",
  description: "hiyokuCompany",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/icon/logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Sales Crowd アクセス解析 */}
        <Script
          id="sc_access_analysis"
          src="https://sales-crowd.jp/js/sc-web-access-analysis.js"
          data-token="2ebd64939d8df6daf1968920cb748903dc098bba47ef951050228b0f37b9a8a9"
          strategy="afterInteractive"
        />

        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
