import { useMemo } from "react"

export default function useFilteredWatchlist(filteredBySearch, filters) {
    const filteredWatchlist = useMemo(() => {
        return filteredBySearch.filter((item) => {
            const matchesType = item.media_type === filters.type

            const matchesStatus =
                filters.status === "watched"
                    ? item.watched
                    : !item.watched

            return matchesType && matchesStatus
        })
    }, [filteredBySearch, filters])

    const heading = `${filters.status === "watched" ? "Watched" : "Unwatched"} ${filters.type === "movie" ? "Movies" : "TV Shows"}`

    return { filteredWatchlist, heading }
}