// app/news/page.tsx
'use client';
import React, { useState } from "react";
import PageTitle from '@/components/shared/PageTitle';
import BlogTitleList from '../../components/news/BlogTitleList';
import { Header } from "@/components/header/Header";
// 必要に応じて他のコンポーネントをインポート

const VISITED_BLOG_IDS_KEY = 'visitedBlogIds'; // localStorage に保存するキー

export default function NewsPage() {
    // localStorage から初期状態を読み込む
    const [visitedBlogIds] = useState<string[]>(() => {
        if (typeof window !== 'undefined') { // ブラウザ環境でのみ実行
            const savedIds = localStorage.getItem(VISITED_BLOG_IDS_KEY);
            return savedIds ? JSON.parse(savedIds) : [];
        }
        return [];
    });

    // visitedBlogIds が変更されても、ここでは特に保存する必要はない
    // 閲覧状態の変更は記事詳細ページで行われるため

    // 注意: BlogTitleList は onSelectBlog を必要としないが、
    // TopNews との共通化のためにプロパティとしては残す
    const handleSelectBlog = () => {
        // News一覧ページでは通常、個別の記事IDを管理する必要はないが、
        // BlogTitleList が共通で onSelectBlog を持つため、仮の関数を渡す。
        // ここでvisitedBlogIdsを更新しても良いが、主な更新は記事詳細ページで行われる。
    };

    return (
        <main>
            <Header />
            <PageTitle
                titleJP="お知らせ"
                subtilteEN="NEWS"
            />
            <div className="my-16">
                <BlogTitleList
                    onSelectBlog={handleSelectBlog} // ダミーまたは不要なら削除を検討
                    visitedBlogIds={visitedBlogIds} // localStorageから読み込んだIDを渡す
                    itemPerPage={10} // 例: ニュース一覧ページでは10件ずつ表示
                />
            </div>
            {/* ページネーションなどの他の要素があればここに追加 */}
        </main>
    );
}