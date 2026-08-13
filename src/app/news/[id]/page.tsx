/*----------------------------------
　　NEWS画面のサニタイズをする
　(サーバーサイド)

  データ元は microCMS から src/data/news.ts へ移した（2026-08）。
  経緯は src/data/news.ts の冒頭コメントを参照。
----------------------------------*/
'use server'
import type { Metadata } from 'next';
import NewsDetailClient from './NewsDetailClient';
import { getNewsById, newsArticles } from '@/data/news';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { notFound } from 'next/navigation';

/*
  ビルド時に全記事のURLを静的生成する。
  記事はリポジトリ内の固定データになったので、リクエストのたびに
  組み立てる必要が無い。表示が速くなり、クロールもされやすくなる。
*/
export async function generateStaticParams() {
  return newsArticles.map((article) => ({ id: article.id }));
}

/*
  記事ごとの title / description を出す。

  これが無いと、親の src/app/news/layout.tsx の metadata が使われて
  全記事が「お知らせ | hiyoku合同会社」という同じ見出しになってしまい、
  検索結果でどれがどの記事か区別できない。
*/
export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await props.params;
  const article = getNewsById(id);

  // 存在しないIDのときは親(layout)の metadata に任せる
  if (!article) return {};

  // description は本文から作る。
  // 本文はHTMLなのでタグを除去し、連続する空白を潰してから頭を切り出す。
  // 100字程度が検索結果に表示される目安。
  const plainText = article.content
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const description = plainText.length > 100 ? `${plainText.slice(0, 100)}…` : plainText;

  return {
    title: article.title,
    description,
    alternates: { canonical: `/news/${article.id}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description,
      publishedTime: article.publishedAt,
      modifiedTime: article.revisedAt,
    },
  };
}

export default async function NewsDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const article = getNewsById(id);

  // 存在しないIDが来たら404。以前は microCMS のfetch失敗で拾っていた分岐。
  if (!article) {
    notFound();
  }

  /*
    サーバーサイドでサニタイズ。
    本文は自社リポジトリ内の固定データなので外部由来ではないが、
    HTMLをそのまま dangerouslySetInnerHTML に渡す経路である以上、
    記事を書き足す人が誤って危険なタグを入れた場合の保険として残している。

    ⚠️ NewsDetailClient 側の useEffect でも同じ内容をもう一度サニタイズしており、
       そちらはオプション無しで実行される。つまりここでオプションを足しても
       ハイドレーション後に上書きされる。設定を変えたい場合は両方を直すこと。

    【既知の挙動・今回は直していない】
    デフォルト設定では a タグの target / rel が落ちるため、
    記事中の外部リンクは同じタブで開く。これは microCMS 時代から同じで、
    今回の変更で挙動は変わっていない。直すなら別の変更として扱う。
  */
  const window = new JSDOM('').window;
  const DOMPurify = createDOMPurify(window as unknown as Window & typeof globalThis);
  const sanitizedContent = DOMPurify.sanitize(article.content);

  return <NewsDetailClient article={{ ...article, content: sanitizedContent }} />;
}
