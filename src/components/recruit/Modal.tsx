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
            <div className="relative bg-white rounded-lg shadow-xl w-[90%] md:w-[70%] mx-4 p-6 z-10 transform transition-all h-auto overflow-y-auto h-[90%] md:h-[80%]">
                {/* 右上の閉じるボタン（×ボタン） */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl z-20"
                    aria-label="モーダルを閉じる"
                >
                    ×
                </button>
                
                {/* モーダル内のコンテンツエリア */}
                <div className="w-full md:w-[90%] mx-auto my-2 md:my-8">
                    <div className="flex my-4">
                        <Image src="/recruit/interviewIcon.svg" alt="popup" width={100} height={100} />
                        <div className="my-auto mx-2 md:mx-8">
                            <div className="flex flex-col items-start my-2">
                                <p className="text-[23px] mx-2 font-bold ">{item.name}</p>
                                <p className="mx-2 font-bold text-[16px]">{item.join}</p>
                            </div>
                            <div className="flex items-center my-2">
                                <p className="border text-center mx-2  my-2 p-2 text-[12px]">職業</p>
                                <p className="font-bold text-[16px] md:mx-2 my-2">{item.occupation}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gray-100 p-4 relative rounded-md
                        before:content-[''] 
                        before:absolute 
                        before:w-0 
                        before:h-0
                        before:border-l-[12px]
                        before:border-r-[12px]
                        before:border-b-[15px]
                        before:border-l-transparent 
                        before:border-r-transparent 
                        before:border-b-gray-100
                        before:-top-[15px]
                        before:left-[38px]
                    ">
                        <p className="text-[16px]">{item.description}</p>
                    </div>
                    <div className="border-b">
                        <p className="text-sub03 text-[19px] mt-8 my-4">入社のきっかけ</p>
                        <p className="py-4 text-[16px]">{item.kikkake}</p>
                    </div>
                    <div className="border-b">
                        <p className="text-sub03 text-[19px] mt-8 my-4">仕事の魅力</p>
                        <p className="py-4 text-[16px]">{item.workmiryoku}</p>
                    </div>
                    <div className="border-b">
                        <p className="text-sub03 text-[19px] mt-8 my-4">Hiyokuの魅力</p>
                        <p className="py-4 text-[16px]">{item.companymiryoku}</p>
                    </div>
                    <div className="border-b">
                        <p className="text-sub03 text-[19px] mt-8 my-4">今後の目標</p>
                        <p className="py-4 text-[16px]">{item.target}</p>
                    </div>
                    <div className="border-b">
                        <p className="text-sub03 text-[19px] mt-8 my-4">今後の目標</p>
                        <p className="py-4 text-[16px]">{item.target}</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Modal;