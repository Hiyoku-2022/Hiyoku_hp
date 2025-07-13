import React from "react";
import Link from "next/link";
import { LogoWhite } from "../shared/logoWhite";

const navLinks = [
    { label: "私たちについて", href: "/about-us" },
    { label: "プロダクト", href: "/service" },
    { label: "お知らせ", href: "/news" },
    { label: "採用情報", href: "/recruit" },
];

export function FooterNav() {
return (
    <div className="flex flex-col items-center md:items-start">
        <div className="mb-10">
            <LogoWhite />
        </div>
        <nav className={`
            font-bold text-white
            flex flex-col md:flex-row
            items-center md:items-start
            space-y-3 md:space-y-0 md:space-x-4
        `}>
            {navLinks.map((link) => (
                <Link
                    href={link.href}
                    key={link.label}
                    className="transition-colors group relative"
                >
                    <span className="inline-block pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                        {link.label}
                    </span>
                </Link>
            ))}
        </nav>
    </div>
);
}
