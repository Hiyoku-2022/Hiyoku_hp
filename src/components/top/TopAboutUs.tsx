import React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonWithIcon } from "../ui/button";
import { ChevronRight } from "lucide-react";

export function TopAboutUS() {
    const [visibleIndex, setVisibleIndex] = useState<number[]>([]);
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    const visibleSet = useRef<Set<number>>(new Set());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute("data-index"));
                    if (entry.isIntersecting && !visibleSet.current.has(index)) {
                        visibleSet.current.add(index);
                        entry.target.classList.add("animate-fadeInMoreSoft");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        refs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            refs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [visibleIndex]);

    const data = [
        { label: "What", src: "/top/what.svg", text:"本物のエンジニア育成で\nIT業界を支えます" },
        { label: "Why", src: "/top/why.svg", text:"本当に価値のある技術者育成を\n日本から世界へ広げていきます" },
        { label: "How", src: "/top/how.svg", text:"最新技術を活用して\n最適な学び提供します" },
    ];

    return (
        <div className="relative">
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
                    z-40
                    max-w-5xl mx-auto px-4 mb-5
                    flex flex-col items-center
                    md:grid md:grid-cols-3 md:gap-5 md:items-start
                `}
            >
                {data.map(({ label, src, text }, i) => (
                    <div
                        key={label}
                        ref={(el) => {refs.current[i] = el; }}
                        data-index={i}
                        className={`
                            flex flex-col items-center text-center
                            w-full max-w-sm mx-auto space-y-3 mb-3
                            opacity-0
                            ${visibleIndex.includes(i) ? "animate-fadeInMoreSoft" : ""}
                        `}
                        style={{ animationDelay: `${i * 0.5}s` }}
                    >
                        <p className="rounded-full bg-white text-base px-6 font-medium">{label}</p>
                        <div className="w-[50%] md:w-[75%] aspect-square rounded-[80px] md:rounded-[100px] overflow-hidden z-10">
                            <Image
                                src={src}
                                alt={`${label} image`}
                                width={275}
                                height={275}
                                className="w-full h-full object-cover  z-20"
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
                        className="w-[200px]"
                    >
                        テキスト
                    </ButtonWithIcon>
                </Link>
            </div>


            <Image
                src="/top/topAboutUsRight.svg"
                alt="右"
                width={600}
                height={200}
                className={`
                    hidden md:block
                    absolute z-0 pointer-events-none
                    right-[-20%] top-[25%]
                    md:w-[500px] md:h-[150px]
                    lg:w-[650px] lg:h-[200px]
                    z-0
                `}
            />
            <Image
                src="/top/topAboutUsLeft.svg"
                alt="左"
                width={600}
                height={200}
                className={`
                    absolute pointer-events-none
                    left-[-20%] bottom-[-10%] w-[300px] h-[125px]
                    md:left-[-15%] md:bottom-[-15%] md:w-[500px] md:h-[150px]
                    lg:w-[650px] lg:h-[200px]
                    z-0
                `}
            />
            <div
                className={`
                    absolute
                    right-[5%] bottom-[-25%] w-[150px] h-[150px]
                    md:right-[5%] md:bottom-[-35%] md:w-[250px] md:h-[250px]
                    lg:w-[350px] lg:h-[350px]
                    z-0
                `}
            >
                <Image
                    src="/top/topAboutUsCircle.svg"
                    alt="右下の円"
                    width={500}
                    height={500}
                    className="absolute inset-0 w-full h-full"
                />
                <Image
                    src="/top/backLine.svg"
                    alt="右下の線"
                    width={400}
                    height={400}
                    className="absolute top-[-20%] right-[-45%]"
                />
            </div>
        </div>
    )
}