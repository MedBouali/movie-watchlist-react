import { Navigate } from "react-router-dom"
import { useAuth } from "@/app/providers"
import { LoadingState } from "@/components/ui"
import { Container } from "@/components/layout"

export default function ProtectedRoute({ children }) {
    const { user, isLoading } = useAuth()

    if (isLoading)
        return (
            <Container>
                <LoadingState message="Loading..." />
            </Container>
        )

    if (!user) return <Navigate to="/login" state={{ from: location.pathname }} replace />


    return children
}