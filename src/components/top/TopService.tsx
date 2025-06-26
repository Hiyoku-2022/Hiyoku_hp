import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonWithIcon } from "../ui/button";
import { ChevronRight } from "lucide-react";

export function TopService() {
    return (
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center md:grid md:grid-cols-2 md:gap-8 md:items-start">
            <div>
                <h1 className="text-xl font-bold mb-6">プロダクト</h1>
                <p className="text-gray-700">Re-Light LMS</p>
                <Image src="/top/topService.png" alt="Site logo icon" width={150} height={150} />
            </div>
            <div>
                <p className="text-gray-700">シリコンバレーや世界的なIT企業ではマストな知識であるコンピュータサイエンスを 習得します。アルゴリズムを徹底的に鍛え、問題解決能力を飛躍的に向上させます。
                    LMSによる進捗管理はもちろん、AIによる質疑回答で24時間いつでも質問可能です。 各々のスタイルに合わせて学習できます。 また、多忙なスケジュールの担当者のリソースを割かず教育することが可能です。
                </p>
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