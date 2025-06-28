import Image from "next/image";

type hiyouDetail ={
    id: number;
    src : string;
    alt : string;
    width? : number;
    height? : number;
    detail : string;
    sentence : string;
}

const items: hiyouDetail[] = [
  { id:1,src : '/recruit/responsive.png', alt: 'wariai',width: 280, height: 200,detail: '社員の70%が20代〜30代', sentence: 'これはリストの最初の要素です。ひよくの特長ひよくの特長ひよくの特長ひよくの特長' }, 
  { id:2,src : '/recruit/responsive.png', alt: '',width: 280, height: 200,detail: 'ヒヨクの特長・魅力１', sentence: 'これはリストの最初の要素です。ひよくの特長ひよくの特長ひよくの特長ひよくの特長' }, 
  { id:3,src : '/recruit/responsive.png', alt: '',width: 280, height: 200,detail: 'ヒヨクの特長・魅力２', sentence: 'これはリストの最初の要素です。ひよくの特長ひよくの特長ひよくの特長ひよくの特長' }, 
];

export default function HiyokuDetail(){
    return (
        <div className="flex justify-around mx-5 my-10 w-250">
            {items.map((items)=>(
                <div key={items.id} className="bg-white mx-2 rounded-lg p-8 w-1/3">
                        <Image src={items.src} alt={items.alt} width ={items.width} height={items.height} className="mx-auto"/>
                    <div className=" my-5">
                        <p className="text-center my-5">{items.detail}</p>
                        <p className="w-full">{items.sentence}</p>
                    </div>
                </div>
            ))}
        </div>
    );

}