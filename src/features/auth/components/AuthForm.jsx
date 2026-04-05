import { Link } from "react-router-dom"
import { ErrorState, Button, Input } from "@/components/ui"
import { Seo } from "@/components/seo"

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
        <>
            <Seo
                title={title}
                description={description}
            />

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

                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={onEmailChange}
                    />

                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={onPasswordChange}
                    />

                    {confirmPassword !== undefined && onConfirmPasswordChange && (
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={onConfirmPasswordChange}
                        />
                    )}

                    <Button
                        variant="primary"
                        size="md"
                        className="block mx-auto"
                    >
                        {buttonText}
                    </Button>

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
        </>
    )
}

export default AuthForm