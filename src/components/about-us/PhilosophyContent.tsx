import * as React from "react";
import { PhilosophySection } from "./PhilosophySection";

export function PhilosophyContent() {
  const sections = [
    {
      title: "社名の由来ー『比翼の翼と連理の枝』",
      isTitle: true,
    },
    {
      content:
        "「天にあっては比翼の鳥となり、地にあっては連理の枝とならん」という、中国の長編叙事詩の中に有名な一節があります。",
    },
    {
      content: (
        <>
          <span>比翼の鳥とは伝説上の鳥で、地上ではそれぞれに歩くけれど、</span>
          <br />
          <span>
            空を飛ぶ時は常に一体となって助け合わなければ飛べなかったそうです。
          </span>
        </>
      ),
    },
    {
      content: (
        <>
          <span>
            この事から、エンジニアと会社、企業同士、クライアントとエンジニアなどそれぞれお互いにとって
          </span>
          <br />
          <span>
            無くてはならない存在でありたい、Win-Winの関係を築いていきたい、という思いを込め、社名を&quot;Hiyoku&quot;と名づけました。
          </span>
        </>
      ),
    },
    {
      content: (
        <>
          <span>
            人の育成ーそれも「本当に価値のある人」＝「技術者として生きていける人材」を育てていきたいと考えています。
          </span>
          <br />
          <span>
            まずは日本からスタートし、ゆくゆくは世界中に広げていけるよう計画しています。
          </span>
          <br />
          <span>
            ポテンシャルをもった人は、世界中にたくさんいます。しかし世界を見てみると、学びたくても学ぶお金が無かったり、
          </span>
          <br />
          <span>銀行口座も作れないという人がいたりします。</span>
        </>
      ),
    },
    {
      content: (
        <>
          <span>
            ただそういった人であっても、スマートフォンやPCは持っていたりする今の時代、「Wi-fi環境さえあれば学べる」
          </span>
          <br />
          <span>
            という環境を創ることさえできれば貧困層でも学ぶことができ、またそれによって貧困から抜け出すことができる
          </span>
          <br />
          <span>かもしれないー</span>
        </>
      ),
    },
    {
      content: (
        <>
          <span>
            自社内だけにとどまらず、他の企業とも協力し合いながら、そういった好循環を巻き起こし、
          </span>
          <br />
          <span>社会貢献をしていきたいと考えています。</span>
        </>
      ),
    },
  ];

  return (
    <article className="flex flex-col gap-8 justify-between items-start self-stretch">
      {sections.map((section, index) => (
        <PhilosophySection
          key={index}
          title={section.title}
          content={section.content}
          isTitle={section.isTitle}
        />
      ))}
    </article>
  );
}
