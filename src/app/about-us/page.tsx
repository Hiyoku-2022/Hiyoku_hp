import React from "react";
import { HiyokuPhilosophy } from "./HiyokuPhilosophy";
import { HiyokuPromise } from "./HiyokuPromise";
import { RecruitArea } from "@/components/shared/RecruitArea";
import CompanyOverview from "./CompanyOverview";

export default function AboutUsPage() {
return (
    <main className="pt-20 px-4 max-w-4xl mx-auto">
        <div>
        <h1 className="text-3xl font-bold mb-6">私たちについて</h1>
        <HiyokuPhilosophy />
        <HiyokuPromise />
        <CompanyOverview />
        <RecruitArea />
        </div>
    </main>
    )
}