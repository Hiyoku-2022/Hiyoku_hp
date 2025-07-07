'use client';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Header } from "@/components/header/Header";
import { useState, useEffect } from 'react';
import PageTitle from './PageTitle';

type BreadcrumbItem = {
    label: string;
    href?: string;
};

type PankuzuProps = {
    japaneseTitle: string;
    englishTitle: string;
    breadcrumbs?: BreadcrumbItem[];
}

export default function Pankuzu({ japaneseTitle, englishTitle, breadcrumbs }: PankuzuProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // SSR時は絶対にパンくずリストを表示しない
    if (!mounted) {
        return (
            <>
                <div className="transition-all duration-300 opacity-100">
                    <Header />
                </div>
                <PageTitle
                 japaneseTitle={japaneseTitle}
                 englishTitle={englishTitle}
                />
            </>
        );
    }

    return (
        <>
            <div className={`transition-all duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <Header />
            </div>
            <PageTitle
                 japaneseTitle={japaneseTitle}
                 englishTitle={englishTitle}
            />
            {/* パンくずリスト（マウント後かつスクロール後のみ表示） */}
            {breadcrumbs && breadcrumbs.length > 0 && isScrolled && (
                <nav className="flex bt-4 bx-8 text-sm text-gray-600 transition-all duration-300 fixed top-0 left-0 right-0 z-50 py-4 px-8">
                    <Link href="/" className="flex items-center hover:text-blue-600 transition-colors">
                        TOP
                    </Link>
                    {breadcrumbs.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <ChevronRight size={16} className="mx-2 text-gray-400" />
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-gray-800 font-medium">{item.label}</span>
                            )}
                        </div>
                    ))}
                </nav>
            )}
        </>
    );
}