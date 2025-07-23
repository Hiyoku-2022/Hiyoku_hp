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
    <div>
        <Header />

        <TopArea />

        <CorporateTroublesArea />

        <IntroductionEffectArea />

        <CaseStudyArea />

        <FormArea />

        <SystemFeaturesArea />


    </div>
    )
}