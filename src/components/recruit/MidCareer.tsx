// 採用募集の中途採用コンポーネント
import React from 'react';

type MidCareerItem = {
    id: number;
    column: string;
    detail: string;
};

const midCareerList: MidCareerItem[] = [
    { id: 1, column: '応募資格', detail: 'ITエンジニアとして1年以上の実務経験をお持ちの方（職種は問いません）' },
    { id: 2, column: '職種・仕事内容', detail: 'ITエンジニア（開発・インフラ・プロジェクトマネジメントなど、あなたのスキルや希望に応じて柔軟にアサインします）\n当社の主力である自社ラーニングシステムの開発にも、積極的に携わることができます。' },
    { id: 3, column: '雇用形態', detail: '正社員（業務委託での勤務もご相談可能です）' },
    { id: 4, column: '求める人物像', detail: '・常に学び続け、新しい技術や知識に関心がある方\n・チームメンバーと協力し、共に目標達成を目指せる方\n・自身の経験を活かし、教育や後進の育成に興味がある方' },
    { id: 5, column: '試用期間', detail: 'あり（3ヶ月）\n※試用期間中の条件変更は一切ありません。' },
    { id: 6, column: '給与', detail: ' 月額25万円 〜 100万円\n（あなたの経験・スキル・実績を最大限に評価し決定します）' },
    { id: 7, column: '勤務地', detail: '福岡本社／東京支社／リモート勤務可能' },
    { id: 8, column: '待遇・福利厚生', detail: '社会保険完備、交通費支給、資格取得支援、書籍購入補助' },
    { id: 9, column: '勤務時間', detail: '10:00〜19:00 \n✳︎業務内容により時間帯は変動あり\n（あなたの状況に合わせてフレックス勤務も相談可能です）' },
    { id: 10, column: '休日休暇', detail: '完全週休2日制（土日）、祝日、年末年始、有給休暇、特別休暇' },
    { id: 11, column: '選考フロー', detail: '書類選考 → 面接（1〜2回）→ 内定' },
];

export default function MidCareer() {
    return (
        <div className="border w-full">
            <h1 className="text-center my-16 font-bold text-2xl mx-8 md:mx-auto">
                ITエンジニア経験者の方
            </h1>
            <div className='text-center my-4 mx-8 lg:mx-auto'>
                <p className='font-bold text-lg my-4 lg:mx-auto'>さらなる高みへ！Hiyokuであなたのスキルをアップデートしませんか？</p>
                <p>
                これまでの経験を活かし、さらなるスキルアップを目指したい方、大歓迎です。<br/>新しい環境で知識を深め、リスキリングにも挑戦しながら、あなたのキャリアを次のステージへと進めましょう！
                </p>
            </div>
            <div className="mx-auto py-8 px-4 md:py-8 md:px-16">
                <table className="text-left mx-auto w-[85%] md:w-full">
                    <tbody className="border-t">
                        {midCareerList.map((item) => (
                            <tr key={item.id} className="h-20 border-b">
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