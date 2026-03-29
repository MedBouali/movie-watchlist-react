import { Navigate } from "react-router-dom"
import { useAuth } from "@/app/providers"
import { LoadingState } from "@/components/ui"

export default function ProtectedRoute({ children }) {
    const { user, isLoading } = useAuth()

    if (isLoading) return <LoadingState message="Loading..." inline={true} />

    if (!user) return <Navigate to="/login" state={{ from: location.pathname }} replace />
    

    return children
}