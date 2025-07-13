import Image from "next/image";

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

// ItemCardコンポーネントのプロパティ型定義
interface InterviewDetailProps {
  item: InterviewDetail;                    // 表示するアイテムのデータ
  onClick: (item: InterviewDetail) => void; // クリック時のコールバック関数
}

const itemCard: React.FC<InterviewDetailProps> = ({ item, onClick }) => {
  return (
    <div
      // カード全体をクリック可能にし、クリック時に親コンポーネントにitemを送信
      onClick={() => onClick(item)}
      className="group cursor-pointer"
    >
      {/* アイテムのタイトル表示 */}
      {/* <h3 className="text-xl font-semibold mb-2">{item.title}</h3> */}
      
      {/* PC用画像（md以上で表示） */}
      <div className="relative hidden md:block">
        <Image
          src="/recruit/interview.svg"
          alt={item.alt} 
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
          alt={item.alt} 
          width={300} 
          height={600}
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

export default itemCard;