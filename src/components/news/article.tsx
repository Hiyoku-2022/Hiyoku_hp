/*--------------------------------
  news記事内容表示コンポーネント
---------------------------------*/
// クライアントサイド
'use client'; 
import React, { useEffect, useState } from 'react';
import styles from '../news/news.module.css';
import { format } from 'date-fns';
import { HoverShapeButtonWithIcon } from '../ui/button';
import { ChevronRight } from 'lucide-react';


import { getBlogDetailServer } from '../../actions/blogAction'; // ★Server Actionをインポート
import DOMPurify from 'dompurify'; // もしクライアント側でHTMLサニタイズを行うなら

// ブログ記事のデータ構造を定義 (本文も含む)
interface BlogArticle {
  id: string;
  title: string;
  content: string; // microCMSのrich editorフィールドの場合、HTMLが格納されることが多い
  publishedAt: string;
}

// コンポーネントが受け取るプロップスの型を定義
interface BlogDetailProps {
  blogId: string;   // 表示するブログ記事のID
  onBack: () => void; // 一覧に戻るボタンがクリックされたときに呼び出す関数
}

export default function BlogDetail({ blogId, onBack }: BlogDetailProps) {
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // blogId が変更されるたびに記事詳細を取得
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true); // 新しい記事を読み込むときにローディング状態にする
        setError(null);   // エラーメッセージをクリア
        setArticle(null); // 新しい記事を読み込む前に前の記事データをクリアする

        // ★Server Actionを呼び出す！
        const fetchedArticle = await getBlogDetailServer(blogId);

        // ★セキュリティと性能への配慮:
        // 通常、サニタイズはサーバーサイド（blogActions.ts内）で行うべきですが、
        // もしクライアント側で最終的なサニタイズが必要な場合（非推奨）
        const sanitizedBody = DOMPurify.sanitize(fetchedArticle.content);
        setArticle({ ...fetchedArticle, content: sanitizedBody });

        setArticle(fetchedArticle); // そのまま設定
      } catch (err) {
        console.error(`ID ${blogId} の記事取得に失敗しました:`, err);
        setError('記事の読み込み中にエラーが発生しました。');
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    if (blogId) { // blogId が存在する場合のみデータフェッチを実行
      fetchArticle();
    }
  }, [blogId]); // blogId が依存配列に指定されているため、blogId が変わるたびに useEffect が再実行される

  if (loading) {
    return <p style={{ textAlign: 'center', padding: '20px', fontSize: '1.1em', color: '#555' }}>記事詳細を読み込み中...</p>;
  }

  if (error) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ff0000', borderRadius: '8px', backgroundColor: '#ffe0e0', color: '#cc0000', textAlign: 'center' }}>
        <p style={{ marginBottom: '15px' }}>{error}</p>
        <button onClick={onBack} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1em' }}>
          NEWS一覧を見る
        </button>
      </div>
    );
  }

  if (!article) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
        <p style={{ marginBottom: '15px', color: '#666' }}>指定された記事は見つかりませんでした。</p>
        <button onClick={onBack} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1em' }}>
          NEWS一覧を見る
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center">
          <div className="mx-auto bg-white w-[90%] md:w-3/5">
              <div className="px-[5%] py-15 md:px-20 md:py-30 text-center">
                  <h2 className="text-center mx-auto mt-20 text-3xl w-full max-w-md break-words md:text-6xl">{article.title}</h2>
                  <p className="text-center my-2 md:my-5">{format(new Date(article.publishedAt),'yyyy.M.d')}</p>
                  {/* 取得したHTML文字列をそのままDOMに挿入 */}
                  {/* ★セキュリティ: microCMSからのデータは信頼できるソースと仮定。
                     もしユーザーからの入力を含む場合は、サーバーサイドでサニタイズ処理を行うこと！ */}
                  <div dangerouslySetInnerHTML={{ __html: article.content }} className={styles.blogcontent}/>
              </div>
          </div>
      </div>
      <div className="flex justify-center">
              <HoverShapeButtonWithIcon 
                variant="blue"
                icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                className='mt-[4%]'
              onClick={onBack} >
              NEWS一覧を見る
              </HoverShapeButtonWithIcon>
      </div>
    </>
  );
}