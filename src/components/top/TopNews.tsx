// TopNews.tsx
'use client';
import React, { useState, useEffect } from "react"; // useEffect をインポート
import { useRouter } from 'next/navigation';
import BlogTitleList from "../news/BlogTitleList";
import { ChevronRight } from 'lucide-react';
import {HoverShapeButtonWithIcon} from "../ui/button/HoverShapeButtonWithIcon"

const VISITED_BLOG_IDS_KEY = 'visitedBlogIds'; // localStorage に保存するキー

export function TopNews() {
    const router = useRouter();
    // localStorage から初期状態を読み込む
    const [visitedBlogIds, setVisitedBlogIds] = useState<string[]>(() => {
        if (typeof window !== 'undefined') { // ブラウザ環境でのみ実行
            const savedIds = localStorage.getItem(VISITED_BLOG_IDS_KEY);
            return savedIds ? JSON.parse(savedIds) : [];
        }
        return [];
    });

    // visitedBlogIds が変更されたら localStorage に保存
    useEffect(() => {
        if (typeof window !== 'undefined') { // ブラウザ環境でのみ実行
            localStorage.setItem(VISITED_BLOG_IDS_KEY, JSON.stringify(visitedBlogIds));
        }
    }, [visitedBlogIds]);

    const handleSelectBlog = (id: string) => {
        console.log('--- TopNews (homepage section): handleSelectBlog が呼び出されました。ID:', id);
        // 既に訪問済みでなければ追加
        if (!visitedBlogIds.includes(id)) {
            setVisitedBlogIds(prev => [...prev, id]);
        }
        router.push(`/news/${id}`); // /news/[id] 形式のURLに遷移
        console.log('--- TopNews (homepage section): router.push を呼び出しました。パス:', `/news/${id}`);
    };

    const handleBackToList = () => {
        router.push('/news'); // News一覧ページに戻る
    };

    return (
        <>
            <div className="relative z-40 my-16">
                <p className="text-center font-Family_3 font-bold text-[56px]">NEWS</p>
                <p className="text-center font-bold font-Family_1 text-[16px]">ニュース</p>
            </div>
            <div className="my-16">
                <BlogTitleList
                    onSelectBlog={handleSelectBlog} // TopNews の handleSelectBlog を渡す
                    visitedBlogIds={visitedBlogIds}
                    itemPerPage={4} // ホームページでは4件ずつ表示
                />
            </div>
            <div className="flex justify-center">
                <HoverShapeButtonWithIcon
                    variant="blue"
                    icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                    onClick={handleBackToList}>
                    NEWS一覧を見る
                </HoverShapeButtonWithIcon>
            </div>
        </>
    );
}