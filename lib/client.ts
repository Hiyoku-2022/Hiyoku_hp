// lib/microcms.ts
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '', // 環境変数から取得
  apiKey: process.env.MICROCMS_API_KEY || '',             // 環境変数から取得
});