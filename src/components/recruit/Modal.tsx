import Image from "next/image";
import { useEffect } from 'react';

// アイテムのデータ型定義
type InterviewDetail= {
    id:number;
    src : string;
    alt: string;
    member: string;
    name: string;
    join:string;
    kikkake:string;
    workmiryoku:string;
    companymiryoku:string;
    target:string;
    occupation: string;
    description?: string;
}

// Modalコンポーネントのプロパティ型定義
interface ModalProps {
  isOpen: boolean;      // モーダルの表示状態
  item: InterviewDetail | null;    // 表示するアイテムデータ（nullの場合は非表示）
  onClose: () => void;  // モーダルを閉じる時のコールバック関数
}

const Modal: React.FC<ModalProps> = ({ isOpen, item, onClose }) => {
  // モーダルが開いている間のキーボードイベントとスクロール制御
  useEffect(() => {
    // ESCキーでモーダルを閉じる処理
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // モーダルが開いている場合の処理
    if (isOpen) {
      // ESCキーのイベントリスナーを追加
      document.addEventListener('keydown', handleEscape);
      // 背景のスクロールを無効化（モーダル表示中は背景をスクロールさせない）
      document.body.style.overflow = 'hidden';
    }

    // クリーンアップ関数：コンポーネントのアンマウント時やisOpenが変更された時に実行
    return () => {
      // イベントリスナーを削除
      document.removeEventListener('keydown', handleEscape);
      // スクロールを復元
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]); // isOpenまたはonCloseが変更された時に再実行

  // モーダルが閉じているか、アイテムデータがない場合は何も表示しない
  if (!isOpen || !item) return null;

  return (
    // モーダルのメインコンテナ：画面全体を覆い、中央に配置
    <div className="fixed inset-0 z-10 flex items-center justify-center  bg-black/50">
      {/* 背景オーバーレイ：半透明の黒背景、クリックで閉じる */}
      <div 
        className="fixed inset-0 ransition-opacity"
        onClick={onClose} // 背景クリックでモーダルを閉じる
      />
      
      {/* モーダルコンテンツ本体 */}
        <div className="relative bg-white rounded-lg shadow-xl w-1/2 mx-4 p-6 z-10 transform transition-all h-auto overflow-y-auto">
            {/* 右上の閉じるボタン（×ボタン） */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl z-20"
              aria-label="モーダルを閉じる" // アクセシビリティ対応
            >
              ×
            </button>
            
            {/* モーダル内のコンテンツエリア */}
            <div className="pr-8"> {/* 右側に余白を作って×ボタンと重ならないようにする */}
                {/* アイテムタイトル */}
                {/* <h2 className="text-2xl font-bold mb-4">{item.title}</h2> */}
                
                {/* アイテムの概要説明 */}
                {/* <p className="text-gray-700 mb-4">{item.description}</p> */}
                
                {/* 詳細コンテンツエリア（背景色を変えて区別） */}
                {/* <div className="bg-gray-50 p-4 rounded mb-6">
                  <p>{item.content}</p>
                </div> */}
      
                  <div className="flex m-10">
                      <Image src="/recruit/interviewIcon.png" alt="popup" width={100} height={100} />
                      <div className="my-auto mx-2">
                      <div className="flex my-auto">
                      <p className="text-xl mx-2">{item.name}</p>
                      <p className="mx-2">{item.join}</p>
                      </div>
                        <div className="flex my-2">
                        <p className="border-1 text-center mx-1">職業</p>
                        <p>{item.occupation}</p>
                        </div>
                      </div>
                  </div>
                  
                  <div className="bg-gray-100 p-4 
        before:content-[''] 
        before:absolute 
        before:w-0 
        before:h-0
        before:border-l-[15px] // 左の境界線
        before:border-r-[15px] // 右の境界線
        before:border-b-[15px] // 上向き矢印のための下側の境界線
        before:border-l-transparent 
        before:border-r-transparent 
        before:border-t-blue-500// 矢印の色
        before:-top-[15px] // 吹き出しの上端から上に突き出す
        before:left-1/2 // 左右中央に配置
        before:-translate-x-1/2 // 自身の幅の半分だけ左にずらして正確に中央に
                  ">
                      <p>{item.description}</p>
                  </div>
                  <div>
                      <p>入社のきっかけ</p>
                      <p>{item.kikkake}</p>
                  </div>
                  <div>
                      <p>仕事の魅力</p>
                      <p>{item.workmiryoku}</p>
                  </div>
                  <div>
                      <p>Hiyokuの魅力</p>
                      <p>{item.companymiryoku}</p>
                  </div>
                  <div>
                      <p>今後の目標</p>
                      <p>{item.target}</p>
                  </div>
            </div>
        </div>
    </div>
    
  );
};

export default Modal;