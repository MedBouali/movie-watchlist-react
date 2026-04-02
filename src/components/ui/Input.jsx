export default function Input({
    type = "text",
    value,
    onChange,
    placeholder,
    size = "md",
    variant = "primary",
    className = "",
    ...props
}) {
    const base =
        "w-full mb-4 rounded-lg outline-none transition placeholder-gray-400";

    const variants = {
        primary: "bg-[#222028] border-2 border-[#222028] focus:border-primary text-[15px]",
        secondary: "bg-gray-800 border border-gray-700 focus:border-primary text-sm",
    };

    const sizes = {
        sm: "py-2 px-3 text-sm",
        md: "py-3 px-4 text-[15px]",
        lg: "py-4 px-5 text-base",
    };

    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        />
    );
}