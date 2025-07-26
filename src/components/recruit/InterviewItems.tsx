// インタビューした各メンバーのコンポーネント
'use client';

// import { useState } from 'react';
import InterviewDetail, { InterviewDetailType }  from './InterviewDetail';
// import Modal from './Modal';
import HeadTitle from "./HeadTitle";

const interviewItems: InterviewDetailType[] = [
    {
        id: 1,
        alt: "picture",
        member: "未経験からエンジニアへ！ Aさん",
        joiningReason: "友人からの紹介で興味を持ち、会社説明会に参加したことがきっかけでした。",
        workAttraction: "チームワークを重視した開発環境と、新しい技術にチャレンジできる機会が豊富なところです。",
        companyAttraction: "社員一人ひとりの成長を大切にし、働きやすい環境作りに力を入れているところです。",
        target: "エンジニアを目指している学生や、キャリアチェンジを考えている方",
        occupation: "フロントエンドエンジニア",
        description: "福岡県出身。React/Next.jsを使用したWebアプリケーション開発を担当"
    },
    {
        id: 2,
        alt: "picture",
        member: "更なるスキルアップを追求する！ Bさん",
        joiningReason: "転職活動中に求人サイトで見つけ、事業内容に共感したためです。",
        workAttraction: "自分のアイデアを形にできる環境と、ユーザーの声を直接聞ける機会があることです。",
        companyAttraction: "多様性を重視し、個人の強みを活かせる職場環境が整っているところです。",
        target: "今後の目標です",
        occupation: "UI/UXデザイナー",
        description: "東京都出身。ユーザー体験の向上を目指したデザイン設計を担当"
    }
];

export default function InterviewItems() {
    // モーダル機能は将来的に実装予定
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [selectedItem, setSelectedItem] = useState<InterviewDetailType | null>(null);

    // モーダルを表示する
    const openModal = (item: InterviewDetailType) => {
        // モーダル機能は将来的に実装予定
        console.log('Modal would open for:', item);
    };
    // モーダルを表示する(モーダルを表示させるときにコメントアウト外す）
    // const openModal = (item: InterviewDetailType) => {
    //     setSelectedItem(item);
    //     setIsModalOpen(true);
    // };


    // モーダルを閉じる（将来的に使用予定）
    // const closeModal = () => {
    //     setIsModalOpen(false);
    //     setSelectedItem(null);
    // };

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
            {/* モーダルコンポーネント (インタビュー完了まで非表示にしておく)*/}
            {/* <Modal
                isOpen={isModalOpen}
                item={selectedItem}
                onClose={closeModal}
            /> */}
        </>
    );
}