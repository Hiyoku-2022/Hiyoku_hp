// 各ページの見出しタイトル(共通部品)
type PageTitleProps = {
    japaneseTitle : string;
    englishTitle : string;
}

export default function ({japaneseTitle,englishTitle}:PageTitleProps) {
    return(
        <div className="py-32 mt-32 md:py-32 md:mt-32">
            <h3 className="font-Family_2 text-[23px] font-semibold text-center md:text-[33px]">{japaneseTitle}</h3>
            <p className="font-Family_3 font-bold text-[16px] text-center m-4">{englishTitle}</p>
        </div>
    )
}