/*--------------------------------------------
 NEWS記事のリスト表示するコンポーネント
 (クライアント側で処理)
--------------------------------------------*/
'use client';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { HoverShapeButtonWithIcon } from '../../../components/ui/button/HoverShapeButtonWithIcon';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import styles from '../../../components/news/news.module.css';
import PageTitle from '@/components/shared/PageTitle';
import { Header } from '@/components/header/Header';

interface BlogArticleProps {
    id: string;
    title: string;
    content: string;
    publishedAt: string;
}

//NEWS記事閲覧状況を格納する変数
const VISITED_BLOG_IDS_KEY = 'visitedBlogIds';

//NEWS記事閲覧済みの変数を渡す
function saveVisitedBlogId(id: string) {
    if (typeof window === 'undefined') return;
    const savedIds = localStorage.getItem(VISITED_BLOG_IDS_KEY);
    const visitedIds: string[] = savedIds ? JSON.parse(savedIds) : [];
    if (!visitedIds.includes(id)) {
        visitedIds.push(id);
        localStorage.setItem(VISITED_BLOG_IDS_KEY, JSON.stringify(visitedIds));
    }
}

export default function NewsDetailClient({ article }: { article: BlogArticleProps }) {
    const router = useRouter();
    const [sanitizedContent, setSanitizedContent] = useState(article.content);

    useEffect(() => {
        saveVisitedBlogId(article.id);
        if (typeof window !== 'undefined') {
            import('dompurify').then((DOMPurify) => {
                setSanitizedContent(DOMPurify.default.sanitize(article.content));
            });
        }
    }, [article]);
    
    //NEWS一覧に戻るボタンクリック後のページ遷移
    const handleBackToList = () => {
        try {
            router.push('/news');
            setTimeout(() => {
                if (window.location.pathname !== '/news') {
                    window.location.href = '/news';
                }
            }, 500);
        } catch {
            window.location.href = '/news';
        }
    };

    return (
        <main>
            <Header />
            <PageTitle
                titleJP="お知らせ"
                subtitleEN="NEWS"
            />
            <div className="flex justify-center">
                <div className="mx-auto bg-white w-[90%] md:w-[70%]">
                    <div className="px-[5%] py-15 md:py-30 text-center">
                        <p className="font-Family_1 text-center mx-auto mt-16 text-[20px] font-semibold w-full max-w-md break-words md:text-[28px] md:mt-[6rem]">{article.title}</p>
                        <p className="font-Family_3 text-bold text-gray-300 text-center text-[16px] my-2 md:my-5">{format(new Date(article.publishedAt), 'yyyy.M.d')}</p>
                        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} className={styles.blogcontent} />
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