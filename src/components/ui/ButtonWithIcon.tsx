import { Button } from "./Button";
import Image from "next/image";

type ButtonWithIconProps = {
    variant: "primary" | "outline";
    children: React.ReactNode;
    iconSrc: string;
    iconAlt?: string;
    iconClassName?: string;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonWithIcon = ({
    variant,
    children,
    iconSrc,
    iconAlt = "",
    iconClassName = "ml-2 w-4 h-4",
    className = "",
    ...props
} : ButtonWithIconProps) => {
    return (
        <Button variant={variant} className={className} {...props}>
            <>
                {children}
                <span>
                    <Image
                        aria-hidden
                        src={iconSrc}
                        alt={iconAlt}
                        width={16}
                        height={16}
                        className={iconClassName}
                    />
                </span>
            </>
        </Button>
    );
};