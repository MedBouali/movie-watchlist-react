import AuthForm from "@/features/auth/components/AuthForm"
import { useRegister } from "@/features/auth/hooks/useRegister"

export default function Register() {
    const {
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        error,
        isSubmitting,
        handleRegister,
    } = useRegister()

    return (
        <AuthForm
            title="Sign Up"
            description="Create your account"
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            error={error}
            onEmailChange={(e) => setEmail(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
            onSubmit={handleRegister}
            buttonText={isSubmitting ? "Creating account..." : "Sign Up"}
            linkText="Sign in"
            linkHref="/login"
            promptText="Already have an account?"
        />
    )
}