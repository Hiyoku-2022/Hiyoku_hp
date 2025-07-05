// 各ページの見出しタイトル(共通コンポーネント)
type PageTitleProps = {
    titleJP: string;
    subtilteEN?: string;
    as?: 'h1' | 'h2' | 'h3';
}

export default function PageTitle({titleJP,subtilteEN}:PageTitleProps) {
    return(
        <>
        <header className="py-16 mt-32 md:py-32 text-center">
            <h1 className="font-Family_2 text-[23px] font-semibold md:text-[33px]">{titleJP}</h1>
            {subtilteEN && (
                <p className="font-Family_3 font-bold text-[16px] text-center m-4">{subtilteEN}</p>
            )}
        </header>
        </>
    )
}