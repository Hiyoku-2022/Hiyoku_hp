import React from "react";
import { HiyokuPhilosophy } from "../../components/about-us/HiyokuPhilosophy";
import { HiyokuPromise } from "../../components/about-us/HiyokuPromise";
import {CompanyOverview} from "../../components/about-us/CompanyOverview";

import { RecruitArea } from "@/components/shared/RecruitArea";
import PageTitle from '@/components/shared/PageTitle';
import Pankuzu from "@/components/shared/Pankuzu";

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
        <HiyokuPhilosophy />

    {/* Hiyokuの約束 */}
        <HiyokuPromise />

    {/* 会社概要 */}
        <CompanyOverview />

    {/* 採用情報 */}
        <RecruitArea />

    </main>

)
}