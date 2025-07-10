// import React from "react";
import HeadTitle from "./HeadTitle";
import HiyokuDetail from "./HiyokuDetail";
import { HoverShapeButtonWithIcon } from "../ui/button";
import { ChevronRight } from "lucide-react";

export default function AboutHiyoku(){

    return(
        <>
            <HeadTitle>Hiyokuについて</HeadTitle>
                <p className="font-Family_1 text-center mx-auto my-8 w-[90%] md:w-[50%]">
                    テキストが入りますテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入る
                    テキストが入りますテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入る
                    テキストが入りますテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入る
                </p>
            <div className="flex justify-center mx-auto">
                <HiyokuDetail></HiyokuDetail>
            </div>
            <div className="flex justify-center my-[50px]">
                <HoverShapeButtonWithIcon
                  variant="blue"
                  icon={<ChevronRight className="w-4 h-4 transition-colors m-[10px]" />}
                >
                    会社について詳しくみる
                </HoverShapeButtonWithIcon>
            </div>
        </>
    );

}