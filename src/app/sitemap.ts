import type { MetadataRoute } from "next";

/*--------------------------------------------------------------------------
  sitemap.xml の生成

  このファイルを置くだけで /sitemap.xml が自動生成される（Next.js App Router）。
  2026-08時点では sitemap.xml も robots.txt も存在せず、両方404だった。

  【なぜ必要か】
  サイトマップが無くてもクロールはされるが、
  ・どのURLが存在するかをGoogleへ明示できる
  ・Search Console に登録してインデックス状況を追える
  という利点がある。特に被リンクが少ないサイトでは発見される速度が変わる。

  【NEWSの個別記事について】
  記事は src/data/news.ts に持っているので、そこから読んで自動で全件載せている。
  記事を追加すれば、次のデプロイでサイトマップにも自動で入る。
--------------------------------------------------------------------------*/
import { newsArticles } from "@/data/news";

// 正規ホスト。apex(hiyoku.co.jp)は www へ307リダイレクトされるため www 側を使う。
const BASE_URL = "https://www.hiyoku.co.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  // ビルド時刻を最終更新日として使う。
  // 記事のように更新日が個別に取れるものが増えたら、ここを差し替える。
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      // 集客の主戦場なので優先度を他より高くしている
      url: `${BASE_URL}/service`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      // 記事が増えるページなので更新頻度を高めに申告する
      url: `${BASE_URL}/news`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/recruit`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // お知らせの個別記事。記事ごとの更新日を lastModified に使えるので、
    // ビルド時刻より正確な情報をクローラーへ渡せる。
    ...newsArticles.map((article) => ({
      url: `${BASE_URL}/news/${article.id}`,
      lastModified: new Date(article.revisedAt || article.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
