/*==========================================================================
  お知らせ（NEWS）記事のデータ

  【なぜコード内に持っているのか】
  以前は microCMS（ヘッドレスCMS）から取得していたが、2026-08にやめた。理由は3つ。

  1. microCMS のアカウントが会社の管理下に無く、招待も受けられない状態だった。
     外部サービスに記事という資産を預けたまま、こちらから触れないのは危険。
  2. 記事は13ヶ月で4本・画像ゼロ・全文で約1,500文字。
     この規模にヘッドレスCMSは明らかに過剰で、運用の手間の方が大きい。
  3. これにより環境変数（MICROCMS_*）がゼロになり、
     ホスティングを移す際に引き継ぐ設定が無くなった。

  【記事を追加・修正するには】
  下の newsArticles 配列に要素を足す（先頭が新しい記事）。
    - id          : URLになる（/news/<id>）。半角英数とハイフンで一意に付ける
    - title       : 一覧と詳細に出る見出し
    - content     : HTML文字列。<p> <br> <a> 程度で十分
    - publishedAt : 公開日時（ISO 8601 / UTC）。一覧の並び順にも使われる
  追加してコミットすれば、デプロイ時に反映される。

  ※ id は microCMS 時代の値をそのまま引き継いでいる。
     既に外部に共有されたURLや検索エンジンのインデックスを壊さないため。
==========================================================================*/

export type NewsArticle = {
  id: string;
  title: string;
  /** HTML文字列。表示側でサニタイズしてから描画する */
  content: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  revisedAt: string;
  category: string | null;
};

/** 公開日の新しい順に並べておく（一覧の表示順がこれに従う） */
export const newsArticles: NewsArticle[] = [
  {
    id: "soa87wn8qw",
    title: "2026年度新人研修がスタートしました！",
    content: "<p>今年度の新入社員を対象とした新人研修がスタートしました！<br><br>研修の詳細は<a href=\"https://punctual-bear-1u1umvv.gamma.site/\" target=\"_blank\" rel=\"noopener noreferrer\">こちら</a></p>",
    publishedAt: "2026-03-19T05:58:44.988Z",
    createdAt: "2026-03-19T05:58:15.160Z",
    updatedAt: "2026-04-05T15:00:05.252Z",
    revisedAt: "2026-04-05T15:00:05.252Z",
    category: null,
  },
  {
    id: "5pomvkn7a",
    title: "2026年度新人研修募集開始！",
    content: "<p>新人研修3ヶ月集中プログラム2026年度の募集を開始しました！</p><p>【開催期間】<br>2026年4月6日〜6月30日<br>平日　9：00〜18：00 （但し17時45分から18時までの15分は日報記入）</p><p>【定員】<br>・対面研修25名</p><p>・オンライン研修　<br>　人数はご相談ください</p><p><br>詳しい情報は<a href=\"https://hiyoku-training-tadsofc.gamma.site/\" target=\"_blank\" rel=\"noopener noreferrer\">こちら</a>ご覧ください!</p><p>申込期限が2月16日、早期申込の割引期限が1月31日までの募集となりますので、少しでも興味がありましたらお気軽にお問い合わせください。</p>",
    publishedAt: "2025-11-13T10:50:18.431Z",
    createdAt: "2025-11-07T05:41:49.798Z",
    updatedAt: "2025-12-10T10:52:37.016Z",
    revisedAt: "2025-12-10T10:52:37.016Z",
    category: null,
  },
  {
    id: "cjv3-_19sri",
    title: "e-HUB 交流会の開催案内",
    content: "<p>ITエンジニアの方、これからITエンジニアを目指したい方、ITエンジニアと仕事をしたい方を対象に、合同会社Hiyokuが運営に参画している交流イベント「e-HUB」のご案内です！<br></p><p>イベントの詳細・参加方法は以下のURLよりご確認ください！<br><a href=\"https://e-hub.connpass.com/event/369962/\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">https://e-hub.connpass.com/event/369962/</a></p><p></p><p>イベントではLT(Lightning Talk)を開催しており、LT登壇者も募集しております。<br>「e-HUB」に初めて参加する方、LTに初めて挑戦する方、大歓迎です！<br><br>【開催日時】</p><p>　2025/10/08 (水) 19:30〜22:00 (L.O. 21:30)</p><p>【開催場所】</p><p>　Dining Bar Milk Tea　福岡市中央区今泉1-9-19 Bulala 3F</p><p>　天神南駅から徒歩6分　<a href=\"https://maps.app.goo.gl/DQo4ZqkNYFYDzcn88\">https://maps.app.goo.gl/DQo4ZqkNYFYDzcn88</a></p><p>【会費】</p><p>　4,500円（フード付き2時間飲み放題コース ）</p><p>【LT ( Lightning Talk ) について】</p><p>　LT登壇者を募集しています！（先着4名）</p><p>　開催当日は20:00 ~ 20:30に2名、21:00 ~ 21:30に2名のタイムスケジュールでLTを開催します。</p><p>　LT登壇者には会場にて1,000円のキャッシュバックします！</p>",
    publishedAt: "2025-09-28T13:26:21.956Z",
    createdAt: "2025-09-28T13:26:21.956Z",
    updatedAt: "2025-10-11T03:40:16.003Z",
    revisedAt: "2025-10-11T03:40:16.003Z",
    category: null,
  },
  {
    id: "d1hqzx708jyr",
    title: "Hiyokuのホームページをリニューアルしました！",
    content: "<p>この度、ホームページを全面的にリニューアルしました！</p><p>デザインを一新し、より見やすくなりました🎶<br>スマートフォンでも快適にご利用いただけます📱</p><p>今後ともHiyoku合同会社をよろしくお願いいたします！</p>",
    publishedAt: "2025-07-17T06:57:06.751Z",
    createdAt: "2025-07-17T06:57:06.751Z",
    updatedAt: "2025-07-17T08:03:29.407Z",
    revisedAt: "2025-07-17T08:03:29.407Z",
    category: null,
  },
];

/**
 * 一覧取得。microCMS の API と同じ戻り値の形を保っているので、
 * 呼び出し側（/api/blogs）のレスポンス構造を変えずに済む。
 */
export function getNewsList(offset = 0, limit = 10) {
  return {
    contents: newsArticles
      .slice(offset, offset + limit)
      .map(({ id, title, publishedAt }) => ({ id, title, publishedAt })),
    totalCount: newsArticles.length,
    offset,
    limit,
  };
}

/** 1件取得。見つからなければ undefined */
export function getNewsById(id: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.id === id);
}
