import React from "react";
import clsx from "clsx";
import { variantClasses, Variant } from "./variants";

export type MiddleButtonProps = {
    variant: Variant;
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function MiddleButton({
    variant,
    children,
    className = "",
    ...props
}: MiddleButtonProps) {
    const base = "inline-flex items-center justify-center px-4 py-2 text-sm font-bold";
    const shapeClass = "rounded-none";

    return (
        <button
            {...props}
            className={clsx(base, variantClasses[variant], shapeClass, className)}
        >
            {children}
        </button>
    );
}

