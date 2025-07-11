"use client";

import { useEffect, useState } from "react";
import { X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { HoverShapeButtonWithIcon } from "../ui/button";
import { Logo } from "../shared/logo";

const navLinks = [
    { label: "私たちについて", href: "/about-us" },
    { label: "プロダクト", href: "/service" },
    { label: "お知らせ", href: "/news" },
    { label: "採用情報", href: "/recruit" },
];

type Props = {
    onClose: () => void;
};

export function HeaderMobileMenu({ onClose }: Props) {
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
        document.body.style.overflow = "hidden";

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        document.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 bg-background bg-opacity-95 flex flex-col items-center justify-center z-50 transition-all duration-300 ${
                isAnimatingOut ? "animate-fadeOutSoft" : "animate-fadeInSoft"
            }`}
        >
            <button className="absolute top-3 right-6" onClick={handleClose}>
                <X
                    size={28}
                    className="w-8 h-8"
                />
            </button>

            <div className="flex items-center space-x-2 mb-6">
                <Logo />
            </div>

            <nav className="flex flex-col items-center space-y-6 text-lg mb-6">
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={handleClose}
                        className="text-foreground group relative"
                    >
                        <span className="inline-block pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 group-hover:after:w-full">
                            {link.label}
                        </span>
                    </Link>
                ))}
            </nav>

            <div className="flex flex-col items-center space-y-5 w-4/5 max-w-sm">
                <Link href="/">
                    <HoverShapeButtonWithIcon
                        variant="softBlue"
                        icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                        className="w-80 py-3"
                    >
                        LMSについてのお問い合わせ
                    </HoverShapeButtonWithIcon>
                </Link>
                <Link href="/">
                    <HoverShapeButtonWithIcon
                        variant="softOrange"
                        icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                        className="w-80 py-3"
                    >
                        採用についてのお問い合わせ
                    </HoverShapeButtonWithIcon>
                </Link>
            </div>
        </div>
    );
};
