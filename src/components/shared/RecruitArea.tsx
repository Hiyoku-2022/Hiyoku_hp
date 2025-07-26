import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HoverShapeButtonWithIcon } from "../ui/button/HoverShapeButtonWithIcon";

export function RecruitArea() {
    return (
        <div className={`
            flex flex-col md:flex-row-reverse
            justify-center items-center md:items-stretch
            mx-auto px-4 w-[90%] xl:w-[65%]
        `}>
            <div className={`
                w-full min-h-[300px]
                md:w-2/5 md:min-h-[400px]
                flex justify-center items-center
                bg-[url('/common/SharedRecruitBg.svg')]
                bg-center bg-contain bg-cover
                rounded-t-xl md:rounded-t-none md:rounded-tr-xl md:rounded-br-xl
            `}>
                <Image
                    src="/top/topBackCent.svg"
                    alt="recruit"
                    width={500}
                    height={500}
                    className="object-contain w-[60%] h-[55%] md:w-[75%] md:h-[60%]"
                />
            </div>

            <div className={`
                w-full min-h-[400px]
                md:min-h-[400px] md:w-3/5
                flex flex-col justify-center items-center
                bg-white p-4
                rounded-b-xl md:rounded-b-none md:rounded-tl-xl md:rounded-bl-xl
            `}>
                <div className="text-center ont-Family_1">
                    <h2 className="font-bold mt-[10px] text-5xl md:text-6xl">RECRUIT</h2>
                    <p className="font-bold text-xl my-[10px]">採用情報</p>
                    <p className="w-60 md:w-full text-lg md:mt-[50px]">私たちと一緒に働いてくれる仲間を募集しています。</p>
                </div>
                <div className={`
                    flex flex-col xl:flex-row
                    space-y-5
                    xl:space-y-0 xl:space-x-4
                    xl:mt-[50px]
                `}>
                    <Link
                        href="/recruit"
                        className="w-full xl:w-auto mt-4 xl:mt-0"
                    >
                        <HoverShapeButtonWithIcon
                            variant="blue"
                            icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                            className="w-[200px] py-4"
                        >
                            詳しく見る
                        </HoverShapeButtonWithIcon>
                    </Link>
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfUidtB9U4ej59HjuD4elSTcJk2_Ff-5VlYNYRcxHugXw3NzQ/viewform?usp=dialog"
                        className="w-full xl:w-auto mt-4 xl:mt-0"
                    >
                        <HoverShapeButtonWithIcon
                            variant="orange"
                            icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                            className="w-[200px] py-4"
                        >
                            エントリーフォーム
                        </HoverShapeButtonWithIcon>
                    </Link>
                </div>
            </div>
        </div>
    )
}