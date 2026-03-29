import { useAuthForm } from "./useAuthForm"
import { login as loginService } from "@/services/firebase/auth"
import { useNavigate, useLocation } from "react-router-dom"

export function useLogin() {
    const navigate = useNavigate()
    const location = useLocation()

    const form = useAuthForm()

    const handleLogin = async (e) => {
        e.preventDefault()
        form.setIsSubmitting(true)
        form.setError(null)

        try {
            await loginService(form.email, form.password)
            const from = location.state?.from || "/"
            navigate(from, { replace: true })
        } catch (err) {
            form.setError(err.message)
        } finally {
            form.setIsSubmitting(false)
        }
    }

    return {
        ...form,
        handleLogin,
    }
}