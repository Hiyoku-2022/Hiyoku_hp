// import React from "react";
import HeadTitle from "./head-tile";
import HiyokuDetail from "./hiyoku-detail";

export default function AboutHiyoku(){

    return(
        <>
            <HeadTitle>Hiyokuについて</HeadTitle>
            <p className="text-center mx-20 my-5">
            テキストが入りますテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入るテキスト入る
            </p>
            <div className="flex justify-center mx-auto">
                <HiyokuDetail></HiyokuDetail>
            </div>
            <div className="flex justify-center">
                <button>会社について詳しくみる</button>
            </div>
        </>
    );

}