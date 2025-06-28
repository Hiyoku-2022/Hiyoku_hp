"use client";
import HeadTitle from "./head-tile";
import Graduate from "./graduate";
import MidCareer from "./mid-career";
// import { useState } from "react";
import React, { useState } from 'react';

export default function Solicitation(){
    // const App = () => {
    const [currentRecruitment,setCurrentRecruitment] = useState('graduate');
    
    return (
        <div className="bg-white overflow-hidden">
            <HeadTitle>募集要項</HeadTitle>
            <div className="w-3/5 mx-auto">
                <div className="flex mx-auto">
                    <button
                    onClick={()=> setCurrentRecruitment('graduate')}
                    className={`rounded-t-lg p-3 
                    ${ currentRecruitment === 'graduate'
                        ? 'bg-blue-300' 
                        : 'bg-blue-100'
                        }
                    `}
                    >新卒採用</button>
                    <button
                    onClick={()=> setCurrentRecruitment('midCareer')}
                    className={` rounded-t-lg p-3 mx-2
                    ${currentRecruitment === 'midCareer'
                    ? 'bg-green-300'
                    : 'bg-green-100'
                    }
                        
                    `}
                    >中途採用</button>
                </div>
                <div className="mx-auto h-auto">
                    {currentRecruitment === "graduate" && <Graduate/>}
                    {currentRecruitment === "midCareer" && <MidCareer/>}
                </div>
                <div className="flex justify-center mx-5 my-5">
                    <button>エントリーフォーム</button>
                </div>
            </div>
        </div>
    );
// }
}