import type { MetadataRoute } from "next";

/*--------------------------------------------------------------------------
  robots.txt の生成

  このファイルを置くだけで /robots.txt が自動生成される（Next.js App Router）。
  2026-08時点では robots.txt が存在せず404だった。

  【方針】
  公開サイトなので全ページをクロール許可する。
  除外しているのは /api 配下のみ（microCMS のプレビュー等、
  検索結果に出す意味が無いエンドポイントのため）。

  sitemap の場所をここで明示しておくと、Search Console へ登録しなくても
  クローラーが sitemap.xml を見つけられる。
--------------------------------------------------------------------------*/

const BASE_URL = "https://www.hiyoku.co.jp";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
