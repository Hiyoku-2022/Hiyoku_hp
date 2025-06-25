/*-------------------------------------
  microCSMからnewsの内容を取得する(サーバーサイド)
-------------------------------------*/
'use server'; 

//microCMSからデータを取得してくる
import { createClient } from 'microcms-js-sdk';
//サーバーサイドでHTMLをサニタイズする(XSS対策)
import DOMPurify from 'dompurify'; 
//DOMPurifyを使うため(microCMSのマークダウン形式を読み込む)
import { JSDOM } from 'jsdom'; 

//Service DomainとAPI Keyを取得
const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

// 環境変数が設定されていない場合はアプリケーションを起動させないようにする
if (!serviceDomain || !apiKey) {
    throw new Error('Server-side: microCMS Service Domain or API Key is not set in environment variables.');
}

// microCMSクライアントを初期化
const microcmsClient = createClient({
    serviceDomain: serviceDomain,
    apiKey: apiKey,
});

//microCMSから取得する情報の型定義
interface BlogArticleResponse {
    id: string;
    title: string;
    content: string;
    publishedAt: string;
}

// 記事の一覧(総件数)を取得し10件ごとに表示する
export async function getPaginatedBlogTitlesServer(currentPage: number = 1, limit: number = 10) {
    console.log(`Server Action: getPaginatedBlogTitlesServer called (Page: ${currentPage}, Limit: ${limit})`);
    try {
        // ページ数を表示するためのオフセットを計算
        const offset = (currentPage - 1) * limit; 
  
        const response = await microcmsClient.get<{
            contents: BlogArticleResponse[];
            totalCount: number;
            offset: number;
            limit:  number;
        }>({
            endpoint:   'blogs',
            queries: {
                fields: 'id,title,publishedAt', //記事ID、記事タイトル、公開日
                orders: '-publishedAt',//最新の公開日順
                limit: limit,
                offset: offset,
            },
        });
  
        return {
            titles: response.contents,
            totalCount: response.totalCount,
        };
    } catch (error) {
        console.error('Server Action Error: Failed to fetch paginated blog titles from microCMS:', error);
        throw new Error('記事一覧の取得に失敗しました。(サーバー側)');
    }
}

// 選択した記事詳細を取得するサーバー関数
export async function getBlogDetailServer(id: string) {
    console.log(`Server Action: getBlogDetailServer called for ID: ${id}`); // デバッグ用
    try {
        const response = await microcmsClient.get<{ id: string; title: string; content: string; publishedAt: string;}>({
            endpoint: 'blogs', // microCMSのブログエンドポイント名
            contentId: id, // 選択された記事のID
        });
  
        //サーバーサイドでHTMLコンテンツをサニタイズし、マークダウン形式で記事データを取得する
        const window = new JSDOM('').window;
        const purify = DOMPurify(window);
        const sanitizedBody = purify.sanitize(response.content);
        return { ...response, content: sanitizedBody };
    } catch (error) {
        console.error(`Server Action Error: Failed to fetch blog detail for ID ${id} from microCMS:`, error);
        throw new Error(`記事ID ${id} の取得に失敗しました。(サーバー側)`);
    }
}