import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonWithIcon } from "../ui/button";
import { ChevronRight } from "lucide-react";

export function TopAboutUS() {
    return (
        <>
            <div className="relative pt-20 px-4 max-w-4xl mx-auto z-40">
                <p>私たちについて</p>
                <p>教育で世界の貧困差をなくす</p>
                <p>
                    私たちHiyoku合同会社は教育事業をベースに、<br />
                    「価値あるものを世の中に生み出していきたい」<br />
                    「本当に価値のある人材を育てていきたい」<br />
                    <br />
                    そんな想いで始まった、2022年11月に誕生したスタートアップ企業です。<br />
                    <br />
                    エンジニアとしての技術力を手に日本から海外に向けて、<br />
                    世界的な社会貢献が可能な人材の育成に本気で取り組んでいます。<br />
                </p>
            </div>
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center md:grid md:grid-cols-3 md:gap-8 md:items-start">
                <div className="flex flex-col items-center text-center">
                    <p>What</p>
                    <Image src="/top/what.png" alt="Site logo icon" width={150} height={150} />
                    <p>本物のエンジニア育成で<br />IT業界を支えます</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <p>Why</p>
                    <Image src="/top/why.png" alt="Site logo icon" width={150} height={150} />
                    <p>本当に価値のある技術者育成を<br />日本から世界へ広げていきます</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <p>How</p>
                    <Image src="/top/how.png" alt="Site logo icon" width={150} height={150} />
                    <p>最新技術を活用して<br />最適な学び提供します</p>
                </div>
            </div>

            <Link href="/about-us">
                <ButtonWithIcon
                    variant="blue"
                    icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                >
                    私たちについて
                </ButtonWithIcon>
            </Link>
        </>
    )
}