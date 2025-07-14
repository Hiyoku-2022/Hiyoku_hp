import * as React from "react";

export function CompanyOverviewHeader() {
  return (
    <header className="flex gap-2.5 justify-center items-center pb-1.5 border-b-2 border-solid border-b-gray-600">
      <h1 className="text-3xl font-medium tracking-wider leading-10 text-center text-gray-600 max-md:text-2xl max-sm:text-xl">
        会社概要
      </h1>
    </header>
  );
}
