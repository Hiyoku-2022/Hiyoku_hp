import React from "react";
import Image from "next/image";
import { BaseButton, BaseButtonProps } from "./base-button";

type HoverShapeButtonWithIconProps = BaseButtonProps & {
    icon?: React.ReactNode; // LucideなどReactコンポーネントで渡す
    iconPosition?: "left" | "right";
};

export function HoverShapeButtonWithIcon ({
    icon,
    iconPosition = "right",
    children,
    ...props
}: HoverShapeButtonWithIconProps) {
    return (
        <BaseButton {...props} shapeTransition>
            <span className="inline-flex items-center gap-2">
                {icon && iconPosition === "left" && (
                    <span className="text-inherit">{icon}</span>
                )}
                {children}
                {icon && iconPosition === "right" && (
                    <span className="text-inherit">{icon}</span>
                )}
            </span>
        </BaseButton>
    );
};
