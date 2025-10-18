"use client";

import Image from "next/image";
import React from "react";

export function TopMV() {
    return (
        <div className="relative w-full h-screen bg-background z-0">
            {/* 左上の画像 */}
            <div className={`
                absolute opacity-0 animate-fadeInMoreSoft z-10
                left-[-10%] top-[5%] w-[300px] h-[150px]
                md:left-[-10%] md:w-[450px] md:h-[200px]
                lg:left-[-5%] lg:w-[600px] lg:h-[250px]
            `}>
                <Image
                    src="/top/topMV/topBack1.svg"
                    alt="①"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 450px, 600px"
                />
            </div>

            {/* 右下の画像 */}
            <div className={`
                absolute opacity-0 animate-fadeInMoreSoft delay-500 z-30
                right-[-5%] bottom-[-3%] w-[425px] h-[325px]
                md:w-[600px] md:h-[400px]
                lg:bottom-[-15%] lg:w-[800px] lg:h-[550px]
            `}>
                <Image
                    src="/top/topMV/topBack2.svg"
                    alt="②"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 425px, (max-width: 1024px) 600px, 800px"
                />
            </div>

            {/* 左下の画像 */}
            <div className={`
                absolute opacity-0 animate-fadeInMoreSoft delay-1000 z-20
                left-[-10%] bottom-[-20%] w-[300px] h-[125px]
                md:left-[-10%] md:bottom-[-10%] md:w-[500px] md:h-[150px]
                lg:left-[-7%] lg:bottom-[-15%] lg:w-[650px] lg:h-[200px]
            `}>
                <Image
                    src="/top/topMV/topBack3.svg"
                    alt="③"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 500px, 650px"
                />
            </div>

            {/* 右上の画像 */}
            <div className={`
                absolute opacity-0 animate-fadeInMoreSoft delay-1500 z-10
                right-[-10%] top-[-2%] w-[410px] h-[150px]
                md:right-[-15%] md:top-[-5%] md:w-[600px] md:h-[275px]
                lg:right-[-15%] lg:top-[-7%] lg:w-[800px] lg:h-[350px]
            `}>
                <Image
                    src="/top/topMV/topBack4.svg"
                    alt="④"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 410px, (max-width: 1024px) 600px, 800px"
                />
            </div>

            {/* 中央の画像 */}
            <div className={`
                absolute opacity-0 animate-slide-from-bottom-right delay-2000 z-20
                left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-[450px] h-[275px]
                md:w-[800px] md:h-[400px]
                lg:w-[1000px] lg:h-[500px]
            `}>
                <Image
                    src="/top/topBackCent.svg"
                    alt="最後に右下から中央に移動するアイコン"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 450px, (max-width: 1024px) 800px, 1000px"
                />
            </div>

            {/* 左の画像グループ */}
            <div
                className={`
                    hidden md:block
                    absolute z-10 opacity-0 animate-slide-from-top-right delay-2000
                    left-[5%] top-[65%] w-[150px] h-[150px]
                    md:w-[250px] md:h-[250px]
                    lg:w-[350px] lg:h-[350px]
                `}
            >
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/top/topMV/backCircleLeft.svg"
                        alt="右上から左下に移動する円"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 150px, (max-width: 1024px) 250px, 350px"
                    />
                </div>
                <div className={`
                    absolute
                    top-[-30%] left-[-20%] w-1/2 h-1/2 rotate-[12deg]
                `}>
                    <Image
                        src="/top/backLine.svg"
                        alt="右上から左下に移動する線"
                        fill
                        className="object-contain"
                        sizes="100px"
                    />
                </div>
            </div>

            {/* 上の画像グループ */}
            <div
                className={`
                    absolute z-20 opacity-0 animate-slide-from-top-right delay-2000
                    left-[10%] top-[10%] w-[150px] h-[150px]
                    md:left-[35%] md:top-[5%]
                    md:w-[250px] md:h-[250px]
                    lg:w-[350px] lg:h-[350px]
                `}
            >
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/top/topMV/backCircleLeft.svg"
                        alt="中央上に移動する円"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 150px, (max-width: 1024px) 250px, 350px"
                    />
                </div>
                <div className={`
                    absolute
                    top-[-20%] right-[-45%]
                    md:top-[-5%] md:right-[0%]
                    md:w-1/2 md:h-1/2 md:rotate-[12deg]
                `}>
                    <Image
                        src="/top/backLine.svg"
                        alt="線"
                        fill
                        className="object-contain"
                        sizes="100px"
                    />
                </div>
            </div>

            {/* 右の画像グループ */}
            <div
                className={`
                    absolute z-20 opacity-0 animate-slide-from-top-right delay-2000
                    right-[10%] bottom-[-20%] w-[150px] h-[150px]
                    md:right-0 md:bottom-[25%]
                    md:w-[250px] md:h-[250px]
                    lg:w-[350px] lg:h-[350px]
                `}
            >
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/top/topMV/backCircleRight.svg"
                        alt="右下に移動する円"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 150px, (max-width: 1024px) 250px, 350px"
                    />
                </div>
                <div className={`
                    absolute
                    top-[-20%] right-[-45%]
                    md:top-[-5%] md:right-[10%]
                    md:w-1/2 md:h-1/2 md:rotate-[12deg]
                `}>
                    <Image
                        src="/top/backLine.svg"
                        alt="線"
                        fill
                        className="object-contain"
                        sizes="100px"
                    />
                </div>
            </div>

            {/* テキスト */}
            <div className={`
                absolute w-full flex justify-center items-center
                bottom-[50px]
                md:items-end md:justify-end
                md:right-20 md:bottom-[50px]
                z-30
            `}>
                <div
                    className={`
                        opacity-0 animate-fadeInMoreSoft delay-3500
                        text-white font-bold font-Family3
                    `}
                >
                <p className="text-4xl md:text-5xl text-center mb-5">SHAPING THE FUTURE</p>
                <p className="text-4xl md:text-5xl text-right mb-5">WITH TECHNOLOGY</p>
                <p className="text-3xl md:text-4xl text-right">未来を翔ける 価値を造る。</p>
                </div>
            </div>
        </div>
    );
}
