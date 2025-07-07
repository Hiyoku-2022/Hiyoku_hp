import React from "react";
import { ChevronRight } from "lucide-react";
import { HoverShapeButtonWithIcon } from "../ui/button";

export function FooterButtons () {
    return (
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <HoverShapeButtonWithIcon
                variant="softBlue"
                icon={<ChevronRight className="w-4 h-4 transition-colors" />}
            >
                LMSについてのお問い合わせ

            </HoverShapeButtonWithIcon>
            <HoverShapeButtonWithIcon
                variant="softOrange"
                icon={<ChevronRight className="w-4 h-4 transition-colors" />}
            >
                採用についてのお問い合わせ
            </HoverShapeButtonWithIcon>
        </div>
    )
};
