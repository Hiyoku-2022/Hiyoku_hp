/*--------------------
お知らせページ
---------------------*/
'use client';
import React, { useState } from "react";
// import Link from 'next/link';
// import Image from "next/image";

// import { client } from '../../../lib/client'; // lib/client.ts のパスを正確に調整してください
import NewsList from "@/components/news/newslist";
import Article from "@/components/news/article";

/*
export default function BlogPage() {
  // 選択されたブログ記事のIDを保持するstate
  // 初期値はnull（何も選択されていない状態）
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  // ブログタイトルがクリックされたときに呼び出されるハンドラ関数
  const handleSelectBlog = (id: string) => {
    setSelectedBlogId(id);
    console.log(`選択されたブログID: ${id}`);
  };

  // 記事詳細表示から一覧に戻るボタンのハンドラ関数
  const handleBackToList = () => {
    setSelectedBlogId(null); // stateをnullに戻して一覧表示に切り替える
    console.log("一覧表示に戻りました。");
  };

  return (
    <div>
        <div className="p-36">
            <h1 className="text-3xl text-center">お知らせ</h1>
            <h2 className="text-base text-center">NEWS</h2>
        </div>

  {selectedBlogId ? (
          // selectedBlogId がnullでない場合（記事が選択されている場合）
          // BlogDetail コンポーネントをレンダリングし、blogId と onBack プロップスを渡す
          <Article blogId={selectedBlogId} onBack={handleBackToList} />
        ) : (
          // selectedBlogId がnullの場合（記事が選択されていない場合）
          // BlogTitleList コンポーネントをレンダリングし、onSelectBlog プロップスを渡す
          <NewsList onSelectBlog={handleSelectBlog} />
        )}
 
    </div>  
  );
}
*/
// 注意: App Routerでは getStaticProps は不要です
// ページコンポーネントが直接 await でデータを取得します

// src/app/page.tsx
// 'use client'; // クライアントコンポーネント
/*
import React, { useState } from 'react';
import BlogTitleList from '../components/BlogTitleList';
import BlogDetail from '../components/BlogDetail';
*/

export default function HomePage() {
  // 現在選択されているブログ記事のIDを管理するstate
  // null の場合は一覧表示、IDがあれば詳細表示
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  // ブログタイトルがクリックされたときのハンドラ
  const handleSelectBlog = (id: string) => {
    setSelectedBlogId(id);
    // console.log(`ブログID ${id} が選択されました。`); // デバッグ用
  };

  // 記事詳細から一覧に戻るボタンのハンドラ
  const handleBackToList = () => {
    setSelectedBlogId(null);
    // console.log("一覧表示に戻ります。"); // デバッグ用
  };

  return (
    <div>
      <main> 
            <div className="py-36">
            <h1 className="text-2xl md:text-3xl text-center">お知らせ</h1>
            <h2 className="text-base text-center">NEWS</h2>
            </div>
        {selectedBlogId ? (
          // selectedBlogId が設定されている場合は、BlogDetail を表示
          <Article blogId={selectedBlogId} onBack={handleBackToList} />
        ) : (
          // selectedBlogId が null の場合は、BlogTitleList を表示
          <NewsList onSelectBlog={handleSelectBlog} />
        )}
      </main>
    </div>
  );
}