'use client';
import React, { useState } from "react";
import Link from "next/link";
import { ButtonWithIcon } from "../ui/button";
import { ChevronRight } from "lucide-react";
import BlogDetail from "../news/BlogDetail";
import TopBlogTitleList from "../top/TopBlogTitleList";

export function TopNews() {
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
     <div className="my-16">
         {selectedBlogId ? (
           // selectedBlogId が設定されている場合は、BlogDetail を表示
           <Link href="/news">
           <BlogDetail blogId={selectedBlogId} onBack={handleBackToList} />
           </Link>
         ) : (
           // selectedBlogId が null の場合は、BlogTitleList を表示
           <TopBlogTitleList onSelectBlog={handleSelectBlog} visitedBlogIds={visitedBlogIds} />
         )}
     </div>
   );

}