// components/ui/CaseNumber.tsx

type CaseNumberProps = {
    text: React.ReactNode;
};

export const NumberTexts: Record<string, React.ReactNode> = {
    type1: (
        <>case.01</>
    ),
    type2: (
        <>case.02</>
    ),
    type3: (
        <>case.03</>
    ),
};

export const CaseNumber = ({ text }: CaseNumberProps) => (
    <div
        className={`
            w-[90px]
            flex items-center justify-center
            bg-center bg-no-repeat bg-contain
            px-4 py-4
        `}
        style={{ backgroundImage: `url("service/CaseNumber.svg")` }}
        >
            <div className="flex flex-col items-center justify-center h-full">
                <span className="text-sm font-bold text-white leading-snug pl-3">{text}</span>
            </div>
    </div>
);
