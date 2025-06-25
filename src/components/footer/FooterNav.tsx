import React from "react";
import Link from "next/link";
import { HiyokuLogo } from "../shared/logo";

const navLinks = [
    { label: "私たちについて", href: "/about-us" },
    { label: "プロダクト", href: "/service" },
    { label: "お知らせ", href: "/news" },
    { label: "採用情報", href: "/recruit" },
];

export function FooterNav() {
return (
    <div>
        <div className="flex items-center space-x-2 mb-2">
            <HiyokuLogo />
        </div>
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            {navLinks.map((link) => (
                <Link
                    href={link.href}
                    key={link.label}
                    className="hover:text-blue-600 transition-colors"
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    </div>
);
}
