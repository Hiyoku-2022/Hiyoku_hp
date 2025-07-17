import * as React from "react";
import { CompanyOverviewSection } from "./CompanyOverviewSection";
import HeadTitle from "./HeadTitle";

export function CompanyOverview() {
  return (
    <main className="box-border flex flex-col gap-2.5 items-start px-20 py-24  mx-auto mb-24 my-0 w-full bg-white max-w-[1512px]">
      <div className="flex flex-col gap-16 items-center mx-auto my-0 w-full max-w-[1000px] max-sm:gap-10">
       <HeadTitle>会社概要</HeadTitle>
        <CompanyOverviewSection />
      </div>
    </main>
  );
}

export default CompanyOverview;
