// 「よくあるご質問」コンポーネント
import HeadTitle from "./HeadTitle";

type FAQ = {
    id: number;
    question: string;
    answer: string;
}

const faqList: FAQ[] = [
    { id: 1, question: '面接や面談の際、服装や持ち物に指定はありますか？', answer: '特に指定はありません' },
    { id: 2, question: 'ITスキル・専門知識は必要でしょうか？', answer: '回答が入ります' },
    { id: 3, question: 'グローバル業務はありますか？', answer: '回答が入ります' },
    { id: 4, question: 'リモート勤務は可能ですか？', answer: '回答が入ります' },
    { id: 5, question: '選考はどれくらいかかりますか？', answer: '回答が入ります' },
];

export default function FAQ() {
    return (
        <div>
            <HeadTitle>よくあるご質問</HeadTitle>
            <div className="mb-16">
                {faqList.map((item) => (
                    <ul key={item.id} className="w-[90%] md:w-[70%] mx-auto my-2 text-left bg-white rounded-lg p-2">
                        <li className="flex">
                            <p className="font-Family_3 font-bold text-white text-[16px] bg-sub03 rounded-full px-[21px] py-[15px] m-2">Q</p>
                            <p className="my-auto text-sub03 font-Family_1 font-bold text-[16px]">{item.question}</p>
                        </li>
                        <li className="flex">
                            <p className="font-Family_3 font-bold text-sub03 text-[16px] bg-white border border-sub03 rounded-full px-[21px] py-[15px] m-2">A</p>
                            <p className="my-auto font-Family_1 font-bold text-[16px]">{item.answer}</p>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}