/*----------------------------------
　　NEWS画面のサニタイズをする
　(サーバーサイド)
----------------------------------*/
'use server'
import NewsDetailClient from './NewsDetailClient';
import { client } from '../../../../lib/client';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { notFound } from 'next/navigation';

interface BlogArticleProps {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  [key: string]: unknown;
  error?: unknown;
}

export default async function NewsDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  let article: BlogArticleProps | null = null;
  try {
    article = await client.get({
      endpoint: 'blogs',
      contentId: id,
    });
  } catch (error) {
    console.error('ブログ詳細の取得に失敗しました:', error);
    notFound();
  }

  if (!article || article.error) {
    notFound();
  }

  // サーバーサイドでサニタイズ
  const window = new JSDOM('').window;
  const DOMPurify = createDOMPurify(window as unknown as Window & typeof globalThis);
  const sanitizedContent = DOMPurify.sanitize(article.content);

  return <NewsDetailClient article={{ ...article, content: sanitizedContent }} />;
}