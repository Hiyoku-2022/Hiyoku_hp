"use client";

import { useEffect, useState } from "react";
import { X, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HoverShapeButtonWithIcon } from "../ui/button";

const navLinks = [
    { label: "私たちについて", href: "/about-us" },
    { label: "プロダクト", href: "/service" },
    { label: "お知らせ", href: "/news" },
    { label: "採用情報", href: "/recruit" },
];

type Props = {
    onClose: () => void;
};

export const HeaderMobileMenu = ({ onClose }: Props) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);

    const handleClose = () => {
        setIsAnimatingOut(true);
        setTimeout(() => {
        setIsVisible(false);
        onClose(); // メニューを閉じる外部処理
        }, 400); // fadeOutSoftと同じduration
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 bg-background bg-opacity-95 flex flex-col items-center justify-center z-50 transition-all duration-300 ${
                isAnimatingOut ? "animate-fadeOutSoft" : "animate-fadeInSoft"
            }`}
        >
            <button className="absolute top-4 right-4" onClick={handleClose}>
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
                        onClick={handleClose}
                        className="text-gray-800 hover:text-blue-600"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className="flex flex-col space-y-4 w-4/5 max-w-sm">
                <HoverShapeButtonWithIcon
                    variant="softBlue"
                    icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                >
                    LMSについてのお問い合わせ
                </HoverShapeButtonWithIcon>
                <HoverShapeButtonWithIcon
                    variant="softOrange"
                    icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                >
                    採用についてのお問い合わせ
                </HoverShapeButtonWithIcon>
            </div>
        </div>
    );
};
