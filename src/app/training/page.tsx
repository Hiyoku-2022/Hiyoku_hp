import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Pankuzu from "@/components/shared/Pankuzu";
import HeadTitle from "@/components/recruit/HeadTitle";
import { HoverShapeButtonWithIcon } from "@/components/ui/button";
import { training, curriculumAreas } from "@/data/training";

/*--------------------------------------------------------------------------
  新人研修（3ヶ月集中プログラム）の募集ページ

  【なぜサイト内に作ったか】
  2026年度までは Gamma（外部サービス）のページへ飛ばしていた。
  ・年度ごとに別URLになり、ヘッダ等のリンクを毎年貼り替える必要があった
  ・取引先から「ホームページの募集を新年度向けに」と求められたとき、
    社内で直せる場所に無いと対応が遅れる
  ため、2027年度から /training に固定した。URLは年度をまたいで変えない。

  年度ごとに変わる値（期間・料金・会場）は src/data/training.ts にだけ書く。
  このファイルには文言の骨組みだけを置く。

  ⚠️ 助成金について:
     申請書類の作成・提出の代行は社会保険労務士の独占業務にあたる。
     ここに書けるのは【訓練実施機関として自社が用意する書類】までなので、
     「申請代行」と読める表現は入れないこと（/service と同じ方針）。
--------------------------------------------------------------------------*/
export const metadata: Metadata = {
  title: `${training.fiscalYear}年度 新人研修（3ヶ月集中プログラム）`,
  description: `${training.fiscalYear}年度の新入社員向けエンジニア研修。${training.period.label}の${training.period.days}日間（合計${training.period.totalHoursLabel}）、コンピュータサイエンス・Java・データベース・AI駆動開発までを福岡で対面で学びます。`,
  alternates: { canonical: "/training" },
};

// 概要表の行。表示順もこの順。
const overviewRows: { label: string; value: string }[] = [
  { label: "研修期間", value: training.period.label },
  {
    label: "研修日数",
    value: `${training.period.days}日間（合計${training.period.totalHoursLabel}）`,
  },
  { label: "研修時間", value: training.period.dailyHoursLabel },
  { label: "受講形式", value: training.format },
  { label: "会場", value: `${training.venue.name}（${training.venue.address}）` },
  {
    label: "受講料",
    value: `受講生1名につき ${training.price.excludingTaxLabel}（税込 ${training.price.includingTaxLabel}）`,
  },
  { label: "申込期限", value: training.applicationDeadlineLabel },
];

// 研修の特長。数字の裏付けが取れない強い言い回し（「◯倍」等）は使っていない。
const features: { title: string; body: string }[] = [
  {
    title: "コンピュータサイエンスを土台に",
    body: "言語の文法だけでなく、データ構造や計算量といった原理から学びます。不具合が起きたときに、場当たりではなく原因から考えられるエンジニアを育てます。",
  },
  {
    title: "現場で使われている技術で",
    body: "Java とデータベース、Git／GitHub によるチーム開発の流れまで、配属後にそのまま使う技術と作法を研修の中で経験します。",
  },
  {
    title: "AI駆動開発を研修のうちから",
    body: "AIを「便利な道具」として正しく使えるよう、指示の出し方と、生成されたコードを自分で確かめる方法を身につけます。AIへの先入観を早いうちに取り除き、配属後の仕事の効率につなげます。",
  },
];

export default function TrainingPage() {
  return (
    <div>
      <Pankuzu
        titleJP="新人研修"
        subtitleEN="TRAINING"
        breadcrumbs={[{ label: "新人研修" }]}
      />

      {/* リード */}
      <div className="mx-auto text-center w-[90%]">
        <p className="text-xl lg:text-3xl my-8 font-bold">
          {training.fiscalYear}年度 新人研修
          <br />
          3ヶ月集中プログラムの受講企業を募集しています
        </p>
        <p className="text-sm lg:text-base mx-auto w-[90%] md:w-[70%]">
          新入社員の教育に、現場のエースエンジニアの時間を取られていませんか。
          <br className="max-md:hidden" />
          Hiyokuの新人研修は、コンピュータサイエンスの基礎から Java・データベース・AI駆動開発までを
          {training.period.days}日間でお預かりし、配属後すぐに現場の会話についていける状態に育てます。
        </p>
      </div>

      {/* 研修概要 */}
      <HeadTitle>研修概要</HeadTitle>
      <div className="w-[90%] md:w-[70%] mx-auto bg-white rounded-lg overflow-hidden">
        <dl>
          {overviewRows.map((row) => (
            <div
              key={row.label}
              className="flex flex-col md:flex-row border-b border-gray-200 last:border-b-0"
            >
              <dt className="md:w-48 shrink-0 font-bold text-sub03 bg-gray-50 px-6 py-4 text-sm lg:text-base">
                {row.label}
              </dt>
              <dd className="px-6 py-4 text-sm lg:text-base">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* 特長 */}
      <HeadTitle>研修の特長</HeadTitle>
      <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={feature.title} className="bg-white rounded-lg p-6">
            <p className="font-Family_3 text-sub03 text-sm tracking-widest mb-2">
              POINT {String(index + 1).padStart(2, "0")}
            </p>
            <p className="font-bold text-lg mb-3">{feature.title}</p>
            <p className="text-sm lg:text-base leading-relaxed">{feature.body}</p>
          </div>
        ))}
      </div>

      {/* カリキュラム */}
      <HeadTitle>カリキュラム</HeadTitle>
      <div className="w-[90%] md:w-[70%] mx-auto">
        <p className="text-sm lg:text-base mb-6 text-center">
          全{training.period.days}日間・合計{training.period.totalHoursLabel}。下記の分野を順に積み上げます。
        </p>
        <ol className="space-y-4">
          {curriculumAreas.map((area, index) => (
            <li key={area.title} className="bg-white rounded-lg p-6 flex gap-4">
              <span className="font-Family_3 font-bold text-white bg-sub03 rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                {index + 1}
              </span>
              <div>
                <p className="font-bold text-base lg:text-lg">{area.title}</p>
                <p className="text-sub03 text-sm mb-2">{area.items}</p>
                <p className="text-sm lg:text-base leading-relaxed">{area.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* 助成金 */}
      <HeadTitle>助成金の活用について</HeadTitle>
      <div className="w-[90%] md:w-[70%] mx-auto bg-white rounded-lg p-6 text-sm lg:text-base leading-relaxed">
        <p>
          本研修は、人材開発支援助成金などの活用をご検討いただける形で実施しています。
          訓練の実施機関として、時間割（研修スケジュール）や出席簿など、Hiyokuが用意する書類をご用意します。
        </p>
        <p className="mt-3 text-xs lg:text-sm text-gray-600">
          ※ 助成金の申請書類の作成・提出の代行は行っておりません。支給の可否や金額は、申請される企業様の状況により異なります。
        </p>
      </div>

      {/* お問い合わせ */}
      <div className="w-[90%] md:w-[70%] mx-auto my-16 lg:my-24 bg-white rounded-xl p-8 text-center">
        <p className="text-xl lg:text-2xl font-bold mb-4">
          <span className="text-sub03 tracking-widest">お申し込み・お問い合わせ</span>はこちら
        </p>
        <p className="text-sm lg:text-base mb-6">
          受講人数・日程のご相談も承ります。会社名・ご担当者様名・ご連絡先をお送りください。
          <br className="max-md:hidden" />
          後日担当者よりご連絡いたします。
        </p>
        <Link href={training.inquiryUrl} className="inline-flex justify-center">
          <HoverShapeButtonWithIcon
            variant="blue"
            icon={<ChevronRight className="w-4 h-4 transition-colors" />}
            className="w-64"
          >
            <span className="py-1">お問い合わせ</span>
          </HoverShapeButtonWithIcon>
        </Link>
      </div>
    </div>
  );
}
