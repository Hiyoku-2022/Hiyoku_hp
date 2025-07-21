// components/ui/SpeechBubble.tsx

type SpeechBubbleProps = {
    bgImage: string;
    text: React.ReactNode;
};

export const texts: Record<string, React.ReactNode> = {
    type1: (
        <>
            <span className="text-sub03">開発現場が</span>多忙で<span className="text-sub03">新人の教育</span>に<br />手が行き届かない
        </>
    ),
    type2: (
        <>
            <span className="text-sub03">IT分野に進出したい</span>が<br /><span className="text-sub03">開発が出来る人材</span>がいない
        </>
    ),
    type3: (
        <>
            各支店で<span className="text-sub03">技術レベルに差</span>があり<br /><span className="text-sub03">均一なスキルアップ</span>を図りたい
        </>
    ),
    type4: (
        <>
            <span className="text-sub03">既存エンジニアの理解度</span>が<br /><span className="text-sub03">イマイチ低く不安</span>に感じる
        </>
    ),
};

export const SpeechBubble = ({ bgImage, text }: SpeechBubbleProps) => (
    <div
        className={`
            w-[90%] md:w-[400px]
            min-h-[200px] md:min-h-[150px]
            flex justify-center
            bg-center bg-no-repeat bg-contain
        `}
        style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="flex items-center text-center">
                <span className="text-base leading-snug font-bold">{text}</span>
            </div>
    </div>
);
