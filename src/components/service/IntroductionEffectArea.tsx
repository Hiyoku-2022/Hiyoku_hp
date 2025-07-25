import React from "react";
import Image from "next/image";

const contents = [
    {
        id: 1,
        img: "/service/imagePc.svg",
        title:"活躍できるエンジニアを育てる",
        text: "シリコンバレーや世界的なIT企業ではマストな知識であるコンピュータサイエンスも習得します。\nアルゴリズムを徹底的に鍛え、問題解決能力を飛躍的に向上させます。"
    },
    {
        id: 2,
        img: "/service/imageHourGrass.svg",
        title:"教育担当者の負担が激減する",
        text: "LMSによる進捗管理はもちろん、AIによる質疑回答で24時間いつでも質問可能です。各々のスタイルに合わせて学習できます。\nまた、多忙なスケジュールの担当者のリソースを割かず教育することが可能です。"
    },
    {
        id: 3,
        img: "/service/imageMemo.svg",
        title:"各種助成金に対応",
        text: "助成金で最大75%の研修費の助成率！研修費の大幅な負担削減が可能となります。\n料金に関してはカスタマイズ内容によって変動しますので、お問い合わせください。"
    },
];

export function IntroductionEffectArea () {
    return (
        <div className={`
            relative
            w-full min-h-screen
            flex flex-col justify-center items-center
            bg-[url('/service/introductionEffectAreaBgSp.svg')]
            bg-top bg-no-repeat bg-cover
            md:bg-[url('/service/introductionEffectAreaBgPc.svg')]
            md:max-md:bg-contain md:max-md:bg-no-repeat md:max-md:bg-top
            overflow-hidden
        `}>
            {/* 逆三角形 */}
            <div className="absolute top-0 left-0 w-full h-[100px] z-10 bg-background [clip-path:polygon(50%_80%,0_0,100%_0)] pointer-events-none" />

                <div className="pt-[150px] text-center text-white md:space-y-5">
                    <div className="flex flex-row items-center">
                        <Image
                            src="service/checkText.svg"
                            alt=""
                            width={400}
                            height={50}
                            className="w-[400px]"
                        />
                    </div>
                    <div className="font-Family_2 text-4xl md:text-5xl leading-relaxed tracking-wide">
                        <p>INTRODUCTION</p>
                        <p>EFFECTS</p>
                    </div>
                    <p className="text-xl md:text-2xl tracking-wide font-semibold">導入するメリット</p>
                </div>
            <div className="flex flex-col md:flex-row items-center w-full justify-center gap-6 md:space-x-10 mt-10 z-30">
                {contents.map(({ id, img, title, text }) => (
                    <div
                        key={id}
                        className="flex flex-col items-center w-[80%] md:w-[300px] mb-[50px] relative"
                    >
                        {/* コンテンツエリア */}
                        <div className="flex flex-col w-full overflow-hidden rounded-lg shadow-md">
                            <div className="relative w-full h-[275px] bg-sub05 flex justify-center items-center">
                                <Image
                                    src={img}
                                    alt=""
                                    width={200}
                                    height={200}
                                    className="w-[80%] h-[80%]"
                                />
                                {/* 数字エリア（中央上に重ねる） */}
                                <div className={`
                                    absolute bottom-0 left-1/2 -translate-x-1/2 z-10
                                    w-[100px] h-[50px]
                                    rounded-t-full bg-white border border-white
                                    flex items-end justify-center
                                `}>
                                    <p className="text-sub03 text-3xl leading-none">{id}</p>
                                </div>
                            </div>

                            {/* テキストエリア */}
                            <div className={`
                                w-full h-[275px]
                                bg-white
                                text-lg md:text-lg font-semibold
                                flex flex-col justify-center items-center p-4 max-md:space-y-5
                            `}>
                                <p className="text-center text-sub03 mb-3">{title}</p>
                                <p className="text-start">{text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}