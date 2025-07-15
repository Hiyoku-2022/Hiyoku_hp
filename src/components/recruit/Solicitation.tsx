// 採用募集コンポーネント
'use client';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { HoverShapeButtonWithIcon } from "../ui/button";
import { ChevronRight } from "lucide-react";
import HeadTitle from "./HeadTitle";
import Graduate from "./Graduate";
import MidCareer from "./MidCareer";

type RecruitmentType = 'graduate' | 'midCareer';

export default function Solicitation() {
    const [currentRecruitment, setCurrentRecruitment] = useState<RecruitmentType>('graduate');
    const router = useRouter();

    const handleTabClick = (type: RecruitmentType) => {
        setCurrentRecruitment(type);
    };

    const handleEntryFormClick = () => {
        router.push('/');
    };

    return (
        <div className="bg-white overflow-hidden">
            <HeadTitle>募集要項</HeadTitle>
            <div className="w-[90%] md:w-[70%] mx-auto">
                <div className="flex mx-auto">
                    <button
                        onClick={() => handleTabClick('graduate')}
                        className={`rounded-t-lg py-4 px-8 font-Family_1 font-bold transition-colors
                            ${currentRecruitment === 'graduate'
                                ? 'bg-main' 
                                : 'bg-sub05'
                            }
                        `}
                    >
                        新卒採用
                    </button>
                    <button
                        onClick={() => handleTabClick('midCareer')}
                        className={`rounded-t-lg py-4 px-8 mx-2 font-Family_1 font-bold transition-colors
                            ${currentRecruitment === 'midCareer'
                                ? 'bg-sub01'
                                : 'bg-sub06'
                            }
                        `}
                    >
                        中途採用
                    </button>
                </div>
                <div className="mx-auto h-auto">
                    {currentRecruitment === "graduate" && <Graduate />}
                    {currentRecruitment === "midCareer" && <MidCareer />}
                </div>
                <div className="flex justify-center my-16">
                    <HoverShapeButtonWithIcon
                        variant="orange"
                        icon={<ChevronRight className="w-4 h-4 transition-colors m-[10px]" />}
                        onClick={handleEntryFormClick}
                    >
                        エントリーフォーム
                    </HoverShapeButtonWithIcon>
                </div>
            </div>
        </div>
    );
}