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

// interface Item {
//   id: number;
//   title: string;
//   description: string;
//   content: string;
// }

// ItemCardコンポーネントのプロパティ型定義
interface InterviewDetailProps {
  item: InterviewDetail;                    // 表示するアイテムのデータ
  onClick: (item: InterviewDetail) => void; // クリック時のコールバック関数
}

// interface InterviewDetailProps {
//   onItemClick: (interviewDetail: InterviewDetail) => void;
// }

// const interviewDetail : InterviewDetail[] = [
//     {id:1,src: '/recruit/responsive.png',alt:'member1' ,member: 'Gさん(2024年キャリア採用)',occupation:'エンジニア'},
//     {id:2,src: '/recruit/responsive.png',alt:'member2' ,member: 'Nさん(2024年キャリア採用)',occupation:'エンジニア'},
// ];

// export default function InterviewDetail(){
// const InterviewDetail :React.FC<InterviewDetailProps> = ({onItemClick}) =>{
//     return(
//         <button
//         className="flex justify-around mx-50" 
//         >
//             {interviewDetail.map((interviewDetail)=>(
//             <div key={interviewDetail.id} className="mx-10 w-1/4 h-full"
//             onClick={() => onItemClick(interviewDetail)}
//             >
//              <Image
//                 src={interviewDetail.src}
//                 alt={interviewDetail.alt} 
//                 width={3000} 
//                 height={6000}
//              />
//              <p className="text-xl my-5">{interviewDetail.member}</p>
//              <div className="flex my-5">
//              <p className="border-2 p-2 w-15 text-center">職業</p>
//              <p className="p-2 text-center">{interviewDetail.occupation}</p>
//              </div>
//              </div>
//             ))}
//         </button>
//     );
// }

const ItemCard: React.FC<InterviewDetailProps> = ({ item, onClick }) => {
  return (
    <div
      // カードのスタイリング：背景白、角丸、影、ホバー効果
      className="shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
      // カード全体をクリック可能にし、クリック時に親コンポーネントにitemを送信
      onClick={() => onClick(item)}
    >
      {/* アイテムのタイトル表示 */}
      {/* <h3 className="text-xl font-semibold mb-2">{item.title}</h3> */}
                <Image
                src={item.src}
                alt={item.alt} 
                width={3000} 
                height={6000}
                />
            <div className="flex ">
                <p className="text-xl my-5">{item.member}</p>
                <p className="text-l mx-2 my-5 py-auto">({item.join})</p>
            </div>
            <div className="flex">
              <p className="border-1 p-2 w-15 text-center">職業</p>
              <p className="p-2 text-center">{item.occupation}</p>
            </div>
      
    </div>
  );
};

export default ItemCard;