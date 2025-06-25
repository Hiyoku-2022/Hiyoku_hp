import React from "react";
import { ButtonWithIcon } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function RecruitArea() {
    return (
        <div>
            <p>RECRUIT</p>
            <p>採用情報</p>
            <p>私たちと一緒に働いてくれる仲間を募集しています。</p>
            <div>
                <Link href="/recruit">
                    <ButtonWithIcon
                        variant="blue"
                        icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                    >
                        詳しく見る
                    </ButtonWithIcon>
                </Link>
                <Link href="/">
                    <ButtonWithIcon
                        variant="blue"
                        icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                    >
                        エントリーフォーム
                    </ButtonWithIcon>
                </Link>
            </div>
        </div>
    )
}