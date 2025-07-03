/*----------------------------
  newsのリストコンポーネント
----------------------------*/
'use client'; 

import React, { useEffect, useState, useMemo } from 'react';
import { getPaginatedBlogTitlesServer } from '../../actions/blogAction'; // ★Server Actionをインポート
import Link from 'next/link';
import Image from "next/image";
import { format } from 'date-fns';

// ブログタイトルのデータ構造を定義
interface BlogTitle {
  id: string;
  title: string;
  publishedAt: string;
}  

// コンポーネントが受け取るプロップスの型を定義
interface BlogTitleListProps {
  onSelectBlog: (id: string) => void; // ブログが選択されたときに呼び出す関数
}

export default function BlogTitleList({ onSelectBlog }: BlogTitleListProps) {
  const [titles, setTitles] = useState<BlogTitle[]>([]);
  const [loading, setLoading] = useState(true); // 初期ロードはtrue
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0); // ★記事の総数を管理
  const [currentPage, setCurrentPage] = useState(1); // ★現在のページ番号を管理

  // 1ページあたりの記事数
  const ITEMS_PER_PAGE = 10;

  // コンポーネントがマウントされたときに一度だけブログタイトルを取得
  useEffect(() => {
    const fetchTitles = async () => {
      try {
        setLoading(true); // データの再取得時もローディング表示
        setError(null);   // エラーメッセージをクリア
        setTitles([]); // 新しいページに切り替えるときに前の記事をクリア
        // ★Server Actionを呼び出す！この呼び出しはクライアントサイドで行われるが、
        //   実際の処理はサーバーサイドで実行される。
// ★現在のページと1ページあたりの件数をServer Actionに渡す
        const data = await getPaginatedBlogTitlesServer(currentPage, ITEMS_PER_PAGE);
        setTitles(data.titles);
        setTotalCount(data.totalCount); // ★総数をセット
      } catch (err) {
        console.error('ブログタイトルの取得に失敗しました:', err);
        setError('記事一覧の読み込み中にエラーが発生しました。時間をおいてお試しください。');
      } finally {
        setLoading(false);
      }
    };
    fetchTitles();
  }, [currentPage]); // 空の依存配列は、コンポーネントが初回レンダリングされた時のみ実行

  // 総ページ数を計算 (メモ化して不要な再計算を防ぐ)
  const totalPages = useMemo(() => {
    return Math.ceil(totalCount / ITEMS_PER_PAGE);
  }, [totalCount]);

  // ページ番号クリックハンドラ
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return; // 無効なページ番号は無視
    setCurrentPage(page);
  };

  // 前のページへ
  const handlePrevPage = () => {
    handlePageChange(currentPage - 1);
  };

  // 次のページへ
  const handleNextPage = () => {
    handlePageChange(currentPage + 1);
  };

  // ページ番号リストを作成
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (loading) {
    return <p style={{ textAlign: 'center', padding: '20px', fontSize: '1.1em', color: '#555' }}>記事一覧を読み込み中...</p>;
  }

  if (error) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ff0000', borderRadius: '5px', backgroundColor: '#ffe0e0', color: '#cc0000', textAlign: 'center' }}>
        <p>{error}</p>
        {/* 再試行ボタンなど、ユーザーに次のアクションを促す要素を追加しても良い */}
      </div>
    );
  }

  if (titles.length === 0) {
    return <p style={{ textAlign: 'center', padding: '20px', fontSize: '1.1em', color: '#555' }}>まだ記事がありません。</p>;
  }

  return (
    <div>
                       {/* <div className="mx-auto w-9/10 md:w-auto"> */}
        {titles.map((blog) => (
           <Link key={blog.id} href="#"
                onClick={() => onSelectBlog(blog.id)}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f9f9f9')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
 {/* <div className="bg-white border border-gray-100 w-auto"> */}
 <div className="mx-auto md:w-[70%]">
                        <div className="h-20 flex justify-between bg-white border border-gray-100 py-8 mx-auto text-center h-auto" key={blog.id}>
                          <ul className='flex items-center'>
                            <li className="text-gray-300 font-Family_3 font-bold mx-10">
                              {format(new Date(blog.publishedAt),'yyyy.M.d')}
                            </li>
                            <li className="font-Family_1 text-left mx-10 font-bold w-full max-w-md break-words">
                              {blog.title}
                                    {/* bodyの内容を表示する場合は、マークダウンをHTMLに変換するなど別途処理が必要 */}
                                    {/* リンクを追加する場合、Next.jsのLinkコンポーネントを使用 */}
                                    {/* <Link href={`/news/${blog.id}`}>Read More</Link> */}
                            </li>
                            </ul>
                            <ul className='flex items-center'>
                            <li className="w-20 flex justify-center">
                              {/* <Image src="/common/iconNext.png" alt="blogdetail" width={20} height={20}/> */}
                              {/* <span> {'>'} </span> */}
                              <p className='font-bold'>{"〉"}</p>
                            </li>
                            </ul>
                        </div>
                           </div>   
 {/* </div> */}
                                  </Link>
                                          ))}
      {totalPages > 1 && ( // 総ページ数が1より大きい場合のみ表示
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
              opacity: currentPage === 1 || loading ? 0.6 : 1,
            }}
          >
           <Image src="/common/iconNext.png" alt="backpage" className="transform scale-x-[-1]" width={20} height={20}/>
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
              opacity: currentPage === totalPages || loading ? 0.6 : 1,
            }}
          >
             <Image src="/common/iconNext.png" alt="nextpage" width={20} height={20}/>
          </button>
        </div>
      )}
    </div>
  );
}