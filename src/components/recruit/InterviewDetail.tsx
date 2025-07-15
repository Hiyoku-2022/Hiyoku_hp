// インタビューのメンバー全員を表示するコンポーネント
import Image from "next/image";

export type InterviewDetailType = {
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
};

interface InterviewDetailProps {
    item: InterviewDetailType;
    onClick: (item: InterviewDetailType) => void;
}

export default function InterviewDetail({ item, onClick }: InterviewDetailProps) {
    return (
        <div
            onClick={() => onClick(item)}
            className="group cursor-pointer"
        >
            {/* PC用画像（md以上で表示） */}
            <div className="relative hidden md:block">
                <Image
                    src="/recruit/interview.svg"
                    alt={item.alt || 'インタビューメンバー画像'}
                    width={400}
                    height={800}
                />
                <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <span className="text-gray-800 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        VIEW MORE
                    </span>
                </div>
            </div>

            {/* スマホ用画像（md未満で表示） */}
            <div className="relative block md:hidden">
                <Image
                    src="/recruit/interview_md.svg"
                    alt={item.alt || 'インタビューメンバー画像'}
                    width={800}
                    height={1600}
                    className="rounded-xl"
                />
                <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center rounded-xl">
                    <span className="text-gray-800 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        VIEW MORE
                    </span>
                </div>
            </div>

            <div className="flex font-Family_1 text-[19px]">
                <p className="text-xl my-5">{item.member}</p>
                <p className="text-l mx-2 my-5 py-auto">({item.join})</p>
            </div>
            <div className="flex items-center font-Family_1">
                <p className="flex items-center justify-center border border-foreground font-bold text-[12px] p-2 w-[55px] mx-1 h-[35px]">職業</p>
                <p className="p-2 font-bold text-[16px] text-center mx-2 md:mx-2">{item.occupation}</p>
            </div>
        </div>
    );
};

