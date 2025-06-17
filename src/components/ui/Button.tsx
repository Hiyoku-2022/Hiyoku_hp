type ButtonProps = {
    variant: "primary" | "outline";
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant, children, className = "", ...props }: ButtonProps) => {
    const base = "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200";
    const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    };
    return (
    <button
        {...props}
        className={`flex items-center justify-center ${base} ${variants[variant]} ${className}`}
    >
        {children}
    </button>
    );
};
