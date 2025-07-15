// 採用募集の中途採用コンポーネント
import React from 'react';

type MidCareerItem = {
    id: number;
    column: string;
    detail: string;
};

const midCareerList: MidCareerItem[] = [
    { id: 1, column: '応募資格', detail: '' },
    { id: 2, column: '職種・仕事内容', detail: 'エンジニア' },
    { id: 3, column: '雇用形態', detail: '正社員' },
    { id: 4, column: '求める人物像', detail: '' },
    { id: 5, column: '試用期間', detail: '6ヶ月' },
    { id: 6, column: '給与', detail: '180,000〜' },
    { id: 7, column: '勤務地', detail: '博多' },
    { id: 8, column: '待遇・福利厚生', detail: '' },
    { id: 9, column: '勤務時間', detail: '9:00〜18:00' },
    { id: 10, column: '休日休暇', detail: '完全週休2日制 土日祝日休み 年間休日125日' },
    { id: 11, column: '選考フロー', detail: '' },
];

export default function MidCareer() {
    return (
        <div className="border w-full">
            <h1 className="text-center mt-10 font-bold font-Family_1 text-[23px]">
                中途採用
            </h1>
            <div className="mx-auto py-8 px-4 md:py-8 md:px-16">
                <table className="text-left mx-auto w-[85%] md:w-full">
                    <tbody className="border-t">
                        {midCareerList.map((item) => (
                            <tr key={item.id} className="h-20 border-b">
                                <th className="font-thin text-[16px] font-Family_1 w-32 md:w-32 lg:w-64 md:px-4">
                                    {item.column}
                                </th>
                                <td className="py-4 md:px-4">
                                    {item.detail}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}