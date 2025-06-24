import React from "react";
import { TopMV, TopAboutUS, TopService, TopNews } from "@/components/top";
import { RecruitArea } from "@/components/shared/recruit-area";

export default function HomePage() {
  return (
    <>
      <TopMV />
      <TopAboutUS />
      <TopService />
      <TopNews />
      <RecruitArea />
    </>
  )
}