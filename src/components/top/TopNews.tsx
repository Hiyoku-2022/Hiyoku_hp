'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BlogTitleList from '../news/BlogTitleList';
import { ChevronRight } from 'lucide-react';
import {HoverShapeButtonWithIcon} from "../ui/button/HoverShapeButtonWithIcon"

const VISITED_BLOG_IDS_KEY = 'visitedBlogIds';

export function TopNews() {
    const router = useRouter();
    const [visitedBlogIds, setVisitedBlogIds] = useState<string[]>(() => {
        if (typeof window !== 'undefined') { 
            const savedIds = localStorage.getItem(VISITED_BLOG_IDS_KEY);
            return savedIds ? JSON.parse(savedIds) : [];
        }
        return [];
    });

    useEffect(() => {
        if (typeof window !== 'undefined') { 
            localStorage.setItem(VISITED_BLOG_IDS_KEY, JSON.stringify(visitedBlogIds));
        }
    }, [visitedBlogIds]);

    const handleSelectBlog = (id: string) => {
        console.log('--- TopNews (homepage section): handleSelectBlog が呼び出されました。ID:', id);
        if (!visitedBlogIds.includes(id)) {
            setVisitedBlogIds(prev => [...prev, id]);
        }
        router.push(`/news/${id}`);
        console.log('--- TopNews (homepage section): router.push を呼び出しました。パス:', `/news/${id}`);
    };

    const handleBackToList = () => {
        router.push('/news');
    };

    return (
        <>
            <div className="relative z-40 my-16 w-auto">
                <p className="text-center font-Family_3 font-bold text-[56px]">NEWS</p>
                <p className="text-center font-bold font-Family_1 text-[16px]">ニュース</p>
            </div>
            <div className="my-16">
                <BlogTitleList
                    onSelectBlog={handleSelectBlog}
                    visitedBlogIds={visitedBlogIds}
                    itemPerPage={4} //4件のみ表示するように設定
                />
            </div>
            <div className="flex justify-center">
                <HoverShapeButtonWithIcon
                    variant="blue"
                    icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                    onClick={handleBackToList}
                    className="w-48 py-4"
                >
                    NEWS一覧を見る
                </HoverShapeButtonWithIcon>
            </div>
        </>
    );
}