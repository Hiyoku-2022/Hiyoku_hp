// 「hiyokuについて」コンポーネント
'use client';
import HeadTitle from "./HeadTitle";
import HiyokuDetail from "./HiyokuDetail";
import { HoverShapeButtonWithIcon } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutHiyoku() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/about-us');
    };

    return (
        <>
            <HeadTitle>Hiyokuについて</HeadTitle>
            <p className="text-sm lg:text-base text-center mx-auto my-8 w-[70%] md:w-[70%]">
                福岡に本社を構える私たちHiyokuは、
                <br/>教育とITの力を融合させるエデュケーションテック企業です。
                <br/>自社開発の革新的なラーニングシステムを軸に、
                <br/>企業向け開発・販売、受託開発、そしてSES事業を展開しています。
                <br/>少数の精鋭メンバーで構成されており、
                <br/>だからこそ一人ひとりのアイデアや意見が事業に直結するスピード感と柔軟性が自慢。
                <br/>あなたの「やってみたい！」が、明日には現実になるかもしれません。
            </p>
            <div className="flex justify-center mx-auto">
                <HiyokuDetail />
            </div>
            <div className="flex justify-center my-[50px]">
                <HoverShapeButtonWithIcon
                    variant="blue"
                    icon={<ChevronRight className="w-4 h-4 transition-colors m-[10px]" />}
                    onClick={handleClick}
                >
                    会社について詳しくみる
                </HoverShapeButtonWithIcon>
            </div>
        </>
    );
}