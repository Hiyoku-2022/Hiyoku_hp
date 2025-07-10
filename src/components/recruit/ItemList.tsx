'use client'; 

import { useState } from 'react';
import ItemCard from './ItemCard';
import Modal from './Modal';

import HeadTitle from "./HeadTitle";

// InterviewDetail型の定義
interface InterviewDetail {
    id: number;
    src: string;
    alt: string;
    member: string;
    name: string;
    join: string;
    kikkake: string;
    workmiryoku: string;
    companymiryoku: string;
    target: string;
    occupation: string;
    description?: string;
}

// InterviewDetail型に合わせたサンプルデータ
const items: InterviewDetail[] = [
  {
    id: 1,
    src: "/recruit/interview.png", // 画像パスを設定
    alt: "picture",
    member: "Aさん",
    name: "Aさん",
    join: "2024年キャリア採用",
    kikkake: "友人からの紹介で興味を持ち、会社説明会に参加したことがきっかけでした。",
    workmiryoku: "チームワークを重視した開発環境と、新しい技術にチャレンジできる機会が豊富なところです。",
    companymiryoku: "社員一人ひとりの成長を大切にし、働きやすい環境作りに力を入れているところです。",
    target: "エンジニアを目指している学生や、キャリアチェンジを考えている方",
    occupation: "フロントエンドエンジニア",
    description: "福岡県出身。React/Next.jsを使用したWebアプリケーション開発を担当"
  },
  {
    id: 2,
    src: "/recruit/interview.png",
    alt: "picture",
    member: "Bさん",
    name: "Bさん",
    join: "2024年キャリア採用",
    kikkake: "転職活動中に求人サイトで見つけ、事業内容に共感したためです。",
    workmiryoku: "自分のアイデアを形にできる環境と、ユーザーの声を直接聞ける機会があることです。",
    companymiryoku: "多様性を重視し、個人の強みを活かせる職場環境が整っているところです。",
    target: "今後の目標です",
    occupation: "UI/UXデザイナー",
    description: "東京都出身。ユーザー体験の向上を目指したデザイン設計を担当"
  }

];

const ItemList: React.FC = () => {
  // モーダルの表示状態を管理（true: 表示, false: 非表示）
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 現在選択されているアイテムを管理（nullの場合は何も選択されていない）
  const [selectedItem, setSelectedItem] = useState<InterviewDetail | null>(null);

  // アイテムカードがクリックされた時の処理
  const openModal = (item: InterviewDetail) => {
    setSelectedItem(item);    // クリックされたアイテムを選択状態にセット
    setIsModalOpen(true);     // モーダルを表示状態にする
  };

  // モーダルを閉じる時の処理
  const closeModal = () => {
    setIsModalOpen(false);    // モーダルを非表示にする
    setSelectedItem(null);    // 選択されているアイテムをクリア
  };

  return (
    <>
      {/* ページタイトル */}
      <HeadTitle>メンバーインタビュー</HeadTitle>
      
      {/* アイテム一覧のグリッドレイアウト */}
      {/* レスポンシブ対応：モバイル1列、タブレット2列、デスクトップ3列 */}
      <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 各アイテムに対してItemCardコンポーネントを生成 */}
        {items.map((item) => (
          <ItemCard
            key={item.id}        // Reactのkey属性（ユニークな識別子）
            item={item}          // アイテムデータをItemCardに渡す
            onClick={openModal}  // クリック時の処理関数をItemCardに渡す
          />
        ))}
      </div>
      </div>

      {/* モーダルコンポーネント */}
      {/* アイテム一覧と同じレベルに配置することで、モーダルが全画面に表示される */}
      <Modal
        isOpen={isModalOpen}     // モーダルの表示状態
        item={selectedItem}      // 表示するアイテムデータ
        onClose={closeModal}     // モーダルを閉じる処理
      />
    </>
  );
};

export default ItemList;