import * as React from "react";
import { CompanyOverviewSection } from "./CompanyOverviewSection";

export function CompanyOverview() {
  return (
    <main className="box-border flex flex-col gap-2.5 items-start px-20 py-24 mx-auto my-0 w-full bg-white max-w-[1512px]">
      <div className="flex flex-col gap-16 items-center mx-auto my-0 w-full max-w-[1000px] max-sm:gap-10">
        <header className="flex gap-2.5 justify-center items-center pb-1.5 border-b-2 border-solid border-b-gray-600">
          <h1 className="text-3xl font-medium tracking-wider leading-10 text-center text-gray-600 max-md:text-2xl max-sm:text-xl">
             会社概要
          </h1>
        </header>
        <CompanyOverviewSection />
      </div>
    </main>
  );
}

export default CompanyOverview;
