# Cloudflare への切り替え手順（フェイルオーバー用）

最終更新: 2026-08-13

## これは何か

本番サイトは Vercel で動いているが、**そのVercelアカウントが会社の管理下に無い**。
アカウントが停止・削除された場合にサイトを復旧できるよう、
Hiyoku名義の Cloudflare アカウントに同じものを**先に建てておく**ための手順書。

## 現在の状態

| | |
|---|---|
| Worker名 | `hiyoku-hp` |
| Cloudflareアカウント | `4821a0406e0a77bb48f525217666087d`（T.fujioka@hiyoku.co.jp's Account） |
| デプロイ | ✅ 済み（2026-08-13） |
| 公開URL | **無し**（`workers_dev: false`、ルート未設定） |
| 本番との内容一致 | ✅ 確認済み（可視テキストは title 以外完全一致） |

公開URLを持たせていないのは、`*.workers.dev` で同じ内容が見えると
検索エンジンに重複コンテンツとして扱われ、本体の評価を下げるため。

## 🚨 重要: 「DNSを1行変えるだけ」ではない

**Cloudflare Workers に独自ドメインを割り当てるには、そのドメインのゾーンが
Cloudflare上に無ければならない。**
`hiyoku.co.jp` のDNSは現在お名前.com（レンタルサーバー RSプラン）にあるため、
このままでは Worker にドメインを向けられない。

つまり切り替えには**ゾーンの移管（ネームサーバー変更）**が必要で、
これは数分では終わらないし、**MXレコードを間違えるとメールが止まる**。

## ✅ 対策: ゾーン移管を「先に」やっておく

ゾーン移管は、**サイトを止めずに今のうちに実施できる**。
Cloudflare に現在と同じレコードを作ってからNSを切り替えれば、
Aレコードは今まで通りVercelを指したままなので、**サイトもメールも無停止**。

先に移しておけば、いざという時の作業は本当に「1行の変更」になる。

### 手順（平常時に実施）

1. Cloudflare ダッシュボードで `hiyoku.co.jp` をゾーンとして追加
   （既存レコードは自動でスキャンされる）
2. **スキャン結果を必ず目視で照合する。** 特に以下は1つでも欠けると事故になる:
   - `MX  hiyoku.co.jp → mail92.onamae.ne.jp （優先度10）` ← **メールが止まる**
   - `A   hiyoku.co.jp → 216.198.79.1`（Vercel）
   - `A   mail.hiyoku.co.jp → 160.251.71.144`
   - `TXT hiyoku.co.jp → v=spf1 include:_spf.onamae.ne.jp include:m01-ahd-sys.net ~all`
   - `TXT hiyoku.co.jp → google-site-verification=_8QpR...`（Search Consoleの所有権。消すと計測が止まる）
   - `TXT default._domainkey.hiyoku.co.jp → v=DKIM1; ...`
   - `CNAME ***._domainkey.hiyoku.co.jp → ***.dkim.amazonses.com`（3本）
   - `CNAME form3.hiyoku.co.jp → form3.maildeliver.jp`
   - `CNAME www.hiyoku.co.jp → （Vercel）`
   ※ `_spf` / DKIM / maildeliver 系はアイドマ由来。契約終了後は不要になる
3. **プロキシは全てOFF（DNSのみ / グレーの雲）にしておく。**
   ONにすると経路が変わり、切り替え前に挙動が変わってしまう
4. お名前.com でネームサーバーを Cloudflare の2台に変更
5. 反映後、`dig` で全レコードが移管前と一致することを確認する

## 切り替え（旧環境が使えなくなったとき）

1. `wrangler.jsonc` に routes を追加

```jsonc
"routes": [
  { "pattern": "www.hiyoku.co.jp", "custom_domain": true },
  { "pattern": "hiyoku.co.jp",     "custom_domain": true }
]
```

2. デプロイ

```bash
npx opennextjs-cloudflare build
npx wrangler deploy
```

3. Cloudflare DNS で apex と www のレコードを Worker 側へ向ける
   （custom_domain を張ると wrangler が自動で管理下に置く）
4. 反映後、**時間を空けて複数回**確認する（エッジの伝播にラグがある）

```bash
for i in 1 2 3; do curl -sI https://www.hiyoku.co.jp/ | head -1; sleep 20; done
curl -s https://www.hiyoku.co.jp/service | grep -o "<title>[^<]*</title>"
```

## ビルドとデプロイ

```bash
npx opennextjs-cloudflare build   # .open-next/ を作る
npx wrangler deploy               # アップロード
npx wrangler dev --port 8788      # ローカルで Workers ランタイムを起動して確認
```

⚠️ **デプロイ前に必ず `wrangler dev` を起動して実物を見ること。**
ビルドが通っても起動する保証はない。

## 既知の注意点

- `@opennextjs/cloudflare` は `next >= 15.5.21` を要求する。
  そのため Next.js を 15.5.7 → 15.5.23 に上げてある（パッチ更新）
- `*.workers.dev` を使うにはアカウントにサブドメインの登録が必要。
  未登録だと `workers_dev: true` で deploy がエラーになる。
  重複コンテンツを避けるため、**通常は false のままでよい**
- `jsdom` は記事のサニタイズに使っているが、`/news/[id]` はビルド時に
  静的生成されるため **Workers のランタイムでは実行されない**
