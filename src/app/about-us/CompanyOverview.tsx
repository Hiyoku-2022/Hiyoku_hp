import * as React from "react";
import { CompanyOverviewHeader } from "./CompanyOverviewHeader";
import { CompanyOverviewSection } from "./CompanyOverviewSection";

export function CompanyOverview() {
  return (
    <main className="box-border flex flex-col gap-2.5 items-start px-64 py-24 mx-auto my-0 w-full bg-white max-w-[1512px]">
      <div className="flex flex-col gap-16 items-center mx-auto my-0 w-full max-w-[1000px] max-sm:gap-10">
        <CompanyOverviewHeader />
        <CompanyOverviewSection />
      </div>
    </main>
  );
}

export default CompanyOverview;
