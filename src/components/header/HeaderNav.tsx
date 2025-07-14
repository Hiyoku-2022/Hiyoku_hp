"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ButtonWithIcon, TopRoundedButton, BottomRoundedButton } from "../ui/button";

const navLinks = [
    { label: "私たちについて", href: "/about-us" },
    { label: "プロダクト", href: "/service" },
    { label: "お知らせ", href: "/news" },
    { label: "採用情報", href: "/recruit" },
];

export function HeaderNav () {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="hidden lg:flex items-center space-x-3">
            {navLinks.map((link) => (
                <Link
                    key={link.label}
                    href={link.href}
                    className="text-foreground group relative"
                >
                    <span className="inline-block pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 group-hover:after:w-full">
                        {link.label}
                    </span>
                </Link>
            ))}
            <div ref={menuRef} className="relative mx-auto text-center">
                <ButtonWithIcon
                    variant="blue"
                    icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                    className="w-[200px]"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    お問い合わせ
                </ButtonWithIcon>

                {isOpen && (
                    <div className={`
                        absolute top-full mt-6
                        left-1/2 -translate-x-1/2
                        flex flex-col items-center
                        z-50
                    `}>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe16SRGMa40iGYzQFxmUkW_7G3LgIjJ_n9F83eDSH1nAkObHg/viewform?usp=sharing&ouid=103342829539540884944">
                            <TopRoundedButton
                                variant="ghostBlue"
                                className="w-[150px] z-20"
                            >
                                <p className="whitespace-pre-line">LMSについての{'\n'}お問い合わせ</p>
                            </TopRoundedButton>
                        </Link>

                        <div className="w-[150px] h-px bg-grayMiddle" />

                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeLNJ7LVm7ITzvnTyiEWzsd40LMbp0nRtgqGJkjSabq02IHgQ/viewform?usp=sharing&ouid=103342829539540884944">
                            <BottomRoundedButton
                                variant="ghostBlue"
                                className="w-[150px] z-30"
                            >
                                <p className="whitespace-pre-line">採用についての{'\n'}お問い合わせ</p>
                            </BottomRoundedButton>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
};
