"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header/Header";
import { TopMV, TopAboutUS, TopService, TopNews } from "@/components/top";
import { RecruitArea } from "@/components/shared/RecruitArea";

export default function HomePage() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHeader(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showHeader && <Header />}
      <TopMV />
      <div className="mt-[150px] md:mt-[200px]" />
      <TopAboutUS />
      <div className="mt-[50px] md:mt-[100px]"/>
      <TopService />
      <div className="mt-[50px] md:mt-[100px]"/>
      <TopNews />
      <div className="mt-[50px] md:mt-[100px]"/>
      <RecruitArea />
      <div className="mt-[50px] md:mt-[100px]"/>
    </div>
  )
}