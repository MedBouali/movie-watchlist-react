import { useMemo } from "react"

export default function useFilteredWatchlist(watchlist, filters) {
    const filteredWatchlist = useMemo(() => {
        return watchlist.filter((item) => {
            const matchesType = item.media_type === filters.type

            const matchesStatus =
                filters.status === "watched"
                    ? item.watched
                    : !item.watched

            return matchesType && matchesStatus
        })
    }, [watchlist, filters])

    const heading = `${filters.status === "watched" ? "Watched" : "Unwatched"} ${filters.type === "movie" ? "Movies" : "TV Shows"}`

    return { filteredWatchlist, heading }
}