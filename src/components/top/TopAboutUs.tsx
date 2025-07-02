import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonWithIcon } from "../ui/button";
import { ChevronRight } from "lucide-react";

export function TopAboutUS() {
    return (
        <>
            <div className="relative pt-20 px-4 max-w-4xl mx-auto text-center mb-5 z-40">
                <p className="text-foreground text-lg underline underline-offset-4 pb-5">私たちについて</p>
                <p className="text-foreground text-3xl pb-5">教育で世界の貧困差をなくす</p>
                <div className="text-foreground text-lg pb-5">
                    <p className="mb-5">私たちHiyoku合同会社は教育事業をベースに、</p>
                    <p>「価値あるものを世の中に生み出していきたい」</p>
                    <p>「本当に価値のある人材を育てていきたい」</p>
                    <p className="mb-5">そんな想いで始まった、2022年11月に誕生したスタートアップ企業です。</p>
                    <p>エンジニアとしての技術力を手に日本から海外に向けて、</p>
                    <p>世界的な社会貢献が可能な人材の育成に本気で取り組んでいます。</p>
                </div>
            </div>
            <div
                className={`
                    max-w-5xl mx-auto px-4 mb-5
                    flex flex-col items-center
                    md:grid md:grid-cols-3 md:gap-5 md:items-start
                `}
            >
                {[
                    { label: "What", src: "/top/what.png", text:"本物のエンジニア育成で\nIT業界を支えます" },
                    { label: "Why", src: "/top/why.png", text:"本当に価値のある技術者育成を\n日本から世界へ広げていきます" },
                    { label: "How", src: "/top/how.png", text:"最新技術を活用して\n最適な学び提供します" },
                ].map(({ label, src, text }) => (
                    <div
                        key={label}
                        className="flex flex-col items-center text-center w-full max-w-sm mx-auto space-y-3 mb-3"
                    >
                        <p className="rounded-full bg-white text-base px-6 font-medium">{label}</p>
                        <div className="w-[50%] md:w-[75%] aspect-square rounded-[80px] md:rounded-[100px] overflow-hidden">
                            <Image
                                src={src}
                                alt={`${label} image`}
                                width={275}
                                height={275}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-foreground text-base whitespace-pre-line">{text}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <Link href="/about-us">
                    <ButtonWithIcon
                        variant="blue"
                        icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                    >
                        私たちについて
                    </ButtonWithIcon>
                </Link>
            </div>
        </>
    )
}