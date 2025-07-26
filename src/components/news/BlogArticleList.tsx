/*--------------------------------------------
 NEWS記事が閲覧済みのリストのCSSを変更するコンポーネント
 (クライアント側で処理)
--------------------------------------------*/
'use client';
import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

interface BlogArticleProps {
    id: string;
    title: string;
    publishedAt: string;
    isVisited: boolean;
    onSelectBlog: (id: string) => void;
}

export default function BlogArticleList({ id, title, publishedAt, isVisited, onSelectBlog }: BlogArticleProps) {
    const handleBlogClick = () => {
        onSelectBlog(id);
    };

    return (
        <Link
            key={id}
            href={`/news/${id}`}
            onClick={handleBlogClick}
        >
            <div className="mx-auto w-[90%] md:w-[70%]">
                <div
                    className={`flex justify-between border border-background py-8 mx-auto text-center min-h-20 ${
                        isVisited ? 'bg-grayLight' : 'bg-white'
                    }`}
                >
                    <ul className='flex items-center flex-1 min-w-0'>
                        <li
                            className={`font-Family_3 font-bold mx-8 flex-shrink-0 ${
                                isVisited ? 'text-sub03' : 'text-gray-300'
                            }`}
                        >
                            {format(new Date(publishedAt), 'yyyy.M.d')}
                        </li>
                        <li
                            className={`text-left font-bold flex-1 min-w-0 break-words overflow-hidden transition-colors duration-200 ${
                                isVisited ? 'text-sub03' : 'text-foreground'
                            }`}
                        >
                            {title}
                        </li>
                    </ul>
                    <ul className='flex items-center'>
                        <li className="w-20 flex justify-center">
                            <p
                                className={`font-bold ${
                                    isVisited ? 'text-sub03' : 'text-gray-300' // 矢印も同様
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