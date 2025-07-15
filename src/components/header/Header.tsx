"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Logo} from "../shared/logo";
import { HeaderNav } from "./HeaderNav";
import { HeaderMobileMenu } from "./HeaderMobileMenu";

export function Header () {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > window.innerHeight + 150);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const viewportHeight = window.innerHeight;
            const pageHeight = document.body.scrollHeight;

            setScrolled(scrollTop > viewportHeight + 150);
            setIsAtBottom(scrollTop + viewportHeight >= pageHeight - 50);
        }

            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`
            w-full fixed top-0 left-0 z-50 transition-colors duration-300
            ${isAtBottom ? "opacity-0 pointer-events-none" : "opacity-100"}
            ${ scrolled ? "bg-white shadow-md" : "bg-transparent"}
        `}>
            <div className="w-full px-6 py-3 flex justify-between items-center">
                <Logo />
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
            </div>

            {/* SPメニュー */}
            {isOpen && <HeaderMobileMenu onClose={() => setIsOpen(false)} />}
        </header>
    );
};