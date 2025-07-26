// 各ページの見出しタイトル(共通コンポーネント)
type PageTitleProps = {
    titleJP: string;
    subtitleEN?: string;
    as?: 'h1' | 'h2' | 'h3';
}

export default function PageTitle({titleJP,subtitleEN}:PageTitleProps) {
    return(
        <>
        <header className="py-16 mt-32 md:py-32 text-center">
            <h1 className="font-Family_2 text-2xl font-semibold md:text-3xl">{titleJP}</h1>
            {subtitleEN && (
                <p className="font-Family_3 font-bold text-base text-center m-4">{subtitleEN}</p>
            )}
        </header>
        </>
    )
}