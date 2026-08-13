import type { Metadata } from "next";
import React from "react";
import { Header } from "@/components/header/Header";
import { TopArea } from "@/components/service/TopArea";
import { CorporateTroublesArea } from "@/components/service/CorporateTroublesArea";
import { IntroductionEffectArea } from "@/components/service/IntroductionEffectArea";
import { CaseStudyArea } from "@/components/service/CaseStudyArea";
import { FormArea } from "@/components/service/FormArea";
import { SystemFeaturesArea } from "@/components/service/SystemFeaturesArea";
// import { PamphletSectionArea } from "@/components/service/PamphletSectionArea";

/*--------------------------------------------------------------------------
  このページのメタデータ

  サイト内で最も集客を担わせたいページなので、狙う検索クエリ
  （「IT研修 助成金」「エンジニア研修 助成金」等）の語を title に入れている。

  ⚠️ 助成金の「申請書類の作成・提出代行」は社会保険労務士の独占業務にあたる。
     ここに書けるのは【訓練実施機関として自社が用意する書類】までなので、
     文面を変える際も「申請代行」と読める表現は入れないこと。
--------------------------------------------------------------------------*/
export const metadata: Metadata = {
  title: "エンジニア研修の助成金活用",
  description:
    "企業のIT・エンジニア研修に各種助成金を活用する方法をご案内します。コンピュータサイエンスからバックエンドまで、現場で通用するエンジニアを育成。訓練の実施と、出席簿・実施報告など必要書類のご用意までサポートします。",
  alternates: { canonical: "/service" },
};

export default function ServicePage() {
    return (
        <div>
            <Header />

            <TopArea />

            <CorporateTroublesArea />

            <IntroductionEffectArea />

            <CaseStudyArea />

            <FormArea />

            <SystemFeaturesArea />

            {/* <PamphletSectionArea /> */}
        </div>
    );
}