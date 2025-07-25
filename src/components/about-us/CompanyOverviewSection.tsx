import * as React from "react";
import { CompanyInfoRow } from "./CompanyInfoRow";

export function CompanyOverviewSection() {
const businessOverview = (
    <div>
    <div>
        • 開発ドメイン（ラーニングシステム開発、リクルートシステム）
    </div>
    <div>
        • 教育ドメイン（エンジニア育成（新人研修）（リスキング））
    </div>
    <div>
        • アウトソーシングドメイン（講師出向サービス、システムエンジニアリングサービス）
    </div>
    </div>
);

return (
    /* 会社概要の設定 */
    <section className="flex flex-col gap-0.5 items-start w-full">
    <CompanyInfoRow label="社名"     value="Hiyoku合同会社" />
    <CompanyInfoRow label="設立"     value="2022年11月4日" />
    <CompanyInfoRow label="代表者"   value="代表社員　藤岡　忠彦" />
    <CompanyInfoRow label="資本金"   value="〇〇円" />
    <CompanyInfoRow label="従業員数" value="◯名" />
    <CompanyInfoRow label="所在地"   value="〒810-0001福岡県福岡市中央区天神4-6-28天神ファーストビル7階" />
    <CompanyInfoRow label="電話番号" value="050-1808-3620" />
    <CompanyInfoRow label="事業概要" value={businessOverview} />
    </section>
);
}