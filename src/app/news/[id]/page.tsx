// app/news/[id]/page.tsx
'use client'; // クライアントコンポーネントであることを指定
import React, { useEffect, useState, use } from 'react'; // use を追加
import { createClient } from 'microcms-js-sdk';
import { format } from 'date-fns';
import DOMPurify from 'dompurify';
import { HoverShapeButtonWithIcon } from '../../../components/ui/button/HoverShapeButtonWithIcon';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import styles from '../../../components/news/news.module.css';
import PageTitle from '@/components/shared/PageTitle';

// MicroCMSクライアントの初期化 (クライアントサイドで使用するため、NEXT_PUBLIC_ プレフィックスが必要)
const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
    console.error('Client-side: microCMS Service Domain or API Key is not set in environment variables.');
}

const microcmsClient = createClient({
    serviceDomain: serviceDomain || '',
    apiKey: apiKey || '',
});

interface BlogArticleProps {
    id: string;
    title: string;
    content: string;
    publishedAt: string;
}

// localStorage に保存するキー
const VISITED_BLOG_IDS_KEY = 'visitedBlogIds';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NewsDetailPage(props: any) {
    // React.use()を使ってparamsをunwrap
    const params = use(props.params) as { id: string };
    const blogId = params.id;

    const router = useRouter();
    const [article, setArticle] = useState<BlogArticleProps | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!blogId) { // blogId が取得できない場合のガード
            setLoading(false);
            setError('記事IDが取得できませんでした。');
            return;
        }

        const fetchArticle = async () => { // この関数自体は async でOKです
            setLoading(true); // フェッチ開始時にローディングを設定
            setError(null);   // エラーをリセット
            try {
                const data = await microcmsClient.get<BlogArticleProps>({
                    endpoint: 'blogs', // MicroCMSのエンドポイント名を統一
                    contentId: blogId, // blogId を使用
                });
                setArticle(data);

                // 記事IDをlocalStorageに追加するロジック
                if (typeof window !== 'undefined' && data) {
                    const savedIds = localStorage.getItem(VISITED_BLOG_IDS_KEY);
                    const visitedIds: string[] = savedIds ? JSON.parse(savedIds) : [];
                    if (!visitedIds.includes(data.id)) {
                        visitedIds.push(data.id);
                        localStorage.setItem(VISITED_BLOG_IDS_KEY, JSON.stringify(visitedIds));
                        console.log('記事IDをlocalStorageに追加しました:', data.id);
                    }
                }

            } catch (err) {
                console.error('Error fetching blog article:', err);
                if (err instanceof Error && err.message.includes('404')) {
                    setError('指定された記事が見つかりませんでした。URLが正しいか確認してください。');
                } else {
                    setError('記事の読み込み中にエラーが発生しました。');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [blogId]); // blogId が変わったときに再実行

    const handleBackToList = () => {
        router.push('/news'); // News一覧ページに戻る
    };

    // ロード中、エラー、記事なしの各状態に対応
    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: '20px', fontSize: '23px', fontWeight: 'bold', fontFamily: 'Family_1' }}>
                記事を読み込み中...
            </div>
        );
    }
    if (error) {
        return <p style={{ textAlign: 'center', padding: '20px', fontSize: '23px', fontWeight: 'bold', fontFamily: 'Family_1', color: 'red' }}>{error}</p>;
    }
    if (!article) {
        return <p style={{ textAlign: 'center', padding: '20px', fontSize: '23px', fontWeight: 'bold', fontFamily: 'Family_1' }}>記事が見つかりませんでした。</p>;
    }

    return (
        <main>
            <PageTitle
                titleJP="お知らせ"
                subtilteEN="NEWS"
            />
            <div className="flex justify-center">
                <div className="mx-auto bg-white w-[90%] md:w-[70%]">
                    <div className="px-[5%] py-15 md:py-30 text-center">
                        <p className="font-Family_1 text-center mx-auto mt-16 text-[20px] font-semibold w-full max-w-md break-words md:text-[28px] md:mt-[6rem]">{article.title}</p>
                        <p className="font-Family_3 text-bold text-gray-300 text-center text-[16px] my-2 md:my-5">{format(new Date(article.publishedAt), 'yyyy.M.d')}</p>
                        {/* DOMPurify を使って content を表示に戻します。これでハイドレーションエラーが解決するはずです */}
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }} className={styles.blogcontent} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <HoverShapeButtonWithIcon
                    variant="blue"
                    icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                    className='mt-16'
                    onClick={handleBackToList}>
                    NEWS一覧を見る
                </HoverShapeButtonWithIcon>
            </div>
        </main>
    );
}