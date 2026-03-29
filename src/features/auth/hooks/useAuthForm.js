import { useState } from "react"

export function useAuthForm(
    initialEmail = "",
    initialPassword = "",
    initialConfirmPassword = ""
) {
    const [email, setEmail] = useState(initialEmail)
    const [password, setPassword] = useState(initialPassword)
    const [confirmPassword, setConfirmPassword] = useState(initialConfirmPassword)

    const [error, setError] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const reset = () => {
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setError(null)
        setIsSubmitting(false)
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        error,
        setError,
        isSubmitting,
        setIsSubmitting,
        reset,
    }
}