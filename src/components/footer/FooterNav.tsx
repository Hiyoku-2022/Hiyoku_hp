import React from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { label: "私たちについて", href: "/about-us" },
    { label: "プロダクト", href: "/service" },
    { label: "お知らせ", href: "/news" },
    { label: "採用情報", href: "/recruit" },
];

export const FooterNav = () => (
    <div>
        <div className="flex items-center space-x-2 mb-2">
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
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
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
);
