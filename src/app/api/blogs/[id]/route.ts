/*-------------------------------------------------------
 特定のNEWS記事（ブログ記事）1件の詳細データを取得するAPIエンドポイント

 データ元は microCMS から src/data/news.ts へ移した（2026-08）。
 経緯は src/data/news.ts の冒頭コメントを参照。

 ⚠️ 記事が見つからない場合、microCMS 時代は例外が飛んで 500 を返していたが、
    存在しないIDは「無い」だけでサーバーエラーではないので 404 を返すよう改めた。
-------------------------------------------------------*/
import { NextRequest, NextResponse } from 'next/server';
import { getNewsById } from '@/data/news';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const article = getNewsById(id);

    if (!article) {
      return NextResponse.json(
        { error: '記事が見つかりませんでした' },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error('ブログ詳細の取得に失敗しました:', error);
    return NextResponse.json(
      { error: 'ブログ詳細の取得に失敗しました' },
      { status: 500 }
    );
  }
}
