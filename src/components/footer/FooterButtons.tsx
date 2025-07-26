import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { HoverShapeButtonWithIcon } from "../ui/button";

export function FooterButtons () {
    return (
        <div className="flex flex-col items-center space-y-5">
            <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSe16SRGMa40iGYzQFxmUkW_7G3LgIjJ_n9F83eDSH1nAkObHg/viewform?usp=sharing&ouid=103342829539540884944"
                className="mt-4"
            >
                <HoverShapeButtonWithIcon
                    variant="softBlue"
                    icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                    className="w-64 py-4"
                >
                    LMSについてのお問い合わせ

                </HoverShapeButtonWithIcon>
            </Link>
            <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeLNJ7LVm7ITzvnTyiEWzsd40LMbp0nRtgqGJkjSabq02IHgQ/viewform?usp=sharing&ouid=103342829539540884944"
                className="mt-4"
            >
                <HoverShapeButtonWithIcon
                    variant="softOrange"
                    icon={<ChevronRight className="w-4 h-4 transition-colors" />}
                    className="w-64 py-4"
                >
                    採用についてのお問い合わせ
                </HoverShapeButtonWithIcon>
            </Link>
        </div>
    )
};
