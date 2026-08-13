import type { Metadata } from "next";
import AboutHiyoku from "@/components/recruit/AboutHiyoku";
import AboutWork from "@/components/recruit/AboutWork";
import InterviewItems from "@/components/recruit/InterviewItems";
import Solicitation from "@/components/recruit/Solicitation";
import FAQ from "@/components/recruit/FAQ";
import Pankuzu from "@/components/shared/Pankuzu";


// このページのメタデータ。求職者は「会社名 + 採用」で検索してくるので、
// title は素直に「採用情報」でよい（template で社名が後ろに付く）。
export const metadata: Metadata = {
  title: "採用情報",
  description:
    "hiyoku合同会社の採用情報。エンジニア育成事業を一緒に伸ばしていく仲間を募集しています。仕事内容・社員インタビュー・よくある質問を掲載しています。",
  alternates: { canonical: "/recruit" },
};

export default function RecruitPage() {
    return (
        <div>
            <Pankuzu
                titleJP="採用情報"
                subtitleEN="RECRUIT"
                breadcrumbs={[
                    { label: "採用情報" }
                ]}
            />

            <div className="mx-auto text-center w-[90%]">
                <p className="text-xl lg:text-3xl my-8 font-bold">あなたの「やってみたい」が、未来を創る。
                    <br />Hiyokuで、次世代のITエンジニア・ビジネスパーソンを目指しませんか？
                </p>
                <p className="text-sm lg:text-base mx-auto w-[90%] md:w-[90%]">
                    「IT業界で活躍したい」「もっとスキルを磨きたい」
                    <br />— その熱い想い、Hiyokuが全力で応援します！
                    <br />未経験からプロを目指す方も、キャリアをさらに加速させたい経験者の方も、
                    <br />Hiyokuにはあなたの可能性を広げるステージがあります。
                    <br />私たちと一緒に、挑戦し、学び、成長し続ける仲間を心からお待ちしています。
                </p>
            </div>

            <AboutHiyoku />

            <AboutWork />

            <InterviewItems />

            <Solicitation />

            <FAQ />
        </div>
    );
}