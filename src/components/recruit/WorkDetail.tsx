// 「仕事について」の詳細コンポーネント
type WorkDetailItem={
    id:number;
    occupation: string;
    sentence: string;
}

const occupations: WorkDetailItem[] = [
    { id: 1, occupation: '💻 ITエンジニア\n(未経験・経験者ともに歓迎！)', sentence: 'あなたのスキルや経験、希望に合わせて、幅広い業務に挑戦できます。 自社開発のラーニングシステムを駆使しながら、開発・運用・保守・インフラ構築など、ITエンジニアとして多岐にわたる経験を積むことが可能です。' },
    { id: 2, occupation: '💼 営業', sentence: '法人のお客様へ、Hiyokuが提供するラーニングシステムの導入提案をお任せします。 新規顧客の開拓から導入後の手厚いフォローまで、顧客の課題解決に深くコミットし、ビジネスを大きく動かすチャレンジングな営業を経験できます。' },
    { id: 3, occupation: '📊 経理・事務', sentence: '少数精鋭の当社をバックオフィスから力強く支える、重要なポジションです。 請求・支払い・給与計算など、経理実務全般を幅広く担当。会社の成長を支える屋台骨として、あなたの専門性を存分に発揮してください。' }
];

export default function WorkDetail() {
    return (
        <div className="flex flex-col md:flex-row justify-center mx-auto w-[90%] md:w-[70%]">
            {occupations.map((item) => (
                <div key={item.id} className="text-left flex flex-col">
                    <p className="text-center text-lg font-bold my-8 whitespace-pre-line flex-1">{item.occupation}</p>
                    <p className="mx-5 my-5 text-base flex-1">{item.sentence}</p>
                </div>
            ))}
        </div>
    );
}