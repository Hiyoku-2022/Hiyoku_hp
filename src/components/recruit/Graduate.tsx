// 採用募集の新卒採用コンポーネント
import React from 'react';

type GraduateItem = {
    id: number;
    column: string;
    detail: string;
};

const graduateList: GraduateItem[] = [
    { id: 1, column: '応募資格', detail: 'IT業界未経験者、大歓迎！学歴・職歴は問いません。\n基礎から着実に学び、ITエンジニアとして成長したいという意欲のある方を求めています。' },
    { id: 2, column: '職種・仕事内容', detail: ' ITエンジニア（研修期間中は学習がメインとなります）\n研修期間中は 当社の業務、または提携先企業での業務を行いつつ、充実したラーニングシステムでしっかりと基礎を固めた後、Web開発・インフラ構築・運用保守など、あなたの適性や希望に合わせたプロジェクトへ配属となります。' },
    { id: 3, column: '雇用形態', detail: ' 研修期間中は「研修生」としての契約となります。\n研修修了後、スキル習得度に応じて正社員として登用いたします。' },
    { id: 4, column: '求める人物像', detail: '・素直な気持ちで、新しいことを積極的に学びたい方\n・自分の可能性を信じ、新たな挑戦を楽しめる方\n・指示を待つだけでなく、自ら考えて行動できる方' },
    { id: 5, column: '試用期間', detail: 'あり（研修生期間中）\n期間：6〜12ヶ月（あなたの学習進捗に合わせて調整します）' },
    { id: 6, column: '給与', detail: '・研修生期間中：月額18万円 〜(業務内容による)\n・正社員登用後：月額20万円 〜 ＋各種手当' },
    { id: 7, column: '勤務地', detail: '福岡本社／東京支社／リモート勤務可能' },
    { id: 8, column: '待遇・福利厚生', detail: '社会保険完備（正社員登用後）、交通費支給、書籍購入補助' },
    { id: 9, column: '勤務時間', detail: '10:00〜19:00（あなたの状況に合わせてフレックス勤務も相談可能です）' },
    { id: 10, column: '休日休暇', detail: ' 完全週休2日制（土日）、祝日、年末年始、有給休暇、特別休暇' },
    { id: 11, column: '選考フロー', detail: '書類選考 → 面談（1〜2回）→ 内定 → 研修開始' },
];

export default function Graduate() {
    return (
        <div className="border w-full">
            <h1 className="text-center my-16 font-bold text-2xl mx-8 md:mx-auto">
                未経験からITエンジニアを目指す方
            </h1>
            <div className='text-center my-4 mx-8 lg:mx-auto'>
                <p className='font-bold text-lg my-4 lg:mx-auto'>IT業界への一歩を、Hiyokuで踏み出しませんか？</p>
                <p>
                    「IT業界に興味はあるけれど、経験がなくて不安…」そんなあなたをHiyokuは全力でサポートします！<br />ITへの熱い想いと学ぶ意欲さえあれば、経験は一切問いません。
                </p>
            </div>
            <div className="mx-auto py-8 px-4 md:py-8 md:px-16">
                <table className="text-left mx-auto w-[85%] md:w-full">
                    <tbody className="border-t">
                        {graduateList.map((item) => (
                            <tr key={item.id} className="h-16 border-b">
                                <th className="font-thin text-base w-32 md:w-32 lg:w-64 md:px-4">
                                    {item.column}
                                </th>
                                <td className="py-4 md:px-4 whitespace-pre-line">
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