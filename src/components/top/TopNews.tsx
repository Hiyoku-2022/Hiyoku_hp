import React from "react";
import Link from "next/link";
import { ButtonWithIcon } from "../ui/button";
import { ChevronRight } from "lucide-react";

export function TopNews() {
    return (
        <div>
            <p>NEWS</p>
            <p>ニュース</p>
            <Link href="/news">
                <ButtonWithIcon
                    variant="blue"
                    icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                >
                    NEWS一覧を見る
                </ButtonWithIcon>
            </Link>
        </div>
    )
}