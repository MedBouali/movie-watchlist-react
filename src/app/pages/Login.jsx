import AuthForm from "@/features/auth/components/AuthForm"
import { useLogin } from "@/features/auth/hooks/useLogin"

export default function Login() {
    const {
        email,
        setEmail,
        password,
        setPassword,
        error,
        isSubmitting,
        handleLogin,
    } = useLogin()

    return (
        <AuthForm
            title="Sign In"
            description="Sign in to your account"
            email={email}
            password={password}
            error={error}
            onEmailChange={(e) => setEmail(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onSubmit={handleLogin}
            buttonText={isSubmitting ? "Signing in..." : "Sign In"}
            linkText="Sign up"
            linkHref="/register"
            promptText="Don't have an account?"
        />
    )
}