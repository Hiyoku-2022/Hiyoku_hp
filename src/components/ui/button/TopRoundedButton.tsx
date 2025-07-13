import React from "react";
import clsx from "clsx";
import { variantClasses, Variant } from "./variants";

export type TopRoundedButtonProps = {
    variant: Variant;
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function TopRoundedButton({
    variant,
    children,
    className = "",
    ...props
}: TopRoundedButtonProps) {
    const base = "inline-flex items-center justify-center px-4 py-2 text-sm font-bold";
    const shapeClass = "rounded-t-lg rounded-b-none";

    return (
        <button
            {...props}
            className={clsx(base, variantClasses[variant], shapeClass, className)}
        >
            {children}
        </button>
    );
}