export function getWatchlistFilterOptions() {
    const typeOptions = [
        { label: "Movies", value: "movie" },
        { label: "TV Shows", value: "tv" }
    ]

    const statusOptions = [
        { label: "Unwatched", value: "unwatched" },
        { label: "Watched", value: "watched" }
    ]

    return { typeOptions, statusOptions }
}