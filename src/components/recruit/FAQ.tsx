import HeadTitle from "./head-tile";

type faq = {
    id: number;
    question: string;
    answer: string;
}

const faqList :faq[] = [
    {id:1,question: '面接や面談の際、服装や持ち物に指定はありますか？', answer:'特に指定はありません'},
    {id:2,question: 'ITスキル・専門知識は必要でしょうか？', answer:'回答が入ります'},
    {id:3,question: 'グローバル業務はありますか？', answer:'回答が入ります'},
    {id:4,question: 'リモート勤務は可能ですか？', answer:'回答が入ります'},
    {id:5,question: '選考はどれくらいかかりますか？', answer:'回答が入ります'},
]

export default function FAQ(){
    return(
        <div>
            <HeadTitle>よくあるご質問</HeadTitle>
            <div>
                {faqList.map((faqList)=>(
                    <ul key={faqList.id} className="mx-auto my-2 w-200 text-left bg-white rounded-lg p-2">
                        <li className="flex">
                            <p className="bg-blue-200 rounded-full px-5.5 py-4 m-2">Q</p>
                            <p key={faqList.id} className="my-auto">{faqList.question}</p>
                        </li>
                        <li className="flex">
                            <p className="bg-white border border-blue-200 rounded-full px-5.5 py-4 m-2">A</p>
                            <p key={faqList.id} className="my-auto">{faqList.answer}</p>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}