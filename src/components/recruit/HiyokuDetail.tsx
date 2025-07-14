// hiyokuについての詳細コンポーネント
import Image from "next/image";

type HiyouDetail ={
    id: number;
    src : string;
    alt : string;
    width? : number;
    height? : number;
    detail : string;
    sentence : string;
}

const hiyouDetailItems: HiyouDetail[] = [
  { id:1,src : '/recruit/responsive.png', alt: 'wariai',width: 500, height: 500,detail: '社員の70%が20代〜30代', sentence: 'これはリストの最初の要素です。ひよくの特長ひよくの特長ひよくの特長ひよくの特長' }, 
  { id:2,src : '/recruit/responsive.png', alt: '',width: 280, height: 200,detail: 'ヒヨクの特長・魅力１', sentence: 'これはリストの最初の要素です。ひよくの特長ひよくの特長ひよくの特長ひよくの特長' }, 
  { id:3,src : '/recruit/responsive.png', alt: '',width: 280, height: 200,detail: 'ヒヨクの特長・魅力２', sentence: 'これはリストの最初の要素です。ひよくの特長ひよくの特長ひよくの特長ひよくの特長' }, 
];

export default function HiyokuDetail(){
    return (
        <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center gap-6 mx-0 my-10 w-[70%] lg:w-[90%] md:w-[90%]">
            {hiyouDetailItems.map((item) => (
                <div
                    key={item.id}
                    className="bg-white rounded-lg p-8 mx-auto md:w-auto md:mx-2 md:max-w-xs"
                >
                    <div className="relative w-full aspect-[7/5] mx-auto z-0">
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 90vw, 280px"
                        />
                    </div>
                    <div className="my-4">
                        <p className="flex items-center justify-center  font-Family_1 font-bold text-[19px] text-center my-4 h-16">{item.detail}</p>
                        <p className="font-Family_1 w-full">{item.sentence}</p>
                    </div>
                </div>
            ))}
        </div>
    );

}