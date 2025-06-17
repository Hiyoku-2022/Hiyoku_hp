"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import Image from "next/image";

const navLinks = [
    { label: "私たちについて", href: "/about-us" },
    { label: "プロダクト", href: "/service" },
    { label: "お知らせ", href: "/news" },
    { label: "採用情報", href: "/recruit" },
];

export const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-10 mt-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
                <div className="space-y-4 max-w-md">
                    <div className="flex items-center space-x-2">
                        <Image
                            aria-hidden
                            src="/icon/favicon.ico"
                            alt="Site icon"
                            width={24}
                            height={24}
                        />
                        <Image
                            aria-hidden
                            src="/icon/name.png"
                            alt="Site logo icon"
                            width={100}
                            height={24}
                        />
                    </div>
                    <p className="text-xl">CONTACT US</p>
                    <p className="text-sm">
                        ご相談・ご質問、各種サービス導入、採用については
                        <br />
                        こちらよりお問い合わせください。
                    </p>
                </div>
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                    <Button variant="primary">
                        LMSについてのお問い合わせ
                        <span>
                            <Image
                                aria-hidden
                                src="/news/blogdetail.png"
                                alt="Globe icon"
                                width={16}
                                height={16}
                                className="ml-2 w-4 h-4"
                            />
                        </span>
                    </Button>
                    <Button variant="outline">
                        採用についてのお問い合わせ
                        <span>
                            <Image
                                aria-hidden
                                src="/news/blogdetail.png"
                                alt="Globe icon"
                                width={16}
                                height={16}
                                className="ml-2 w-4 h-4"
                            />
                        </span>
                    </Button>
                </div>
                <nav className="flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    {navLinks.map((link) => (
                        <Link
                            href={link.href}
                            key={link.label}
                            className="hover:text-blue-600"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="mt-6 text-center text-sm text-gray-500">
                © 2025 MyCompany. All rights reserved.
            </div>
        </footer>
    );
};