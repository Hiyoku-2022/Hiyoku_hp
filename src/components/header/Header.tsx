"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button";

const navLinks = [
    { label: "私たちについて", href: "/about-us" },
    { label: "プロダクト", href: "/service" },
    { label: "お知らせ", href: "/news" },
    { label: "採用情報", href: "/recruit" },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("keydown", handleKeyDown);
        }

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    return (
        <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Image
                        aria-hidden
                        src="/icon/favicon.ico"
                        alt="Site logo icon"
                        width={24}
                        height={24}
                    />
                    <Image
                        aria-hidden
                        src="/icon/name.png"
                        alt="Site name"
                        width={100}
                        height={24}
                    />
                </div>

                {/* PCメニュー */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            href={link.href}
                            key={link.label}
                            className="text-gray-700 hover: text-blue-600 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                        <Button variant="primary" className="ml-2">
                            お問い合わせ
                        </Button>
                </nav>

                {/* ハンバーガー */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(true)} aria-label="メニューを開く">
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* SPメニュー */}
            {isOpen && (
                <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center z-50 transition-all duration-300">
                    <button
                        className="absolute top-4 right-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={28} />
                    </button>
                    <div className="flex items-center space-x-2 mb-6">
                        <Image
                            aria-hidden
                            src="/icon/favicon.ico"
                            alt="Site logo icon"
                            width={24}
                            height={24}
                        />
                        <Image
                            aria-hidden
                            src="/icon/name.png"
                            alt="Site name"
                            width={100}
                            height={24}
                        />
                    </div>
                    <nav className="flex flex-col items-center space-y-6 text-lg">
                        {navLinks.map((link) => (
                            <Link
                                href={link.href}
                                key={link.label}
                                className="text-gray-800 hover:text-blue-600"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex flex-col space-y-4 w-4/5 max-w-sm">
                        <Button variant="primary" className="w-full flex items-center justify-center">
                            LMSについてのお問い合わせ
                            <span>
                                <Image
                                    aria-hidden
                                    src="/news/blogdetail.png"
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="ml-2 w-4 h-4"
                                />
                            </span>
                        </Button>
                        <Button variant="outline" className="w-full flex items-center justify-center">
                            採用についてのお問い合わせ
                            <span>
                                <Image
                                    aria-hidden
                                    src="/news/blogdetail.png"
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="ml-2 w-4 h-4"
                                />
                            </span>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};

