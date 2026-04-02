import { useState, useMemo } from "react"

export default function useWatchlistSearch(watchlist) {
    const [searchQuery, setSearchQuery] = useState("")
    const [submittedQuery, setSubmittedQuery] = useState("")

    const filteredBySearch = useMemo(() => {
        if (!submittedQuery) return watchlist

        const query = submittedQuery.toLowerCase()

        return watchlist.filter((item) =>
            (item.title || item.name || "")
                .toLowerCase()
                .includes(query)
        )
    }, [watchlist, submittedQuery])

    const handleSearch = (e) => {
        e.preventDefault()
        setSubmittedQuery(searchQuery.trim())
    }

    const handleClear = () => {
        setSearchQuery("")
        setSubmittedQuery("")
    }

    return {
        searchQuery,
        setSearchQuery,
        submittedQuery,
        filteredBySearch,
        handleSearch,
        handleClear
    }
}