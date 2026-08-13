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

/*--------------------------------------------------------------------------
  サイト共通のメタデータ

  【なぜ変更したか】
  従来は title / description がここに1組あるだけで、全ページが
  「hiyoku合同会社」「hiyokuCompany」という同じ値を返していた。
  検索エンジンは title / description を「そのページが何のページか」を
  判断する最大の手がかりに使うため、全ページ同一だと個別のクエリで
  上位表示されない。実際、2026-08時点で検索流入はほぼゼロだった。

  title に template を持たせておくと、各ページで
    export const metadata = { title: "エンジニア研修の助成金活用" }
  と書くだけで「エンジニア研修の助成金活用 | hiyoku合同会社」に展開される。
--------------------------------------------------------------------------*/
export const metadata: Metadata = {
  // 相対パスを絶対URLへ解決する基準。canonical と OGP画像の生成に必須。
  // apex(hiyoku.co.jp)は www へ307リダイレクトされるので、正規ホストは www 側。
  metadataBase: new URL("https://www.hiyoku.co.jp"),

  title: {
    // 各ページの title をこの形に展開する
    template: "%s | hiyoku合同会社",
    // トップページ用のフォールバック。
    // src/app/page.tsx は 'use client' のため metadata を export できず、
    // トップだけはこの default が使われる。
    default: "hiyoku合同会社 | 企業向けエンジニア育成研修（福岡）",
  },

  description:
    "hiyoku合同会社は、企業のIT人材育成を支援するエンジニア育成研修を提供しています。各種助成金に対応し、訓練の実施から出席簿・実施報告など必要書類のご用意までサポートします。",

  // 検索結果には出ないが、SNSやチャットにURLを貼ったときの見え方を決める。
  // 各ページで title を上書きすると openGraph.title も自動で追随する。
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "hiyoku合同会社",
    url: "https://www.hiyoku.co.jp",
  },

  // 同一内容が www / apex の両方で拾われる事故を防ぐ。
  alternates: {
    canonical: "/",
  },
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
