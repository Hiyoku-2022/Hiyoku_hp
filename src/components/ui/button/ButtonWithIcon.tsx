
import React from "react";
import { BaseButton, BaseButtonProps } from "./BaseButton";

type ButtonWithIconProps = BaseButtonProps & {
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
};

export function ButtonWithIcon ({
    icon,
    iconPosition = "right",
    children,
    ...props
}: ButtonWithIconProps) {
    return (
        <BaseButton {...props}>
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