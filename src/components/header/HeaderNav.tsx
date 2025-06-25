"use client";

import Link from "next/link";
import { ButtonWithIcon } from "../ui/ButtonWithIcon";

const navLinks = [
    { label: "私たちについて", href: "/about-us" },
    { label: "プロダクト", href: "/service" },
    { label: "お知らせ", href: "/news" },
    { label: "採用情報", href: "/recruit" },
];

export const HeaderNav = () => (
    <nav className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
            <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
            >
                {link.label}
            </Link>
        ))}
        <ButtonWithIcon
            variant="primary"
            iconSrc="/news/blogdetail.png"
            iconAlt=""
        >
            お問い合わせ
        </ButtonWithIcon>
    </nav>
);
