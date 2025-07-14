// 「仕事について」の詳細コンポーネント
type WorkDetailItem={
    id:number;
    occupation: string;
    sentence: string;
}

const occupations: WorkDetailItem[] = [
    {id:1,occupation:'システムエンジニア',sentence:'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'},
    {id:2,occupation:'職種①',sentence:'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'},
    {id:3,occupation:'職種②',sentence:'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'}
];

export default function WorkDetail(){
    return (
        <div className="font-Family_1 flex flex-col md:flex-row justify-center mx-auto w-[90%] md:w-[70%]">
            {occupations.map((item)=>(
                <div key={item.id} className="flex-1 text-left">
                    <p className="text-center text-[19px] font-bold my-8">{item.occupation}</p>
                    <p className="mx-5 my-5 text-[16px]">{item.sentence}</p>
                </div>
            ))}
        </div>
    );
}