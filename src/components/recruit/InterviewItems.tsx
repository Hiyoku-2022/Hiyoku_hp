// インタビューした各メンバーのコンポーネント
'use client';
import { useState } from 'react';
import InterviewDetail, { InterviewDetailType }  from './InterviewDetail';
import Modal from './Modal';
import HeadTitle from "./HeadTitle";

const interviewItems: InterviewDetailType[] = [
    {
        id: 1,
        src: "/recruit/interview_Kudo.jpg",
        src_md: "/recruit/interview_Kudo_md.jpg",
        alt: "picture",
        member: "未経験からエンジニアへ！ Aさん",
        joiningReason: "前職退職時に声をかけてもらったことをきっかけに、将来性を感じていたIT業界へ挑戦しました。約8か月間、弊社の「Re-Light LMS」で学び、フロントエンドを中心にスキルを習得。未経験からエンジニアとして仕事に就くことができました。",
        workAttraction: "業務を通じて、どのような点に注意して確認すべきかが自然と分かるようになり、品質向上につながる視点を持てるようになったことが、自身の成長を実感しているポイントです。",
        companyAttraction: "学習期間で身につけた基礎知識は、現在の業務にも活かされています。土台ができていたことで実務にもスムーズに対応でき、自身の成長を実感しています。自社製品や充実した教育環境も、成長を支える大きな魅力です。",
        target: "HP制作を通じて、学んだ知識を実践で活かす経験ができました。納期の中で取り組むことでCSSへの理解も深まり、実務ならではの学びを得られました。今後もAIなど新しい技術を活用し、価値を生み出せるエンジニアを目指します。",
        occupation: "バックエンドエンジニア",
        description: "東京都出身。Next.jsを用いたフロントエンド開発、データベース移行対応、スマートフォンアプリのQA・テスト設計業務を経験。"
    },
    {
        id: 2,
        src: "/recruit/interview_Nakamura.jpeg",
        src_md: "/recruit/interview_Nakamura_md.jpeg",
        alt: "picture",
        member: "更なるスキルアップを追求する！ Bさん",
        joiningReason: "転職活動中に相談する中で出会ったことがきっかけでした。フリーランスも視野に入れていましたが、これまでの経験を活かしながら新しい環境で一から挑戦できる点に魅力を感じ、自分に合っている会社だと感じ入社を決意しました。",
        workAttraction: "業務を通じて、指示されたことを行うだけでなく、自ら考えて提案できる力が身につきました。これまでの経験を活かしながら、より良い進め方を考え行動することで、主体的にプロジェクトへ関われることに魅力を感じています。",
        companyAttraction: "自分たちの意見を反映しながら、みんなで会社を作っていける環境に魅力を感じています。決まった形や固定観念にとらわれず、一人ひとりの考えを大切にできるところが良い点だと感じています。",
        target: "現場を見る中でビジネスのチャンスに気付き、新たな価値を生み出せる視点を養いたいと考えています。作業をこなすだけでなく、課題解決や新しい挑戦に関われる環境で、失敗や経験を成長につなげながら挑戦を続けています。",
        occupation: "バックエンドエンジニア",
        description: "福岡県出身。公共交通機関サイト改修、経理システム改修等バックエンド開発を経験し、Hiyokuに入社。経験を活かして、エンジニアとして活躍中。"
    }
];

export default function InterviewItems() {
    // モーダル機能は将来的に実装予定
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<InterviewDetailType | null>(null);

    // モーダルを表示する
    const openModal = (item: InterviewDetailType) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };


    // モーダルを閉じる
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <>
            <HeadTitle>メンバーインタビュー</HeadTitle>
            <div className="flex justify-center mx-auto w-[90%] md:w-[70%] pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {interviewItems.map((item) => (
                        <InterviewDetail
                            key={item.id}
                            item={item}
                            onClick={openModal}
                        />
                    ))}
                </div>
            </div>
            {/* モーダルコンポーネント*/}
            <Modal
                isOpen={isModalOpen}
                item={selectedItem}
                onClose={closeModal}
            />
        </>
    );
}