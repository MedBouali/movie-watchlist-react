import { Link } from "react-router-dom"
import { ErrorState } from "@/components/ui"

function AuthForm({
    title,
    description,
    email,
    password,
    confirmPassword,
    error,
    onEmailChange,
    onPasswordChange,
    onConfirmPasswordChange,
    onSubmit,
    buttonText,
    linkText,
    linkHref,
    promptText,
}) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={onSubmit}
                className="w-full max-w-md p-8"
            >
                <h1 className="text-2xl font-bold text-center mb-6">
                    Watch<span className="text-primary">Wise</span>
                </h1>
                <h1 className="text-xl mb-2 text-center font-semibold">{title}</h1>
                <p className="text-gray-400 mb-8 text-center">{description}</p>

                {error && <ErrorState description={error} py="py-3" />}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onEmailChange}
                    className="w-full mb-4 py-3 px-4 bg-[#222028] border-2 border-[#222028] text-[15px] placeholder-gray-400 rounded-lg outline-none focus:border-primary transition"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onPasswordChange}
                    className="w-full mb-4 py-3 px-4 bg-[#222028] border-2 border-[#222028] text-[15px] placeholder-gray-400 rounded-lg outline-none focus:border-primary transition"
                />

                {confirmPassword !== undefined && onConfirmPasswordChange && (
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={onConfirmPasswordChange}
                        className="w-full mb-4 py-3 px-4 bg-[#222028] border-2 border-[#222028] text-[15px] placeholder-gray-400 rounded-lg outline-none focus:border-primary transition"
                    />
                )}

                <button className="bg-primary text-sm text-[#222028] font-medium px-5 py-[0.6rem] w-fit rounded-lg hover:bg-primary/90 transition block mx-auto">
                    {buttonText}
                </button>

                {linkText && linkHref && promptText && (
                    <p className="mt-6 text-center text-gray-400 text-sm">
                        {promptText}{" "}
                        <Link to={linkHref} className="text-primary hover:underline">
                            {linkText}
                        </Link>
                    </p>
                )}
            </form>
        </div>
    )
}

export default AuthForm