/*----------------------------
  newsリストを表示するコンポーネント
----------------------------*/
'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { getPaginatedBlogTitlesServer } from '../../actions/blogAction';
import Link from 'next/link';
import Image from "next/image";
import { format } from 'date-fns';

// ブログタイトルのprops定義
interface BlogTitleProps {
    id: string;
    title: string;
    publishedAt: string;
}

// 選択されたブログのprops定義
interface BlogTitleListProps {
    onSelectBlog: (id: string) => void;
    visitedBlogIds: string[];
}

export default function BlogTitleList({ onSelectBlog, visitedBlogIds = [] }: BlogTitleListProps) {
    const [titles, setTitles] = useState<BlogTitleProps[]>([]); //タイトル
    const [loading, setLoading] = useState(true); //ロード状態
    const [error, setError] = useState<string | null>(null); //エラー
    const [totalCount, setTotalCount] = useState(0); //news記事カウント
    const [currentPage, setCurrentPage] = useState(1); //現在のページ
    const [visitedIds, setVisitedIds] = useState<Set<string>>(new Set()); //記事表示の履歴

    // page.tsxから渡された表示済みの記事の情報を変数に格納
    const allVisitedIds = useMemo(() => {
        return new Set([...visitedBlogIds, ...visitedIds]);
    }, [visitedBlogIds, visitedIds]);

    // 1ページあたりの記事数
    const ITEMS_PER_PAGE = 10;

    // コンポーネントがマウントされたときに一度だけブログタイトルを取得
    useEffect(() => {
        const fetchTitles = async () => {
            try {
                setLoading(true); // ローディング表示（データの再取得時もローディング表示）
                setError(null);   // エラーメッセージを初期化
                setTitles([]); // 新しいページに切り替えるときに前の記事を初期化
                //blogAction.tsで取得してきたブログのデータを取得
                const data = await getPaginatedBlogTitlesServer(currentPage, ITEMS_PER_PAGE);
                setTitles(data.titles);
                setTotalCount(data.totalCount); // ブログの総数をセット
            } catch (err) {
                console.error('ブログタイトルの取得に失敗しました:', err);
                setError('記事一覧の読み込み中にエラーが発生しました。時間をおいてお試しください。');
            } finally {
                setLoading(false);
            }
        };
        fetchTitles();
    }, [currentPage]);

    // 総ページ数を計算
    const totalPages = useMemo(() => {
        return Math.ceil(totalCount / ITEMS_PER_PAGE);
    }, [totalCount]);

    // ページ番号クリックハンドラ
    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return; 
        setCurrentPage(page);
    };

    // 前のページ表示
    const handlePrevPage = () => {
        handlePageChange(currentPage - 1);
    };

    // 次のページ表示
    const handleNextPage = () => {
        handlePageChange(currentPage + 1);
    };

    // すでに閲覧した記事
    const handleBlogClick = (blogId: string) => {
        setVisitedIds(prev => new Set([...prev, blogId]));
        onSelectBlog(blogId);
    };

    // ページ番号リストを作成
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    //ローディング中
    if (loading) {
        return <p style={{ textAlign: 'center', padding: '20px', fontSize: '23px',fontWeight:'bold',fontFamily:'Family_1'}}>記事一覧を読み込み中...</p>;
    }
    // エラー時
    if (error) {
        return (
            <div style={{ padding: '20px', border: '1px solid #ff0000', borderRadius: '5px', backgroundColor: '#ffe0e0', color: '#cc0000', textAlign: 'center',fontWeight:'bold',fontFamily:'Family_1' }}>
                <p>{error}</p>
            </div>
        );
    }
    // 記事がない場合
    if (titles.length === 0) {
        return <p style={{ textAlign: 'center', padding: '20px', fontSize: '23px',fontWeight:'bold',fontFamily:'Family_1' }}>まだ記事がありません。</p>;
    }

    //NEWS記事が1件以上あり、正常に処理された場合 
    return (
        <div>
            {titles.map((blog) => {
                const isVisited = allVisitedIds.has(blog.id);
                return (
                    <Link 
                        key={blog.id} 
                        href="#"
                        onClick={() => handleBlogClick(blog.id)}
                    >
                        <div className="mx-auto w-[90%] md:w-[70%]">
                            <div 
                                className={`flex justify-between bg-white border border-background py-8 mx-auto text-center min-h-20 ${
                                    isVisited ? 'bg-grayLight' : 'bg-white'}`} 
                                key={blog.id}>
                                <ul className='flex items-center flex-1 min-w-0'>
                                    <li 
                                        className={`text-gray-300 font-Family_3 font-bold mx-8 flex-shrink-0 ${
                                            isVisited ? 'text-sub03' : ''
                                    }`}>
                                        {format(new Date(blog.publishedAt), 'yyyy.M.d')}
                                    </li>
                                    <li 
                                        className={`font-Family_1 text-left font-bold flex-1 min-w-0 break-words overflow-hidden transition-colors duration-200 ${
                                            isVisited ? 'text-sub03' : ''
                                    }`}>
                                        {blog.title}
                                    </li>
                                </ul>
                                <ul className='flex items-center'>
                                    <li className="w-20 flex justify-center">
                                        <p 
                                            className={`font-bold ${
                                                isVisited ? 'text-sub03' : ''
                                        }`}>
                                            {"〉"}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                );
            })}

            {/* 総ページ数が1より大きい場合のページ数表示*/}
            {totalPages > 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px', gap: '10px' }}>
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1 || loading}
                        style={{
                            padding: '8px 10px',
                            backgroundColor: 'white',
                            border: 'none',
                            borderRadius: '60px',
                            cursor: 'pointer',
                            opacity: currentPage === 1 || loading ? 0.3 : 1,
                        }}
                    >
                        <Image src="/common/iconNext.png" alt="backpage" className="transform scale-x-[-1]" width={20} height={20} />
                    </button>
                    {pageNumbers.map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            disabled={loading}
                            style={{
                                padding: '8px 15px',
                                backgroundColor: currentPage === page ? '#F7F7F7' : 'white',
                                color: '#44585F',
                                border: currentPage === page ? 'none' : '#333',
                                borderRadius: '60px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                opacity: loading ? 0.6 : 1,
                            }}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages || loading}
                        style={{
                            padding: '8px 10px',
                            backgroundColor: 'white',
                            border: 'none',
                            borderRadius: '60px',
                            cursor: 'pointer',
                            opacity: currentPage === totalPages || loading ? 0.3 : 1,
                        }}
                    >
                        <Image src="/common/iconNext.png" alt="nextpage" width={20} height={20} />
                    </button>
                </div>
            )}
        </div>
    );
}