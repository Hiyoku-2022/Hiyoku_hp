import type { Metadata } from "next";

/*--------------------------------------------------------------------------
  /news 用のメタデータ

  【なぜ page.tsx ではなく layout.tsx に書くのか】
  src/app/news/page.tsx は 'use client' で始まるクライアントコンポーネントで、
  Next.js の仕様上クライアントコンポーネントからは metadata を export できない。
  同じルート配下に layout.tsx を置けばサーバー側で metadata を定義できるので、
  page.tsx をサーバーコンポーネントへ書き換えずに済むこの方法を採った。

  （page.tsx 側をサーバーコンポーネント化して一覧部分だけ子コンポーネントへ
    切り出す手もあるが、動いているコードに手を入れる範囲が広くなるため見送り）
--------------------------------------------------------------------------*/
export const metadata: Metadata = {
  /*
    title を単なる文字列にすると、ルートの layout.tsx で定義した
    template（"%s | hiyoku合同会社"）が【この配下のページに継承されない】。
    実際、個別記事のタイトルが社名なしの「e-HUB 交流会の開催案内」だけになった。
    ここで template を張り直しておくと、/news/[id] 側は記事名だけを返せばよい。
      default  … /news 自身のタイトル。ここにはさらに【ルートのtemplateが乗る】ので
                 社名を書かない（書くと "お知らせ | hiyoku合同会社 | hiyoku合同会社" になる）
      template … /news/[id] など配下のページに適用される形
  */
  title: {
    default: "お知らせ",
    template: "%s | hiyoku合同会社",
  },
  description:
    "hiyoku合同会社からのお知らせ・新着情報の一覧です。エンジニア育成研修やサービスに関する最新情報を掲載しています。",
  alternates: { canonical: "/news" },
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // レイアウトとしては何も足さず、children をそのまま通す。
  // 目的は上の metadata を有効にすることだけ。
  return <>{children}</>;
}
