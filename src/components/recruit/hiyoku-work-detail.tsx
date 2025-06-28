type workDetail={
    id:number;
    occupation: string;
    sentence: string;
}

const occupations: workDetail[] = [
    {id:1,occupation:'システムエンジニア',sentence:'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'},
    {id:2,occupation:'職種１',sentence:'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'},
    {id:3,occupation:'職種２',sentence:'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'}
];

export default function WorkDetail(){
    return (
        <div className="flex justify-around w-full">
            {occupations.map((occupations)=>(
                <div key={occupations.id} className="mx-full my-10 w-1/3 text-left">
                    <p className="text-center">{occupations.occupation}</p>
                    <p className="mx-5 my-5">{occupations.sentence}</p>
                </div>
            ))}
        </div>
    );
}