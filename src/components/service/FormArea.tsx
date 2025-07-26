import React from "react";
import Link from "next/link";
import { HoverShapeButtonWithIcon } from "../ui/button";
import { ChevronRight } from "lucide-react";

export function FormArea() {
    return (
        <div className={`
            w-full flex justify-center items-center
            bg-[url('/service/FormAreaBgSp.svg')]
            md:bg-[url('/service/FormAreaBgPc.svg')]
            bg-top bg-no-repeat bg-cover
        `}>
            <div className={`
                w-[90%] md:w-[85%] xl:w-[70%] h-[600px] md:h-[450px] xl:h-[400px]
                bg-white rounded-xl my-10 max-md:space-y-10
                flex flex-col justify-center items-center
            `}>
                <p className="text-2xl font-bold mb-[20px] max-md:text-center"><span className="text-sub03 tracking-widest">お申し込み・お問い合わせ<span className="md:hidden"><br /></span></span>はこちら</p>
                <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 mb-[20px]">
                    <div className="w-[90%] md:w-[40%] text-center">
                        <p className="font-Family_2 text-4xl md:text-5xl tracking-widest mb-[20px] md:mb-0">Re-Light LMS</p>
                    </div>
                    <div className="w-[90%] md:w-[40%] flex flex-col justify-center items-center text-lg max-md:text-center md:text-start">
                        <p className="max-md:w-[75%]">まずはこちらからお問い合わせをお願い致します。</p>
                        <p>メールにて会社名、担当者様名、御連絡先、ご連絡に際しご都合の良い日程をお送りください。</p>
                        <p>後日担当者からお客様へご連絡しお打ち合わせにてヒアリングをさせて頂き、最適な学習プランをご提案いたします。</p>
                    </div>
                </div>
                <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe16SRGMa40iGYzQFxmUkW_7G3LgIjJ_n9F83eDSH1nAkObHg/viewform?usp=sharing&ouid=103342829539540884944"
                    className="w-full flex justify-center"
                >
                    <HoverShapeButtonWithIcon
                        variant="blue"
                        icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                        className="w-[80%] md:w-[200px]"
                    >
                        <span className="py-1">申し込む</span>
                    </HoverShapeButtonWithIcon>
                </Link>
            </div>
        </div>
    )
}