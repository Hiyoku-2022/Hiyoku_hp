// 各セクションのタイトルコンポーネント
type TitleProps = {
    children: React.ReactNode;
};

export default function HeadTitle({ children }: TitleProps) {
    return (
        <div className="w-200 mx-auto my-12 lg:my-24">
            <h1 className="font-bold text-center mx-auto border-b-2 border-foreground w-fit text-xl lg:text-3xl">{children}</h1>
        </div>
    );
}