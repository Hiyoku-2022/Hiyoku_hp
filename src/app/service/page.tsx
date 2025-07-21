import React from "react";
import { Header } from "@/components/header/Header";
import { TopArea } from "@/components/service/TopArea";
import { CorporateTroublesArea } from "@/components/service/CorporateTroublesArea";
import { IntroductionEffectArea } from "@/components/service/IntroductionEffectArea";
import { CaseStudyArea } from "@/components/service/CaseStudyArea";
import { FormArea } from "@/components/service/FormArea";
import { SystemFeaturesArea } from "@/components/service/SystemFeaturesArea";

export default function ServicePage() {
return (
    <div className="bg-white">
        <Header />

        <TopArea />

        <div className="mt-[150px] md:mt-[200px]" />

        <CorporateTroublesArea />

        <IntroductionEffectArea />

        <div className="mt-[150px] md:mt-[200px]" />

        <CaseStudyArea />

        <div className="mt-[150px] md:mt-[200px]" />

        <FormArea />

        <div className="mt-[150px] md:mt-[200px]" />

        <SystemFeaturesArea />


    </div>
    )
}