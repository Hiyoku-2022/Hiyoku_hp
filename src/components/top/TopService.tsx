import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonWithIcon } from "../ui/button";
import { ChevronRight } from "lucide-react";

export function TopService() {
    return (
        <div className="relative">
            <div className="relative pt-20 px-4 max-w-4xl mx-auto text-center mb-5 z-40">
                <h1 className="md:text-xl underline underline-offset-4 pb-5">プロダクト</h1>
                <p className="font-Family_2 text-3xl md:text-4xl pb-5">Re-Light LMS</p>
            </div>
            <div
                className={`
                    max-w-5xl mx-auto px-4 mb-5
                    grid grid-cols-1 gap-6 items-center
                    md:grid-cols-2
                `}
            >
                <div className="w-full flex justify-center">
                    <Image
                        src="/top/topService.svg"
                        alt="Service image"
                        width={500}
                        height={500}
                        className="w-full max-w-[300px] md:max-w-[400px] object-contain z-20"
                    />
                </div>

                <div className="w-[80%] md:w-full mx-auto text-left space-y-4">
                    <p className="text-base md:text-lg leading-relaxed">
                    シリコンバレーや世界的なIT企業ではマストな知識であるコンピュータサイエンスを 習得します。アルゴリズムを徹底的に鍛え、問題解決能力を飛躍的に向上させます。
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                    LMSによる進捗管理はもちろん、AIによる質疑回答で24時間いつでも質問可能です。 各々のスタイルに合わせて学習できます。 また、多忙なスケジュールの担当者のリソースを割かず教育することが可能です。
                    </p>
                </div>
            </div>

            <div className="flex justify-center">
                <Link href="/service">
                    <ButtonWithIcon
                        variant="blue"
                        icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                        className="w-48 py-3"
                    >
                        詳しく見る
                    </ButtonWithIcon>
                </Link>
            </div>


            <Image
                src="/top/topServiceRight.svg"
                alt="右"
                width={600}
                height={200}
                className={`
                    absolute pointer-events-none
                    right-[-15%] bottom-[-20%] w-[300px] h-[125px]
                    md:w-[500px] md:h-[150px]
                    lg:w-[600px] lg:h-[200px]
                    z-0
                `}
            />


            <div
                className={`
                    hidden md:block
                    absolute
                    left-[5%] bottom-[-35%]
                    md:w-[250px] md:h-[250px]
                    lg:w-[350px] lg:h-[350px]
                    z-0
                `}
            >
                <Image
                    src="/top/topAboutUsCircle.svg"
                    alt="左の円"
                    width={500}
                    height={500}
                    className="absolute inset-0 w-full h-full"
                />
                <Image
                    src="/top/backLine.svg"
                    alt="左の線"
                    width={400}
                    height={400}
                    className="absolute top-[-30%] left-[-20%] w-1/2 h-1/2 rotate-[12deg]"
                />
            </div>
        </div>
    )
}