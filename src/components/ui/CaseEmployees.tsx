// components/ui/CaseEmployees.tsx

type CaseEmployeesProps = {
    text: React.ReactNode;
};

export const EmployeesTexts: Record<string, React.ReactNode> = {
    type1: (
        <>
            従業員数：10名〜
        </>
    ),
    type2: (
        <>
            従業員数：50名〜
        </>
    ),
    type3: (
        <>
            従業員数：100名〜
        </>
    ),
};

export const CaseEmployees = ({ text }: CaseEmployeesProps) => (
    <div
        className={`
            w-[200px]
            flex items-center justify-center
            bg-center bg-no-repeat bg-contain
            px-4 py-4
        `}
        style={{ backgroundImage: `url("service/CaseEmployees.svg")` }}
        >
            <div className="flex flex-col items-center justify-center h-full">
                <span className="text-sm font-bold leading-snug pl-5">{text}</span>
            </div>
    </div>
);
