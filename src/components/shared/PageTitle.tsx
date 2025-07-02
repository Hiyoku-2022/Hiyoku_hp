
type PageTitleProps = {
    japaneseTitle : string;
    englishTitle : string;
}

export default function ({japaneseTitle,englishTitle}:PageTitleProps) {
    return(
        <>
            <div className="mt-16 py-40">
            <h3 className="font-Family_2 font-bold text-[33px] md:text-3xl text-center">{japaneseTitle}</h3>
            <p className="font-Family_3 m-4 font-bold text-[16px] text-center">{englishTitle}</p>
            </div>
        </>
    )
}