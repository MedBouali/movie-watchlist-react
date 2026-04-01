import { useState, useMemo } from "react"

export default function usePaginatedWatchlist(watchlist, itemsPerPage = 20) {
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(watchlist.length / itemsPerPage)

    const paginatedWatchlist = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage
        return watchlist.slice(start, start + itemsPerPage)
    }, [watchlist, currentPage, itemsPerPage])

    const handlePageChange = (page) => setCurrentPage(page)

    return {
        paginatedWatchlist,
        currentPage,
        setCurrentPage,
        totalPages,
        handlePageChange
    }
}