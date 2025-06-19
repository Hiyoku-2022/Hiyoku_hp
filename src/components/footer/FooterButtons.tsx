import React from "react";
import { ButtonWithIcon } from "../ui/ButtonWithIcon";

export const FooterButtons = () => (
    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        <ButtonWithIcon
            variant="outline"
            iconSrc="/news/blogdetail.png"
            iconAlt=""
        >
            LMSについてのお問い合わせ

        </ButtonWithIcon>
        <ButtonWithIcon
            variant="outline"
            iconSrc="/news/blogdetail.png"
            iconAlt=""
        >
            採用についてのお問い合わせ
        </ButtonWithIcon>
    </div>
);
