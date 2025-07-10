/*-------------------------------------------------------
 特定のNEWS記事（ブログ記事）1件の詳細データを取得するAPIエンドポイント
-------------------------------------------------------*/
import { NextRequest, NextResponse } from 'next/server';
import { client } from '../../../../../lib/client';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await client.get({
      endpoint: 'blogs',
      contentId: id,
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error('ブログ詳細の取得に失敗しました:', error);
    return NextResponse.json(
      { error: 'ブログ詳細の取得に失敗しました' },
      { status: 500 }
    );
  }
} 