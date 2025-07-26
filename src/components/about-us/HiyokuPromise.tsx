import * as React from "react";
import { PromiseCard } from "./PromiseCard";
import HeadTitle from "./HeadTitle";

interface PromiseData {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
}

const promiseData: PromiseData[] = [
    // 活躍できるエンジニアを育てるの設定詳細
{
    id: "engineer-development",
    imageUrl: "/about-us/promise01.svg",
    title: "活躍できるエンジニアを\n育てる",
    description:
    "シリコンバレーや世界的なIT企業では マストな知識であるコンピュータサイエンス も習得します。 アルゴリズムを徹底的に鍛え、 問題解決能力を飛躍的に向上させます。 新人研修から既存エンジニアのリスキリングまで、 御社の人材をさらに価値ある存在に引き上げます。",
},
//革新的な技術でエンジニア採用の常識を変えるの設定詳細
{
    id: "recruitment-innovation",
    imageUrl: "/about-us/promise02.svg",
    title: "革新的な技術で\nエンジニア採用の常識を\n変える",
    description:
    "現在は、採用基準をどうしてもスキルシートに 頼らざるを得ない状況となっています。 果たしてそれで本当に良いのでしょうか？ 企業と人にミスマッチが生じない。経験値だけではなく 将来性や問題解決能力、コミュニケーション能力などを 総合的に判断でき、より費用対効果の高い リクルートシステムをクリエイティブしていきます。",
},
// 世界の貧困差をなくすの設定詳細
{
    id: "poverty-elimination",
    imageUrl: "/about-us/promise03.svg",
    title: "世界の貧困差を\nなくす",
    description:
    "わたしたちHiyokuは教育を通して世界の貧困差を なくすことを最終ミッションとして掲げています。 世界中の未だ見ぬ才能がわたしたちを待っています。 それを見つけ出し明るい未来を想像していきます。",
},
];

export const HiyokuPromise: React.FC = () => {
return (
    <section className={`
        flex flex-col justify-center items-center
        py-[100px] md:py-[200px] space-y-10
        font-medium
    `}>
        <HeadTitle>Hiyokuの約束</HeadTitle>
        <div className={`
            flex flex-col md:flex-wrap xl:flex-row justify-center max-xl:items-center
            space-y-10 xl:space-y-0 space-x-0 xl:space-x-20
        `}>
            {promiseData.map((promise, index) => (
            <PromiseCard
                key={promise.id}
                imageUrl={promise.imageUrl}         // 画像
                title={promise.title}               // 中間タイトル
                description={promise.description}   // 詳細文
                className={
                index === 1 ? "flex flex-col justify-center my-auto" : ""
                }
            />
            ))}
        </div>
    </section>
);
};

export default HiyokuPromise;