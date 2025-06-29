// components/ui/button/BaseButton.tsx
import React from "react";
import clsx from "clsx";
import { variantClasses, Variant } from "./variants";

export type BaseButtonProps = {
    variant: Variant;
    children: React.ReactNode;
    shapeTransition?: boolean;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function BaseButton ({
    variant,
    children,
    shapeTransition = false,
    className = "",
    ...props
}: BaseButtonProps) {
    const base = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium";
    const shapeClass = shapeTransition ? "rounded-lg hover:rounded-full" : "rounded-lg";

    return (
        <button
            {...props}
            className={clsx(base, variantClasses[variant], shapeClass, className)}
        >
            {children}
        </button>
    );
};
