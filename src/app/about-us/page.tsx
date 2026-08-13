import type { Metadata } from "next";
import React from "react";
import { HiyokuThoughts } from "../../components/about-us/HiyokuThoughts";
import { HiyokuPromise } from "../../components/about-us/HiyokuPromise";
import {CompanyOverview} from "../../components/about-us/CompanyOverview";
import { RecruitArea } from "@/components/shared/RecruitArea";
import Pankuzu from "@/components/shared/Pankuzu";

/*--------------------------------------------------------------------------
  このページのメタデータ

  BtoBでは発注前に「実在する会社か」を必ず調べられる。会社名・所在地・
  事業内容が検索結果のスニペットに出るようにしておく。
--------------------------------------------------------------------------*/
export const metadata: Metadata = {
  title: "私たちについて",
  description:
    "hiyoku合同会社（福岡市中央区）の会社概要と理念。「教育で世界の貧困差をなくす」を掲げ、企業のIT人材育成・エンジニア育成研修を行っています。",
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
return (
    <main>
        <Pankuzu
                titleJP="私たちについて"
                subtitleEN="about-us"
                breadcrumbs={[
                    { label: "私たちについて" }
                ]}
            />

        {/* Hiyokuの想い */}
        <HiyokuThoughts />

        {/* Hiyokuの約束 */}
        <HiyokuPromise />

        {/* 会社概要 */}
        <CompanyOverview />

        {/* 採用情報 */}
        <RecruitArea />

        <div className="mt-[50px] md:mt-[100px]"/>

    </main>

)
}