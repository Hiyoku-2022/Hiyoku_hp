// インタビューのモーダルコンポーネント
import Image from "next/image";
import { useEffect } from 'react';
import { InterviewDetailType } from './InterviewDetail';

interface ModalProps {
    isOpen: boolean;
    item: InterviewDetailType | null;
    onClose: () => void;
}

export default function Modal({ isOpen, item, onClose }: ModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !item) return null;

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50">
            <div 
                className="fixed inset-0 transition-opacity"
                onClick={onClose}
            />
            <div className="relative bg-white rounded-lg shadow-xl w-[90%] md:w-[70%] mx-4 p-6 z-10 transform transition-all overflow-y-auto h-[90vh] md:h-[70vh]">
                <button
                    onClick={onClose}
                    className="sticky top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl z-20 float-right"
                    aria-label="モーダルを閉じる"
                >
                    ×
                </button>
                <div className="w-full md:w-[90%] mx-auto my-2 md:my-8">
                    <div className="flex my-4">
                        <Image src="/recruit/interviewIcon.svg" alt="popup" width={100} height={100} />
                        <div className="my-auto mx-2 md:mx-8">
                            <div className="flex flex-col items-start my-2">
                                <p className="text-2xl mx-2 font-bold ">{item.member}</p>
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
                        before:left-[38px]">
                        <p className="text-base">{item.description}</p>
                    </div>
                    <div className="border-b">
                        <p className="text-sub03 text-lg mt-8 my-4">入社のきっかけ</p>
                        <p className="py-4 text-base">{item.joiningReason}</p>
                    </div>
                    <div className="border-b">
                        <p className="text-sub03 text-lg mt-8 my-4">仕事の魅力</p>
                        <p className="py-4 text-base">{item.workAttraction}</p>
                    </div>
                    <div className="border-b">
                        <p className="text-sub03 text-lg mt-8 my-4">Hiyokuの魅力</p>
                        <p className="py-4 text-base">{item.companyAttraction}</p>
                    </div>
                    <div className="border-b">
                        <p className="text-sub03 text-lg mt-8 my-4">今後の目標</p>
                        <p className="py-4 text-base">{item.target}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}