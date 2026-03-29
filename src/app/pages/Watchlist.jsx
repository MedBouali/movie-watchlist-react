import { Navigate } from "react-router-dom"
import { useAuth } from "@/app/providers"

function Watchlist() {
    const { user, isLoading } = useAuth()

    if (isLoading) return null

    if (!user) return <Navigate to="/login" />
    
    return (
        <div>Watchlist</div>

    )
}

export default Watchlist