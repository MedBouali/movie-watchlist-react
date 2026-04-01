import { useNavigate, useLocation } from "react-router-dom"
import { useWatchlist } from "../providers/useWatchlist"
import { useAuth } from "@/app/providers"

export default function useWatchlistActions(media) {
    const { watchlist, add, remove, toggleWatchedStatus } = useWatchlist()
    const { user } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()

    const watchlistItem = watchlist.find(m => m.id === media?.id)

    const isSaved = !!watchlistItem
    const isWatched = watchlistItem?.watched

    function handleToggleWatchlist(e) {
        e?.stopPropagation()

        if (!user) {
            navigate("/login", { state: { from: location.pathname } })
            return
        }

        isSaved ? remove(media.id) : add(media)
    }

    function handleToggleWatched(e) {
        e?.stopPropagation()
        toggleWatchedStatus(media.id)
    }

    return {
        isSaved,
        isWatched,
        handleToggleWatchlist,
        handleToggleWatched
    }
}