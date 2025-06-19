"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonWithIcon } from "../ui/ButtonWithIcon";

const navLinks = [
    { label: "私たちについて", href: "/about-us" },
    { label: "プロダクト", href: "/service" },
    { label: "お知らせ", href: "/news" },
    { label: "採用情報", href: "/recruit" },
];

type Props = {
    onClose: () => void;
};

export const HeaderMobileMenu = ({ onClose }: Props) => (
    <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center z-50 transition-all duration-300">
        <button className="absolute top-4 right-4" onClick={onClose}>
            <X size={28} />
        </button>

        <div className="flex items-center space-x-2 mb-6">
            <Image src="/icon/favicon.ico" alt="Site logo icon" width={24} height={24} />
            <Image src="/icon/name.png" alt="Site name" width={100} height={24} />
        </div>

        <nav className="flex flex-col items-center space-y-6 text-lg mb-6">
            {navLinks.map((link) => (
                <Link
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="text-gray-800 hover:text-blue-600"
                >
                    {link.label}
                </Link>
            ))}
        </nav>

        <div className="flex flex-col space-y-4 w-4/5 max-w-sm">
            <ButtonWithIcon
                variant="outline"
                iconSrc="/news/blogdetail.png"
                iconAlt=""
            >
                LMSについてのお問い合わせ
            </ButtonWithIcon>
            <ButtonWithIcon
                variant="outline"
                iconSrc="/news/blogdetail.png"
                iconAlt=""
            >
                採用についてのお問い合わせ
            </ButtonWithIcon>
        </div>
    </div>
);
