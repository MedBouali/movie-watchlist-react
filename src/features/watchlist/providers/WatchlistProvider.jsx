import { useEffect, useState } from "react"
import { WatchlistContext } from "./WatchlistContext"
import {
    getWatchlist,
    addToWatchlist,
    removeFromWatchlist
} from "@/services/firebase/watchlist"
import { toggleWatched } from "@/services/firebase/watchlist"
import { useAuth } from "@/app/providers"

export default function WatchlistProvider({ children }) {
    const { user } = useAuth()

    const [watchlist, setWatchlist] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!user) return

        const fetchWatchlist = async () => {
            setIsLoading(true)
            const data = await getWatchlist(user.uid)
            setWatchlist(data)
            setIsLoading(false)
        }

        fetchWatchlist()
    }, [user])

    const add = async (media) => {
        if (isInWatchlist(media.id)) return

        const mediaToSave = {
            id: media.id,
            title: media.title || media.name || "Untitled",
            poster_path: media.poster_path || null,
            media_type: media.title ? "movie" : "tv",
            overview: media.overview || "",
            vote_average: media.vote_average ?? 0,
            release_date: media.release_date || media.first_air_date || "",
            genres: media.genre_ids || [],
            watched: false,
            addedAt: new Date()
        }

        await addToWatchlist(user.uid, media)

        setWatchlist(prev => [...prev, mediaToSave])
    }

    const remove = async (mediaId) => {
        await removeFromWatchlist(user.uid, mediaId)
        setWatchlist(prev => prev.filter(m => m.id !== mediaId))
    }

    const isInWatchlist = (mediaId) => {
        return watchlist.some(m => m.id === mediaId)
    }

    const toggleWatchedStatus = async (mediaId) => {
        const item = watchlist.find(m => m.id === mediaId)

        await toggleWatched(user.uid, mediaId, item.watched)

        setWatchlist(prev =>
            prev.map(m =>
                m.id === mediaId
                    ? { ...m, watched: !m.watched }
                    : m
            )
        )
    }

    const value = {
        watchlist,
        isLoading,
        add,
        remove,
        isInWatchlist,
        toggleWatchedStatus
    }

    return (
        <WatchlistContext.Provider value={value}>
            {children}
        </WatchlistContext.Provider>
    )
}