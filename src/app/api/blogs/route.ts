/*-----------------------------------------------
 複数のNEWS記事（ブログ記事）のリストを取得するAPIエンドポイント

 データ元は microCMS から src/data/news.ts へ移した（2026-08）。
 経緯は src/data/news.ts の冒頭コメントを参照。

 ⚠️ レスポンスの形（contents / totalCount / offset / limit）は
    microCMS 時代と同じにしてある。呼び出し側の
    src/components/news/BlogTitleList.tsx を変更せずに済ませるため。
-----------------------------------------------*/
import { NextRequest, NextResponse } from 'next/server';
import { getNewsList } from '@/data/news';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const offset = parseInt(searchParams.get('offset') || '0');
    const limit = parseInt(searchParams.get('limit') || '10');

    // fields / orders は microCMS 側のクエリパラメータだった。
    // 現在は getNewsList が「公開日の新しい順・id/title/publishedAt のみ」を
    // 返す固定仕様なので受け取っても使わない。
    // 呼び出し側が今も付けてくるため、互換のため無視して受け流す。

    // 不正な数値が来たときに配列を壊さないよう最低限のガードを入れる
    const safeOffset = Number.isFinite(offset) && offset > 0 ? offset : 0;
    const safeLimit = Number.isFinite(limit) && limit > 0 ? limit : 10;

    return NextResponse.json(getNewsList(safeOffset, safeLimit));
  } catch (error) {
    console.error('ブログデータの取得に失敗しました:', error);
    return NextResponse.json(
      { error: 'ブログデータの取得に失敗しました' },
      { status: 500 }
    );
  }
}
