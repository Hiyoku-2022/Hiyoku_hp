"use client";
import * as React from "react";
import { PromiseCard } from "./PromiseCard";

interface PromiseData {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}

const promiseData: PromiseData[] = [
  {
    id: "engineer-development",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f96aa6696d356b37a332aa59469bfd04d3575f4b?placeholderIfAbsent=true&apiKey=2934acbbd6d14fa495d8d68be5b177ee",
    title: "活躍できるエンジニアを\n育てる",
    description:
      "シリコンバレーや世界的なIT企業では マストな知識であるコンピュータサイエンス も習得します。 アルゴリズムを徹底的に鍛え、 問題解決能力を飛躍的に向上させます。 新人研修から既存エンジニアのリスキリングまで、 御社の人材をさらに価値ある存在に引き上げます。",
  },
  {
    id: "recruitment-innovation",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1e81a9d65edd2bc850c54d5d400c23814eb1b7db?placeholderIfAbsent=true&apiKey=2934acbbd6d14fa495d8d68be5b177ee",
    title: "革新的な技術で\nエンジニア採用の常識を\n変える",
    description:
      "現在は、採用基準をどうしてもスキルシートに 頼らざるを得ない状況となっています。 果たしてそれで本当に良いのでしょうか？ 企業と人にミスマッチが生じない。経験値だけではなく 将来性や問題解決能力、コミュニケーション能力などを 総合的に判断でき、より費用対効果の高い リクルートシステムをクリエイティブしていきます。",
  },
  {
    id: "poverty-elimination",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/eb51754a333830364268aa9bc71a154411da9d69?placeholderIfAbsent=true&apiKey=2934acbbd6d14fa495d8d68be5b177ee",
    title: "世界の貧困差を\nなくす",
    description:
      "わたしたちHiyokuは教育を通して世界の貧困差を なくすことを最終ミッションとして掲げています。 世界中の未だ見ぬ才能がわたしたちを待っています。 それを見つけ出し明るい未来を想像していきます。",
  },
];

export const HiyokuPromise: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center px-64 py-24 font-medium text-gray-600 max-md:px-5">
      <header className="gap-2.5 self-stretch pb-1.5 text-3xl tracking-wider leading-relaxed text-center text-gray-600 whitespace-nowrap border-b-2 border-solid border-b-[color:var(--Text,#44585F)]">
        <h1>Hiyokuの約束</h1>
      </header>

      <div className="flex flex-wrap gap-8 justify-center mt-16 max-md:mt-10 max-md:max-w-full">
        {promiseData.map((promise, index) => (
          <PromiseCard
            key={promise.id}
            imageUrl={promise.imageUrl}
            title={promise.title}
            description={promise.description}
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
