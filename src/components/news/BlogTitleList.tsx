// components/news/BlogTitleList.tsx
'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { createClient } from 'microcms-js-sdk'; // MicroCMS SDK をインポート
import BlogArticleList from './BlogArticleList';
import BlogPagination from './BlogListPage';

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

interface BlogTitleProps {
    id: string;
    title: string;
    publishedAt: string;
}

interface BlogTitleListProps {
    onSelectBlog?: (id: string) => void; // ホームページでは必須、ニュースページでは間接的
    visitedBlogIds: string[];
    itemPerPage: number;
}

export default function BlogTitleList({ onSelectBlog, visitedBlogIds = [], itemPerPage }: BlogTitleListProps) {
    const [titles, setTitles] = useState<BlogTitleProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [visitedIds, setVisitedIds] = useState<Set<string>>(new Set());

    const allVisitedIds = useMemo(() => {
        return new Set([...visitedBlogIds, ...visitedIds]);
    }, [visitedBlogIds, visitedIds]);

    useEffect(() => {
        const fetchTitles = async () => {
            console.log('--- BlogTitleList: fetchTitles 開始 ---');
            if (!serviceDomain || !apiKey) {
                setError('MicroCMSの設定が不足しています。');
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                setError(null);
                const offset = (currentPage - 1) * itemPerPage;
                console.log(`MicroCMS API を呼び出し中... (offset: ${offset}, limit: ${itemPerPage})`);
                const data = await microcmsClient.get<{ contents: BlogTitleProps[]; totalCount: number; }>(
                    {
                        endpoint: 'blogs', 
                        queries: {
                            offset: offset,
                            limit: itemPerPage,
                            fields: 'id,title,publishedAt',
                            orders: '-publishedAt',
                        },
                    }
                );
                console.log('MicroCMS API 応答:', data);
                setTitles(data.contents);
                setTotalCount(data.totalCount);
            } catch (err) {
                console.error('ブログタイトルの取得に失敗しました（クライアント側）:', err);
                setError('記事一覧の読み込み中にエラーが発生しました。時間をおいてお試しください。');
            } finally {
                setLoading(false);
                console.log('--- BlogTitleList: fetchTitles 終了（loading: false に設定）---');
            }
        };
        fetchTitles();
    }, [currentPage, itemPerPage]); // 依存配列からMicroCMS設定を削除

    useEffect(() => {
        setVisitedIds(new Set(visitedBlogIds));
    }, [visitedBlogIds]);

    const handleBlogClick = (blogId: string) => {
        console.log('--- BlogTitleList: handleBlogClick が呼び出されました。ID:', blogId);
        setVisitedIds(prev => new Set([...prev, blogId]));
        if (onSelectBlog) {
            onSelectBlog(blogId);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(totalCount / itemPerPage);

    // ローディング中 (既存のスタイルを維持)
    if (loading) {
        return <p style={{ textAlign: 'center', padding: '20px', fontSize: '23px', fontWeight: 'bold', fontFamily: 'Family_1' }}>記事一覧を読み込み中...</p>;
    }
    // エラー時 (既存のスタイルを維持)
    if (error) {
        return (
            <div style={{ padding: '20px', border: '1px solid #ff0000', borderRadius: '5px', backgroundColor: '#ffe0e0', color: '#cc0000', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Family_1' }}>
                <p>{error}</p>
            </div>
        );
    }
    // 記事がない場合 (既存のスタイルを維持)
    if (titles.length === 0) {
        return <p style={{ textAlign: 'center', padding: '20px', fontSize: '23px', fontWeight: 'bold', fontFamily: 'Family_1' }}>まだ記事がありません。</p>;
    }

    return (
        <div className="my-16">
            {titles.map((blog) => (
                <BlogArticleList
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}
                    publishedAt={blog.publishedAt}
                    isVisited={allVisitedIds.has(blog.id)}
                    onSelectBlog={handleBlogClick}
                />
            ))}

            {/* ページネーションは itemPerPage が4件 (ホームページ) ではない場合のみ表示 */}
            {itemPerPage !== 4 && totalPages > 1 && (
                <BlogPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    loading={loading}
                />
            )}
        </div>
    );
}