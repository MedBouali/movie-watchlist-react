export default function Button({
    children,
    onClick,
    variant = "primary",
    size = "md",
    disabled = false,
    className = "",
    ...props
}) {
    const base = "rounded-lg font-medium transition focus:outline-none";

    const variants = {
        primary: "bg-primary text-[#222028] hover:bg-primary/90",
        secondary: "bg-[#222028] text-white hover:text-primary",
    }

    const sizes = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}