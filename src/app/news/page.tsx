/*--------------------
　お知らせ(news)
---------------------*/
'use client';
import React, { useState } from "react";
import BlogTitleList from "@/components/news/BlogTitleList";
import BlogDetail from "@/components/news/BlogDetail";
import { RecruitArea } from "@/components/shared/RecruitArea";
import PageTitle from "@/components/shared/PageTitle";

export default function HomePage() {
  // 現在選択されているブログ記事のIDを管理するstate
  // null の場合は一覧表示、IDがあれば詳細表示
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [visitedBlogIds, setVisitedBlogIds] = useState<string[]>([]);

  // ブログタイトルがクリックされたときのハンドラ
  const handleSelectBlog = (id: string) => {
    setSelectedBlogId(id);
        // 訪問済みIDに追加（重複を避ける）
    if (!visitedBlogIds.includes(id)) {
      setVisitedBlogIds(prev => [...prev, id]);
    }
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
            <PageTitle
            titleJP="お知らせ"
            subtilteEN="NEWS"
            />
        {selectedBlogId ? (
          // selectedBlogId が設定されている場合は、BlogDetail を表示
          <BlogDetail blogId={selectedBlogId} onBack={handleBackToList} />
        ) : (
          // selectedBlogId が null の場合は、BlogTitleList を表示
          <BlogTitleList onSelectBlog={handleSelectBlog} visitedBlogIds={visitedBlogIds} />
        )}
        <RecruitArea/>
      </main>
    </div>
  );
}