/*--------------------------------------------
 NEWS記事のリスト表示するコンポーネント
 (クライアント側で処理)
--------------------------------------------*/
'use client';
import React, { useState } from "react";
import PageTitle from '@/components/shared/PageTitle';
import BlogTitleList from '../../components/news/BlogTitleList';
import { Header } from "@/components/header/Header";

//NEWS記事の閲覧状況を格納
const VISITED_BLOG_IDS_KEY = 'visitedBlogIds';

export default function NewsPage() {
    const [visitedBlogIds] = useState<string[]>(() => {
        if (typeof window !== 'undefined') { 
            const savedIds = localStorage.getItem(VISITED_BLOG_IDS_KEY);
            return savedIds ? JSON.parse(savedIds) : [];
        }
        return [];
    });

    // News一覧ページでは個別記事の選択処理は不要だが、
    // BlogTitleListのonSelectBlogが必須プロパティのため、空の関数を渡す
    const handleSelectBlog = () => {};

    return (
        <main>
            <Header />
            <PageTitle
                titleJP="お知らせ"
                subtitleEN="NEWS"
            />
            <div className="my-16">
                <BlogTitleList
                    onSelectBlog={handleSelectBlog} 
                    visitedBlogIds={visitedBlogIds} 
                    itemPerPage={10} 
                />
            </div>
        </main>
    );
}