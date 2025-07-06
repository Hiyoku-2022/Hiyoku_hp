import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonWithIcon } from "../ui/button";
import { ChevronRight } from "lucide-react";

export function TopService() {
    return (
        <div>
            <div className="relative pt-20 px-4 max-w-4xl mx-auto text-center mb-5 z-40">
                <h1 className="text-foreground text-lg underline underline-offset-4 pb-5">プロダクト</h1>
                <p className="text-foreground text-3xl pb-5">Re-Light LMS</p>
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
                        src="/top/topService.png"
                        alt="Service image"
                        width={500}
                        height={500}
                        className="w-full max-w-[300px] md:max-w-[400px] object-contain"
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
                    >
                        詳しく見る
                    </ButtonWithIcon>
                </Link>
            </div>
        </div>
    )
}