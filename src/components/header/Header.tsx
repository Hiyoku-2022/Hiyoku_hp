"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { HeaderMobileMenu } from "./HeaderMobileMenu";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <HeaderLogo />

                <HeaderNav />

                {/* ハンバーガー（SPのみ） */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(true)} aria-label="メニューを開く">
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* SPメニュー */}
            {isOpen && <HeaderMobileMenu onClose={() => setIsOpen(false)} />}
        </header>
    );
};
