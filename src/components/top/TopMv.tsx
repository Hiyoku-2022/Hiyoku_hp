"use client";

import Image from "next/image";
import React from "react";

export function TopMV() {
    return (
        <div className="relative w-full h-screen overflow-x-hidden bg-background z-0">

            {/* 左上の画像 */}
            <Image
                src="/top/topBack1.png"
                alt="①"
                width={600}
                height={250}
                className={`
                    absolute opacity-0 animate-fadeInMoreSoft z-10
                    left-[-50px] top-10 w-[250px] h-[125px]
                    md:left-[-50px] md:top-0 md:w-[450px] md:h-[200px]
                    lg:left-[-70px] lg:top-[-5px] lg:w-[600px] lg:h-[250px]
                `}
            />

            {/* 右下の画像 */}
            <Image
                src="/top/topBack2.png"
                alt="②"
                width={800}
                height={600}
                className={`
                    absolute opacity-0 animate-fadeInMoreSoft delay-500 z-30
                    right-[-20px] bottom-20 w-[250px] h-[175px]
                    md:right-[-50px] md:bottom-[-10px] md:w-[600px] md:h-[400px]
                    lg:right-[-100px] lg:bottom-[-200px] lg:w-[800px] lg:h-[600px]
                `}
            />

            {/* 左下の画像 */}
            <Image
                src="/top/topBack3.png"
                alt="③"
                width={600}
                height={200}
                className={`
                    absolute opacity-0 animate-fadeInMoreSoft delay-1000 z-20
                    left-[-60px] bottom-[-20px] w-[240px] h-[80px]
                    md:left-[-70px] md:bottom-0 md:w-[500px] md:h-[150px]
                    lg:left-[-100px] lg:bottom-[-120px] lg:w-[600px] lg:h-[200px]
                `}
            />

            {/* 右上の画像 */}
            <Image
                src="/top/topBack4.png"
                alt="④"
                width={800}
                height={350}
                className={`
                    absolute opacity-0 animate-fadeInMoreSoft delay-1500 z-10
                    right-[-50px] top-[-10px] w-[300px] h-[125px]
                    md:right-[-150px] md:top-[-25px] md:w-[600px] md:h-[275px]
                    lg:right-[-200px] lg:top-[-50px] lg:w-[800px] lg:h-[350px]
                `}
            />

            {/* 中央の画像 */}
            <Image
                src="/top/topBackCent.png"
                alt="最後に右下から中央に移動するアイコン"
                width={1000}
                height={500}
                className={`
                    absolute opacity-0 animate-slide-from-bottom-right delay-2000 z-20
                    left-1/2 top-1/2 w-[300px] h-[150px]
                    md:w-[800px] md:h-[350px]
                    lg:w-[1000px] lg:h-[450px]
                `}
            />

            {/* 左下の画像グループ */}
            <div
                className={`
                    absolute z-20 opacity-0 animate-slide-from-top-right delay-2000
                    left-[5%] top-[75%] w-[100px] h-[100px]
                    md:w-[250px] md:h-[250px]
                    lg:w-[400px] lg:h-[400px]
                `}
            >
                <Image
                    src="/top/backCircleLeft.png"
                    alt="右上から左下に移動する円"
                    width={500}
                    height={500}
                    className="absolute inset-0 w-full h-full"
                />
                <Image
                    src="/top/backLine.png"
                    alt="右上から左下に移動する線"
                    width={400}
                    height={400}
                    className="absolute top-[-30%] left-[-20%] w-1/2 h-1/2 rotate-[12deg]"
                />
            </div>

            {/* 中央上の画像グループ */}
            <div
                className={`
                    absolute z-20 opacity-0 animate-slide-from-top-right delay-2000
                    left-[30%] top-[5%] w-[100px] h-[100px]
                    md:w-[250px] md:h-[250px]
                    lg:w-[400px] lg:h-[400px]
                `}
            >
                <Image
                    src="/top/backCircleLeft.png"
                    alt="中央上に移動する円"
                    width={500}
                    height={500}
                    className="absolute inset-0 w-full h-full"
                />
                <Image
                    src="/top/backLine.png"
                    alt="線"
                    width={400}
                    height={400}
                    className="absolute top-[-5%] right-[0%] w-1/2 h-1/2 rotate-[12deg]"
                />
            </div>

            {/* 右真ん中の画像グループ */}
            <div
                className={`
                    absolute z-20 opacity-0 animate-slide-from-top-right delay-2000
                    right-[0%] bottom-[25%] w-[100px] h-[100px]
                    md:w-[250px] md:h-[250px]
                    lg:w-[400px] lg:h-[400px]
                `}
            >
                <Image
                src="/top/backCircleRight.png"
                alt="右下に移動する円"
                width={500}
                height={500}
                className="absolute inset-0 w-full h-full"
                />
                <Image
                src="/top/backLine.png"
                alt="線"
                width={400}
                height={400}
                className="absolute top-[-5%] right-[10%] w-1/2 h-1/2 rotate-[12deg]"
                />
            </div>

            {/* テキスト */}
            <div className={`
                absolute w-full flex justify-center items-center
                bottom-[100px]
                md:items-end md:justify-end
                md:right-10 md:bottom-[20px]
                lg:right-20 lg:bottom-[100px]
                z-30
            `}>
                <p
                    className={`
                        opacity-0 animate-fadeInMoreSoft delay-3500
                        text-white font-bold font-Family3 text-right
                        text-xl md:text-3xl
                    `}
                >
                テキストテキストテキストテキストテキスト<br />
                テキストテキストテキストテキスト<br />
                テキストテキストテキスト。
                </p>
            </div>
        </div>
    );
}
