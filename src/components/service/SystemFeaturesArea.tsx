import React from "react";
import Image from "next/image";

export function SystemFeaturesArea () {

    const data = [
        {
            label: "01",
            src: "/service/image01.svg",
            title:"コンピューターサイエンスを学べる",
            text:"複雑な問題を論理的に分析し、解決策を見つけるスキルが身につけることができ、コンピュータやソフトウェアを効果的に利用できる能力が養われます。また、プログラミングやデザインを通じて新しいアイデアを形にする力が得られます。更に構造的なアプローチで問題を考える力が育まれ、現代社会におけるテクノロジーの基礎が理解できるようになります。現場ではプロジェクトを通じて他者との協力が求められるため、対人スキルが向上します。これらのメリットは、学習を通じて多方面に活かせる能力を身につけることにつながります。"
        },
        {
            label: "02",
            src: "/service/image02.svg",
            title:"LMS（ラーニング・マネジメント・システム）による進捗管理",
            text:"現代のIT環境は日々変化し、プロフェッショナルとしてのスキルや知識も常にアップデートが求められます。そこで登場するのが、業務や段階に合わせた教育コンテンツを選べるイーラーニングシステムRe-Lightです。このシステムは学習の進捗を可視化する機能を搭載しており、効果的なスキルアップをサポートしています。仕事の質を向上させるための最適な学びの場を提供すべく、日々コンテンツをアップデートしています。（イラストはイメージです）"
        },
        {
            label: "03",
            src: "/service/image03.svg",
            title:"使いやすいUI",
            text:"私たちのイーラーニングシステムは、使いやすさを最優先に設計されています。直感的なUI（ユーザーインターフェース）により、初めての方でも迷うことなく操作が可能です。操作に無駄なストレスを掛けず、学習に集中することができます。"
        },
        {
            label: "04",
            src: "/service/image04.svg",
            title:"AIによる学習サポート",
            text:"LMSによる進捗管理はもちろん、AIによる質疑回答で24時間いつでも質問可能。ライフスタイルに合わせて学習できます。教育における開発会社の最大の悩みである多忙なスケジュールの担当者のリソースを割かず教育することが可能です。"
        },
    ];

    return (
        <div className="w-full min:h-screen flex flex-col justify-center items-center text-center bg-white space-y-20 py-[100px]">
            <div className="space-y-5">
                <p className="font-Family_2 text-4xl md:text-5xl tracking-widest">SYSTEM<span className="md:hidden"><br /></span>FEATURES</p>
                <p className="text-xl md:text-2xl text-sub01 tracking-wide font-semibold">システムの特徴</p>
            </div>
            <div className="flex flex-col space-y-10">
                {data.map(({ label, src, title, text }) => (
                    <div
                        key={label}
                        className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-20"
                    >
                        <div className={`
                            flex justify-center items-center
                            w-[80%] md:w-[20%]
                            aspect-square rounded-[180px] md:rounded-[125px] overflow-hidden bg-sub05 z-10
                        `}>
                            <Image
                                src={src}
                                alt={`${label} image`}
                                width={200}
                                height={200}
                                className="w-full h-full object-cover z-20"
                            />
                        </div>
                        <div className="w-[90%] md:w-[35%] space-y-3 md:space-y-5">
                            <p className="rounded-full bg-white text-sm border border-black text-center w-[50px] font-semibold">{label}</p>
                            <p className="text-start text-2xl leading-relaxed">{title}</p>
                            <p className="text-start leading-relaxed">{text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}