// 「よくあるご質問」コンポーネント
import HeadTitle from "./HeadTitle";

type FAQ = {
    id: number;
    question: string;
    answer: string;
}

const faqList: FAQ[] = [
    { id: 1, question: '面談や面接の際、服装や持ち物に指定はありますか？', answer: '服装は自由です！ぜひ私服でお気軽にお越しください。筆記用具があると便利かもしれません。' },
    { id: 2, question: 'ITスキル・専門知識は必要でしょうか？', answer: '未経験者の方には、基礎から応用まで学べる充実した教育カリキュラムがありますので、事前のIT知識は一切不要です。\n経験者の方には、お持ちのスキルやご希望に応じた業務をお任せします。' },
    { id: 3, question: 'グローバルな業務はありますか？', answer: '現時点では国内案件が中心ですが、Hiyokuは将来的に海外展開も視野に入れています。世界を舞台に活躍したいという方も、ぜひご期待ください！' },
    { id: 4, question: 'リモート勤務は可能ですか？', answer: 'はい、可能です！福岡・東京のオフィスでの勤務はもちろん、ご自身のペースで働けるリモート勤務にも柔軟に対応しています。' },
    { id: 5, question: '選考はどれくらいかかりますか？', answer: '書類選考から内定までは、おおむね1〜2週間程度を目安としています。スピーディーな選考を心がけておりますので、ご安心ください。' },
];

export default function FAQ() {
    return (
        <div>
            <HeadTitle>よくあるご質問</HeadTitle>
            <div className="mb-16">
                {faqList.map((item) => (
                    <ul key={item.id} className="w-[90%] md:w-[70%] mx-auto my-2 text-left bg-white rounded-lg p-2">
                        <li className="flex items-center">
                            <p className="font-Family_3 font-bold text-white text-base bg-sub03 rounded-full px-[21px] py-[15px] m-2 h-14">Q</p>
                            <p className="my-auto text-sub03 font-bold text-base mx-4">{item.question}</p>
                        </li>
                        <li className="flex items-center">
                            <p className="font-Family_3 font-bold text-sub03 text-base bg-white border border-sub03 rounded-full px-[21px] py-[15px] m-2 h-14">A</p>
                            <p className="my-auto font-bold text-base mx-4 whitespace-pre-line">{item.answer}</p>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}