import React from "react";

export function TopArea () {
    return (
        <div className={`
            w-full h-screen
            flex justify-center items-center
            bg-[url('/service/topBgSp.svg')]
            md:bg-[url('/service/topBgPc.svg')]
            bg-center bg-contain bg-cover
        `}>
            <div className={`
                flex flex-col md:flex-row justify-center items-center
                w-[80%] space-y-5 md:space-y-0
                text-white text-center
            `}>
                <div className="md:w-[50%] text-center">
                    <p className="font-Family_2 text-5xl md:text-6xl tracking-widest">Re-Light LMS</p>
                </div>
                <div className="md:w-[50%] text-center md:text-start leading-relaxed">
                    <div className="text-3xl md:text-4xl tracking-wide font-bold space-y-3 mb-5">
                        <p>世界を舞台に活躍できる</p>
                        <p>エンジニアを育成する</p>
                    </div>
                    <div className="leading-relaxed">
                        <p>Hiyokuは2022年に“Re-Light”というLMSをリリースしました。</p>
                        <p className="mb-5 md:mb-0">それから現在まで様々なクライアント様にご好評頂いております。</p>
                        <p className="mb-5 md:mb-0">私たちHiyokuは現場の多忙な教育担当者の業務のリソースを割かず、”本物のエンジニアを育てる”ことに特化した実績のあるLMSです。</p>
                        <p>ぜひ御社の人材教育に<span className="md:hidden"><br /></span>Re-Lightをご活用ください!</p>
                    </div>
                </div>
            </div>
        </div>

    )
}