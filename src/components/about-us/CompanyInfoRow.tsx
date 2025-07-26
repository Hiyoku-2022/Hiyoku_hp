import * as React from "react";

interface CompanyInfoRowProps {
    label: string;
    value: string | React.ReactNode;
}

export function CompanyInfoRow({ label, value }: CompanyInfoRowProps) {
return (
    <div className="box-border flex flex-col gap-5 items-start p-5 w-full bg-white border-b border-solid border-b-stone-300 max-sm:p-4">
        <div className="flex gap-24 items-start w-full max-md:gap-10 max-sm:flex-col max-sm:gap-2 max-sm:items-start">
            <div className="shrink-0 text-base font-medium tracking-wider leading-7 text-gray-600 w-[120px] max-md:w-[100px] max-sm:mb-1 max-sm:w-full max-sm:text-sm">
                {label}
            </div>
            <div className="flex-1 text-base font-medium tracking-wider leading-7 text-gray-600 max-sm:text-sm">
                {value}
            </div>
        </div>
    </div>
);
}