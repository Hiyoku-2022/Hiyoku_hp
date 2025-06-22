import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react"
import { ButtonWithIcon } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <main className="pt-20 px-4 max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold mb-6">メインページ</h1>
          <p>SHAPING THE FUTURE<br />WITH TECHNOLOGY未来を翔ける<br />価値を造る。</p>
          <p>私たちについて</p>
          <p>教育で世界の貧困差をなくす</p>
          <p>
            私たちHiyoku合同会社は教育事業をベースに、<br />
            「価値あるものを世の中に生み出していきたい」<br />
            「本当に価値のある人材を育てていきたい」<br />
            <br />
            そんな想いで始まった、2022年11月に誕生したスタートアップ企業です。<br />
            <br />
            エンジニアとしての技術力を手に日本から海外に向けて、<br />
            世界的な社会貢献が可能な人材の育成に本気で取り組んでいます。<br />
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center md:grid md:grid-cols-3 md:gap-8 md:items-start">
          <div className="flex flex-col items-center text-center">
            <p>What</p>
            <Image src="/icon/favicon.ico" alt="Site logo icon" width={150} height={150} />
            <p>本物のエンジニア育成で<br />IT業界を支えます</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <p>Why</p>
            <Image src="/icon/favicon.ico" alt="Site logo icon" width={150} height={150} />
            <p>本当に価値のある技術者育成を<br />日本から世界へ広げていきます</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <p>How</p>
            <Image src="/icon/favicon.ico" alt="Site logo icon" width={150} height={150} />
            <p>最新技術を活用して<br />最適な学び提供します</p>
          </div>
        </div>

        <ButtonWithIcon
            variant="blue"
            icon={<ChevronRight className="w-4 h-4 transition-colors" />}
        >
            採用についてのお問い合わせ
        </ButtonWithIcon>

        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center md:grid md:grid-cols-2 md:gap-8 md:items-start">
          <div>
            <h1 className="text-xl font-bold mb-6">プロダクト</h1>
            <p className="text-gray-700">Re-Light LMS</p>
            <Image src="/icon/favicon.ico" alt="Site logo icon" width={150} height={150} />
          </div>
          <div>
            <p className="text-gray-700">シリコンバレーや世界的なIT企業ではマストな知識であるコンピュータサイエンスを 習得します。アルゴリズムを徹底的に鍛え、問題解決能力を飛躍的に向上させます。
              LMSによる進捗管理はもちろん、AIによる質疑回答で24時間いつでも質問可能です。 各々のスタイルに合わせて学習できます。 また、多忙なスケジュールの担当者のリソースを割かず教育することが可能です。
              詳しくみる</p>
            <ButtonWithIcon
                        variant="blue"
                        icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                    >
              採用についてのお問い合わせ
            </ButtonWithIcon>
          </div>
        </div>
        <div>
          <p>NEWS</p>
          <p>ニュース</p>
          <ButtonWithIcon
              variant="blue"
              icon={<ChevronRight className="w-4 h-4 transition-colors" />}
          >
            NEWS一覧を見る
          </ButtonWithIcon>
        </div>

        <div>
          <p>RECRUIT</p>
          <p>採用情報</p>
          <p>私たちと一緒に働いてくれる仲間を募集しています。</p>
          <div>
            <ButtonWithIcon
                variant="blue"
                icon={<ChevronRight className="w-4 h-4 transition-colors" />}
            >
              詳しく見る
            </ButtonWithIcon>
            <ButtonWithIcon
                variant="blue"
                icon={<ChevronRight className="w-4 h-4 transition-colors" />}
            >
              エントリーフォーム
            </ButtonWithIcon>
          </div>
        </div>
      </main>
    </>
  )
}