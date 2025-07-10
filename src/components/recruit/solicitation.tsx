"use client";
import HeadTitle from "./HeadTitle";
import Graduate from "./Graduate";
import MidCareer from "./MidCareer";
// import { useState } from "react";
import React, { useState } from 'react';
import { HoverShapeButtonWithIcon } from "../ui/button";
import { ChevronRight } from "lucide-react";

export default function Solicitation(){
    const [currentRecruitment,setCurrentRecruitment] = useState('graduate');
    
    return (
        <div className="bg-white overflow-hidden">
            <HeadTitle>募集要項</HeadTitle>
            <div className="w-[70%] mx-auto">
                <div className="flex mx-auto">
                    <button
                    onClick={()=> setCurrentRecruitment('graduate')}
                    className={`rounded-t-lg py-4 px-8 font-Family_1 font-bold
                    ${ currentRecruitment === 'graduate'
                        ? 'bg-main' 
                        : 'bg-sub05'
                        }
                    `}
                    >新卒採用</button>
                    <button
                    onClick={()=> setCurrentRecruitment('midCareer')}
                    className={` rounded-t-lg py-4 px-8 mx-2 font-Family_1 font-bold
                    ${currentRecruitment === 'midCareer'
                    ? 'bg-sub01'
                    : 'bg-sub06'
                    }
                        
                    `}
                    >中途採用</button>
                </div>
                <div className="mx-auto h-auto">
                    {currentRecruitment === "graduate" && <Graduate/>}
                    {currentRecruitment === "midCareer" && <MidCareer/>}
                </div>
                <div className="flex justify-center my-16">
                <HoverShapeButtonWithIcon
                  variant="orange"
                  icon={<ChevronRight className="w-4 h-4 transition-colors m-[10px]" />}
                >
                    エントリーフォーム
                </HoverShapeButtonWithIcon>
                </div>
            </div>
        </div>
    );
// }
}