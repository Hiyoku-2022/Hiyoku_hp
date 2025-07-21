import React from "react";
import Image from "next/image";
import { CaseEmployees, EmployeesTexts } from "../ui/CaseEmployees";
import { CaseNumber, NumberTexts } from "../ui/CaseNumber";

export function CaseStudyArea() {
    const stepGroups = [
        {
            title: "システム開発会社",
            purpose: "新人教育",
            steps: [
                { label: "課題", text: "他業種からの未経験の転職者を、現場で開発できるレベルまで育ててSESにて稼働させたい。" },
                { label: "受講", text: "Re-Lightで新人研修の講座を6ヶ月受講。フロントエンドからバックエンド、コンピュータサイエンスの研修を行い、現場で必要な知識を習得。" },
                { label: "解決", text: "理解度の深く、成長度が著しく高いエンジニアが育った。そのため、1年後には高単価な案件に携われるようになり、利益向上に繋がった。" },
            ],
        },
        {
            title: "システム開発会社",
            purpose: "既存エンジニアのリスキリング",
            steps: [
                { label: "課題", text: "3年間社内にてOJTで教育をしながら開発業務をさせていたが、理解度が低く、一人称で対応できない社員がいて悩んでいた。" },
                { label: "受講", text: "Re-Lightでコンピュータサイエンスの講座を3ヶ月受講。徹底的にアルゴリズムを鍛えることにより、開発に対する基本的な理解度を大幅に向上させた。" },
                { label: "解決", text: "受講終了後、すぐに１人称にて開発業務をこなすことができるようになり、企業に利益をもたらせる人材になった。" },
            ],
        },
        {
            title: "派遣開発会社",
            purpose: "新規事業の立ち上げ",
            steps: [
                { label: "課題", text: "既存の派遣社員の中から希望者を募り、現場で開発できるレベルまで育てて専門派遣事業や人材紹介を展開していきたい。" },
                { label: "受講", text: "off-JTにてRe-Lightで新人研修の講座を12ヶ月受講。業務をしながらの受講し、受講期間の売り上げも上げつつ最小限の支出で育成を行なった。" },
                { label: "解決", text: "専門派遣にてエンジニアとして稼働する人材ができ、他社への人材紹介案件にも繋がり、新たな利益を生み出すことに繋がった。" },
            ],
        },
    ];

    const numberTextKeys = ["type1", "type2", "type3"];

    return (
        <div className="relative flex flex-col justify-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center space-y-3">
                <p className="text-4xl md:text-5xl tracking-wide">CASE STUDY</p>
                <p className="text-xl text-sub01 tracking-wide">導入事例</p>
            </div>
            <div className="space-y-5">
                {stepGroups.map((group, groupIndex) => {
                    const numberTextKey = numberTextKeys[groupIndex] || "type1";
                    const numberText = NumberTexts[numberTextKey];
                    const employeeText = EmployeesTexts[numberTextKey];

                    return (
                        <div
                            key={groupIndex}
                            className="relative flex justify-center items-center"
                        >
                            <div className="w-[90%] md:w-[60%] bg-grayLight p-10 rounded-xl z-30">
                                {/* ヘッダー */}
                                <div className="md:flex md:justify-between md:items-center mb-6">
                                    <div className="flex items-center space-x-3">
                                        <CaseNumber text={numberText} />
                                        <p className="font-semibold">{group.title}</p>
                                    </div>
                                    <CaseEmployees text={employeeText} />
                                </div>

                                {/* タイトル行 */}
                                <div className="flex items-center space-x-2 mb-8">
                                    <Image
                                        src="/service/CasePurpose.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                        className="w-[20px] h-[20px]"
                                    />
                                    <span className="font-semibold">導入目的</span>
                                    <Image
                                        src="/service/HorizontalDottedLine.svg"
                                        alt=""
                                        width={20}
                                        height={5}
                                        className="w-[20px] h-[20px]"
                                    />
                                    <span>{group.purpose}</span>
                                </div>

                                {/* ステップ */}
                                <div className="flex flex-col">
                                    {group.steps.map((step, stepIndex) => (
                                        <div key={stepIndex} className="flex items-start gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className={`
                                                    border rounded-sm w-[75px] px-2 py-1 flex justify-center items-center font-bold
                                                    ${stepIndex === group.steps.length - 1 ? "bg-sub text-white" : "bg-white"}
                                                `}>
                                                    <p>{step.label}</p>
                                                </div>
                                                {stepIndex !== group.steps.length - 1 && (
                                                    <div
                                                        className={`
                                                            w-[5px] h-[100px] md:h-[40px]
                                                            bg-[url('/service/VerticalDottedLine.svg')]
                                                            bg-repeat-y bg-center bg-contain
                                                        `}
                                                    />
                                                )}
                                            </div>
                                            <p className={`
                                                leading-relaxed
                                                ${stepIndex === group.steps.length - 1 ? "font-semibold" : "font-medium"}
                                            `}>
                                                {step.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <Image
                src="/service/cloudOrange.svg"
                alt="左上"
                width={200}
                height={200}
                className={`
                    absolute
                    hidden md:block
                    top-[-20%] left-[0%] w-[300px] h-[300px]
                `}
            />

            <Image
                src="/service/cloudGreen.svg"
                alt="右上"
                width={500}
                height={500}
                className={`
                    absolute
                    right-[0%] top-[-10%] w-[300px] h-[300px]
                    md:top-[-20%] md:w-[500px] md:h-[500px]
                `}
            />

            <Image
                src="/service/cloudGreen.svg"
                alt="左下"
                width={400}
                height={400}
                className={`
                    absolute
                    left-[20%] bottom-[55%] w-[300px] h-[300px]
                    md:left-[5%] md:bottom-[-10%] md:w-[400px] md:h-[400px]
                `}
            />

            <Image
                src="/service/cloudOrange.svg"
                alt="右下"
                width={300}
                height={300}
                className={`
                    absolute
                    right-[60%] bottom-[-5%] w-[250px] h-[250px]
                    md:right-[0%] md:bottom-[20%] md:w-[300] md:h-[300px]
                `}
            />




        </div>
    );
}
