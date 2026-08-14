import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/*==========================================================================
  Cloudflare Workers へデプロイするための設定（@opennextjs/cloudflare）

  【なぜ Cloudflare なのか】
  このサイトは当初 Vercel にデプロイされていたが、そのVercelアカウントが
  会社の管理下に無い状態だった。Hiyoku名義のCloudflareアカウントへ移すことで、
  ホスティングを自社で完全に管理できるようにする。

  移行できる理由:
  ・環境変数がゼロ（2026-08にmicroCMSを外して以降、process.env の参照が無い）
  ・ドメインのDNSは自社（お名前.com）で管理している
  ・記事などのデータは全てリポジトリ内にある

  【キャッシュについて】
  現時点では incrementalCache 等を設定していない（＝キャッシュ無し）。
  このサイトはページ数が9つで、ほぼ全てがビルド時に静的生成されるため、
  ランタイムでキャッシュする対象がほとんど無い。
  ISR や On-demand Revalidation を使い始めたら、ここに R2 や KV の
  キャッシュ設定を足すこと。
==========================================================================*/
export default defineCloudflareConfig({});
