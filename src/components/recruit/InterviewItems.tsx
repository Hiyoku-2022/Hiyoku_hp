// 　インタビューした各メンバーのコンポーネント
'use client'; 

import { useState } from 'react';
import InterviewDetail from './InterviewDetail';
import Modal from './Modal';

import HeadTitle from "./HeadTitle";

interface InterviewItem {
    id: number;
    alt: string;
    member: string;
    name: string;
    join: string;
    joiningReason: string;
    workAttraction: string;
    companyAttraction: string;
    target: string;
    occupation: string;
    description?: string;
}

const interviewItems: InterviewItem[] = [
    {
        id: 1,
        alt: "picture",
        member: "Aさん",
        name: "Aさん",
        join: "2024年キャリア採用",
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
        member: "Bさん",
        name: "Bさん",
        join: "2024年キャリア採用",
        joiningReason: "転職活動中に求人サイトで見つけ、事業内容に共感したためです。",
        workAttraction: "自分のアイデアを形にできる環境と、ユーザーの声を直接聞ける機会があることです。",
        companyAttraction: "多様性を重視し、個人の強みを活かせる職場環境が整っているところです。",
        target: "今後の目標です",
        occupation: "UI/UXデザイナー",
        description: "東京都出身。ユーザー体験の向上を目指したデザイン設計を担当"
    }

];

const InterviewItems: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<InterviewDetail | null>(null);

    // モーダルを表示する
    const openModal = (interviewItems: InterviewDetail) => {
        setSelectedItem(interviewItems);
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

            {/* モーダルコンポーネント */}
            <Modal
                isOpen={isModalOpen}
                item={selectedItem}
                onClose={closeModal}
            />
        </>
    );
};

export default InterviewItems;