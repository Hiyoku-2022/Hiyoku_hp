/*-----------------------------------------------
 複数のNEWS記事（ブログ記事）のリストを取得するAPIエンドポイント
-----------------------------------------------*/
import { NextRequest, NextResponse } from 'next/server';
import { client } from '../../../../lib/client';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const offset = parseInt(searchParams.get('offset') || '0');
    const limit = parseInt(searchParams.get('limit') || '10');
    const fields = searchParams.get('fields') || 'id,title,publishedAt';
    const orders = searchParams.get('orders') || '-publishedAt';

    const data = await client.get({
      endpoint: 'blogs',
      queries: {
        offset,
        limit,
        fields,
        orders,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('ブログデータの取得に失敗しました:', error);
    return NextResponse.json(
      { error: 'ブログデータの取得に失敗しました' },
      { status: 500 }
    );
  }
} 