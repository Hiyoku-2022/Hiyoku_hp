// 各ページのTitleとパンくずリストの両方を表示する共通コンポーネント
'use client';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Header } from '@/components/header/Header';
import { useState, useEffect } from 'react';
import PageTitle from './PageTitle';
import { HeaderMobileMenu } from '../header/HeaderMobileMenu';
import { Menu } from 'lucide-react';
import { HeaderNav } from '../header/HeaderNav';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PankuzuProps {
    titleJP: string;
    subtitleEN: string;
    breadcrumbs?: BreadcrumbItem[];
}

export default function Pankuzu({ titleJP, subtitleEN, breadcrumbs = [] }: PankuzuProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };
        window.addEventListener('scroll', handleScroll);

        // Footerの表示状態を監視するIntersection Observer
        const footerObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target.tagName === 'FOOTER') {
                        setIsFooterVisible(entry.isIntersecting);
                    }
                });
            },
            {
                threshold: 0.1, // Footerが10%見えたら検知
            }
        );

        // ページ内のfooter要素を監視対象に追加
        const footerElement = document.querySelector('footer');
        if (footerElement) {
            footerObserver.observe(footerElement);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            footerObserver.disconnect();
        };
    }, []);

    // SSR時は絶対にパンくずリストを表示しない
    if (!mounted) {
        return (
            <>
                <div className="transition-all duration-300 opacity-100">
                    <Header />
                </div>
                <PageTitle titleJP={titleJP} subtitleEN={subtitleEN} />
            </>
        );
    }

    const shouldShowBreadcrumbs = breadcrumbs.length > 0 && isScrolled && !isFooterVisible;

    return (
        <>
            <div
                className={`transition-all duration-300 ${
                    isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
                <Header />
            </div>
            <PageTitle titleJP={titleJP} subtitleEN={subtitleEN} />
            {shouldShowBreadcrumbs && (
                <nav className="flex justify-between bt-4 bx-8 text-gray-600
                transition-all duration-300 fixed top-0
                left-0 right-0 py-3 px-6 bg-background z-10
                text-xs md:text-base
                w-3xs"
                >
                    <div className='flex'>
                        <div className='flex items-center'>
                            <Link
                                href="/"
                                className="transition-all duration-300 border-b border-foreground hover:border-transparent"
                            >
                                TOP
                            </Link>
                        </div>
                        {breadcrumbs.map((item, index) => (
                            <div key={index} className="flex items-center max-w-32 xl:max-w-full">
                                <ChevronRight size={16} className="mx-2 flex-shrink-0" />
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="transition-all duration-300 border-b border-foreground hover:border-transparent truncate block"
                                        title={item.label}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="font-medium truncate block" title={item.label}>{item.label}</span>
                                )}
                            </div>
                        ))}
                    </div>
                    <HeaderNav />
                    {/* ハンバーガー（SPのみ） */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(true)} aria-label="メニューを開く">
                            <Menu
                                size={28}
                                className="w-8 h-8"
                            />
                        </button>
                    </div>
                    {isOpen && <HeaderMobileMenu onClose={() => setIsOpen(false)} />}
                </nav>
            )}
        </>
    );
}