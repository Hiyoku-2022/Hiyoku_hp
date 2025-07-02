import React from "react";
import { ChevronRight, Fullscreen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HoverShapeButtonWithIcon } from "../ui/button/HoverShapeButtonWithIcon";

export function RecruitArea() {
    return (
        <div className="bg-white flex justify-center mb:justify-center mx-auto w-[60%] my-[100px] mb:my-[100px] h-96 mb:h-96">
            <div className="rounded-l-xl h-full  px-[50px] py-[50px]">
                <div className="text-center">
                    <h2 className="font-Family_3 font-bold mt-[10px] text-[56px]">RECRUIT</h2>
                    <p className="font-Family_1 font-bold my-[10px] text-[16px]">採用情報</p>
                    <p className="font-Family_3 my-[50px]">私たちと一緒に働いてくれる仲間を募集しています。</p>
                </div>
                <div className="flex justify-center">
                    <Link href="/recruit" className="mx-[10px]">
                        <HoverShapeButtonWithIcon
                            variant="blue"
                            icon={<ChevronRight className="w-4 h-4 transition-colors font-Family_1 font-bold m-[10px]" />}
                        >
                            詳しく見る
                        </HoverShapeButtonWithIcon>
                    </Link>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeLNJ7LVm7ITzvnTyiEWzsd40LMbp0nRtgqGJkjSabq02IHgQ/viewform?usp=sharing&ouid=103342829539540884944">
                        <HoverShapeButtonWithIcon
                            variant="orange"
                            icon={<ChevronRight className="w-4 h-4 transition-colors font-Family_1 m-[10px]" />}
                        >
                            エントリーフォーム
                        </HoverShapeButtonWithIcon>
                    </Link>
                </div>
            </div>
           <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
  <Image 
    src="/common/RecruitArea.png" 
    alt="recruit" 
    width={100} 
    height={100} 
    className="w-full h-full object-contain"
  />
</div>
        </div>
    )
}