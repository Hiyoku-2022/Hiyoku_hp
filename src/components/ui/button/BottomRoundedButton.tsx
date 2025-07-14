import React from "react";
import clsx from "clsx";
import { variantClasses, Variant } from "./variants";

export type BottomRoundedButtonProps = {
    variant: Variant;
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function BottomRoundedButton({
    variant,
    children,
    className = "",
    ...props
}: BottomRoundedButtonProps) {
    const base = "inline-flex items-center justify-center px-4 py-2 text-sm font-bold";
    const shapeClass = "rounded-b-lg rounded-t-none";

    return (
        <button
            {...props}
            className={clsx(base, variantClasses[variant], shapeClass, className)}
        >
            {children}
        </button>
    );
}