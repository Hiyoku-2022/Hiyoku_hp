// components/news/BlogArticleList.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

interface BlogArticleProps {
    id: string;
    title: string;
    publishedAt: string;
    isVisited: boolean; // 閲覧済みかどうか
    onSelectBlog: (id: string) => void;
}

export default function BlogArticleList({ id, title, publishedAt, isVisited, onSelectBlog }: BlogArticleProps) {
    const handleBlogClick = () => {
        onSelectBlog(id); // 親コンポーネントにイベントを通知
    };

    // 閲覧済みの場合に適用する色（例として#579FBBを使用）
    const visitedColorClass = 'text-[#579FBB]'; // または text-black, text-blue-700 など、有効なTailwindクラス

    return (
        <Link
            key={id}
            href={`/news/${id}`} // /news/[id] のパス
            onClick={handleBlogClick}
        >
            <div className="mx-auto w-[90%] md:w-[70%]">
                <div
                    className={`flex justify-between bg-white border border-background py-8 mx-auto text-center min-h-20 ${
                        isVisited ? 'bg-[#F7F7F7]' : 'bg-white'
                    }`}
                >
                    <ul className='flex items-center flex-1 min-w-0'>
                        <li
                            className={`font-Family_3 font-bold mx-8 flex-shrink-0 ${
                                isVisited ? visitedColorClass : 'text-gray-300' // 重要: isVisitedがtrueならgray-300を適用しない
                            }`}
                        >
                            {format(new Date(publishedAt), 'yyyy.M.d')}
                        </li>
                        <li
                            className={`font-Family_1 text-left font-bold flex-1 min-w-0 break-words overflow-hidden transition-colors duration-200 ${
                                isVisited ? visitedColorClass : 'text-gray-300' // タイトルも同様
                            }`}
                        >
                            {title}
                        </li>
                    </ul>
                    <ul className='flex items-center'>
                        <li className="w-20 flex justify-center">
                            <p
                                className={`font-bold ${
                                    isVisited ? visitedColorClass : 'text-gray-300' // 矢印も同様
                                }`}
                            >
                                {"〉"}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </Link>
    );
}