export function formatMediaListPage({ type, title, filters, searchQuery, submittedQuery }) {
    const hasActiveFilters = filters.genre || filters.year || filters.rating

    const emptyTitle = type === "movie" ? "No movies found" : "No TV shows found"

    const emptyDescription = searchQuery
        ? `No results for "${searchQuery}"`
        : type === "movie"
            ? "No movies available right now."
            : "No TV shows available right now."

    const defaultHeading = title || (type === "movie" ? "Popular Movies" : "Popular TV Shows")

    let heading
    if (submittedQuery) heading = `Search results for "${submittedQuery}"`
    else if (hasActiveFilters) heading = "Filter results"
    else heading = defaultHeading

    return { hasActiveFilters, emptyTitle, emptyDescription, heading }
}