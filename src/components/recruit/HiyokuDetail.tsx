// hiyokuについての詳細コンポーネント
import Image from "next/image";

type HiyokuDetail ={
    id: number;
    src: string;
    alt: string;
    width?: number;
    height?: number;
    detail: string;
    sentence: string;
};

const hiyokuDetailItems: HiyokuDetail[] = [
  { id: 1, src: 'recruit/interview_md.svg', alt: 'ヒヨクの特長・魅力１', width: 500, height: 500, detail: '未経験からプロフェッショナルへ導く、確かな教育基盤', sentence: '「ITエンジニアになりたいけど、何から始めればいいか分からない…」そんな不安はHiyokuが解消します。当社が誇る自社開発のラーニングシステムを活用し、ITの基礎から実践的な応用技術まで、体系的に学べる教育環境をご用意。着実にスキルを習得し、自信を持って現場で活躍できるITエンジニアへと成長できます。経験者の方も、最新技術の習得や新たな分野への挑戦をサポートします。' },
  { id: 2, src: 'recruit/interview_md.svg', alt: 'ヒヨクの特長・魅力2', width: 280, height: 200, detail: '全国どこからでも、同じ目標を持つ仲間と繋がる', sentence: '勤務地は福岡本社・東京支社、そして場所を選ばないフルリモート勤務も可能！柔軟な働き方で、あなたのライフスタイルに合わせたキャリアを築けます。毎月開催される社内MTGでは、オンラインでの交流はもちろん、定期的なオフラインでの懇親会も実施。物理的な距離を超えて、チームとしての一体感を大切にしています。' },
  { id: 3, src: 'recruit/interview_md.svg', alt: 'ヒヨクの特長・魅力3', width: 280, height: 200, detail: '挑戦」が評価される、風通しの良いカルチャー', sentence: 'Hiyokuの社内は、何でも気軽に相談できるアットホームな雰囲気。ベンチャー企業ならではの「やってみたい」をすぐに試せるスピード感が魅力です。失敗を恐れずに挑戦できる文化が根付いているので、あなたのアイデアが新しいサービスや機能として形になる喜びを日々実感できます。' },
];

export default function HiyokuDetail() {
    return (
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mx-0 my-10 w-[70%] md:w-[90%]">
            {hiyokuDetailItems.map((item) => (
                <div
                    key={item.id}
                    className="bg-white rounded-lg p-8 mx-auto md:w-auto md:mx-2 md:max-w-xs flex flex-col h-full"
                >
                    <div className="relative w-full aspect-[7/5] mx-auto z-0 flex-shrink-0 mb-4">
                        <Image
                            src={item.src}
                            alt={item.alt || 'Hiyoku detail image'}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 90vw, 280px"
                            priority={item.id === 1}
                        />
                    </div>
                    <div className="flex flex-col flex-grow">
                        <p className="flex items-center justify-center font-bold text-lg text-center mb-4 min-h-[4rem] leading-tight">{item.detail}</p>
                        <p className="w-full text-sm leading-relaxed flex-grow">{item.sentence}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}