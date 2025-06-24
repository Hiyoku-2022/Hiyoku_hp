"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ButtonWithIcon } from "../ui/button";

const navLinks = [
    { label: "私たちについて", href: "/about-us" },
    { label: "プロダクト", href: "/service" },
    { label: "お知らせ", href: "/news" },
    { label: "採用情報", href: "/recruit" },
];

export function HeaderNav () {
    return (
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
                variant="blue"
                icon={<ChevronRight className="w-4 h-4 transition-colors" />}
            >
                お問い合わせ
            </ButtonWithIcon>
        </nav>
    )
};
