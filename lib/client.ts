// lib/client.ts
'use server';
import { createClient } from 'microcms-js-sdk';

// export const client = createClient({
//   serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '', // YOUR_DOMAIN is for example
//   apiKey: process.env.MICROCMS_API_KEY || '',
// });

// 環境変数からService DomainとAPI Keyを取得
// Next.jsの環境変数は、ブラウザ側で使用する場合 NEXT_PUBLIC_ をプレフィックスに付ける必要がある
const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;

// 環境変数が設定されているかチェック
if (!serviceDomain || !apiKey) {
  throw new Error('microCMSのService DomainまたはAPI Keyが設定されていません。');
}

// microCMSクライアントを初期化してエクスポート
export const client = createClient({
  serviceDomain: serviceDomain,
  apiKey: apiKey,
});