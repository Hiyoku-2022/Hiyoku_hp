// インタビューのメンバー全員を表示するコンポーネント
import Image from "next/image";

export type InterviewDetailType = {
    id: number;
    alt: string;
    member: string;
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
                {/* インタビューモーダルを追加する時にコメントアウト外す */}
                {/* <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <span className="text-gray-800 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        VIEW MORE
                    </span>
                </div> */}
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
                {/* インタビューモーダルを追加する時にコメントアウト外す */}
                {/* <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center rounded-xl">
                    <span className="text-gray-800 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        VIEW MORE
                    </span>
                </div> */}
            </div>

            <div className="flex text-xl">
                <p className="text-xl my-5">{item.member}</p>
            </div>
        </div>
    );
};

