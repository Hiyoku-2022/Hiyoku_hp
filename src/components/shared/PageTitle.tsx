// 各ページの見出しタイトル(共通コンポーネント)
type PageTitleProps = {
    japaneseTitle : string;
    englishTitle : string;
}

export default function PageTitle({japaneseTitle,englishTitle}:PageTitleProps) {
    return(
        <div className="py-16 mt-32 md:py-32">
            <h3 className="font-Family_2 text-[23px] font-semibold text-center md:text-[33px]">{japaneseTitle}</h3>
            <p className="font-Family_3 font-bold text-[16px] text-center m-4">{englishTitle}</p>
        </div>
    )
}