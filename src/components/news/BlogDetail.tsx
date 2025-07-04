/*--------------------------------
  news記事を表示するコンポーネント
---------------------------------*/
'use client';
import React, { useEffect, useState } from 'react';
import styles from '../news/news.module.css';
import { format } from 'date-fns';
import { HoverShapeButtonWithIcon } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import { getBlogDetailServer } from '../../actions/blogAction';
import DOMPurify from 'dompurify';

// ブログ記事のprops定義
interface BlogArticleProps {
    id: string;
    title: string; //microCMSのタイトルのAPIスキーマ
    content: string; //microCMSの本文のAPIスキーマ
    publishedAt: string; //microCMSの日付のAPIスキーマ
}

// blogAction.tsから受け取るプロップスの型を定義
interface BlogDetailProps {
    blogId: string; // 表示するブログ記事のID
    onBack: () => void; // 一覧に戻るボタンがクリックされたときに呼び出す関数
}

export default function BlogDetail({ blogId, onBack }: BlogDetailProps) {
    const [article, setArticle] = useState<BlogArticleProps | null>(null); //記事内容
    const [loading, setLoading] = useState(true); //ロード情報
    const [error, setError] = useState<string | null>(null); //エラー

    // blogIdが変更されるたびに記事詳細を取得
    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setLoading(true); // 新しい記事を読み込むときにローディング状態にする
                setError(null); // エラーメッセージを初期化
                setArticle(null); // 新しい記事を読み込む前に前の記事データを初期化

                // サーバー情報を呼び出す
                const fetchedArticle = await getBlogDetailServer(blogId);
                const sanitizedBody = DOMPurify.sanitize(fetchedArticle.content);
                setArticle({ ...fetchedArticle, content: sanitizedBody });
            } catch (err) {
                console.error(`ID ${blogId} の記事取得に失敗しました:`, err);
                setError('記事の読み込み中にエラーが発生しました。');
                setArticle(null);
            } finally {
                setLoading(false);
            }
        };
        // blogId が存在する場合にデータフェッチを実行
        if (blogId) { 
            fetchArticle();
        }
    }, [blogId]);

    //ローディング中
    if (loading) {
        return <p style={{ textAlign: 'center', padding: '20px', fontSize: '23px',fontWeight:'bold',fontFamily:'Family_1' }}>記事詳細を読み込み中...</p>;
    }
    // エラー時
    if (error) {
        return (
            <div style={{ padding: '20px', border: '1px solid #ff0000', borderRadius: '8px', backgroundColor: '#ffe0e0', color: '#cc0000', textAlign: 'center',fontWeight:'bold',fontFamily:'Family_1' }}>
                <p style={{ marginBottom: '15px' }}>{error}</p>
                <HoverShapeButtonWithIcon
                    onClick={onBack}
                    variant="blue"
                    icon={<ChevronRight className="w-4 h-4 transition-colors" />}>
                    NEWS一覧を見る
                </HoverShapeButtonWithIcon>
            </div>
        );
    }
    // 記事がない場合
    if (!article) {
        return (
            <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
                <p style={{ marginBottom: '23px',fontWeight:'bold',fontFamily:'Family_1' }}>指定された記事は見つかりませんでした。</p>
                <HoverShapeButtonWithIcon
                    onClick={onBack}
                    variant="blue"
                    icon={<ChevronRight className="w-4 h-4 transition-colors" />}>
                    NEWS一覧を見る
                </HoverShapeButtonWithIcon>
            </div>
        );
    }

    //サーバーから取得したIDのNEWS記事が存在し、正常に処理された場合 
    return (
        <>
            <div className="flex justify-center">
                <div className="mx-auto bg-white w-[90%] md:w-[70%]">
                    <div className="px-[5%] py-15 md:py-30 text-center">
                        <p className="font-Family_1 text-center mx-auto mt-16 text-[20px] font-semibold w-full max-w-md break-words md:text-[28px] md:mt-[6rem]">{article.title}</p>
                        <p className="font-Family_3 text-bold text-gray-300 text-center text-[16px] my-2 md:my-5">{format(new Date(article.publishedAt), 'yyyy.M.d')}</p>
                        <div dangerouslySetInnerHTML={{ __html: article.content }} className={styles.blogcontent} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <HoverShapeButtonWithIcon
                    variant="blue"
                    icon={<ChevronRight className="w-4 h-4 transition-colors"/>}
                    className='mt-16'
                    onClick={onBack}>
                    NEWS一覧を見る
                </HoverShapeButtonWithIcon>
            </div>
        </>
    );
}