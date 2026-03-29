import { useAuthForm } from "./useAuthForm"
import { register as registerService } from "@/services/firebase/auth"
import { useNavigate } from "react-router-dom"

export function useRegister() {
    const navigate = useNavigate()
    const form = useAuthForm()

    const handleRegister = async (e) => {
        e.preventDefault()
        form.setIsSubmitting(true)
        form.setError(null)

        if (form.password !== form.confirmPassword) {
            form.setError("Passwords do not match")
            form.setIsSubmitting(false)
            return
        }

        try {
            await registerService(form.email, form.password)
            navigate("/")
        } catch (err) {
            form.setError(err.message)
        } finally {
            form.setIsSubmitting(false)
        }
    }

    return {
        ...form,
        handleRegister,
    }
}