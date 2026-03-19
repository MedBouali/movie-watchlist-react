import { useState, useEffect, useCallback } from "react"
import { 
    getPopularMovies,
    searchMovies,
    discoverMovies,
    getPopularTVShows,
    searchTVShows,
    discoverTVShows
} from "../services/mediaService"

export default function useMedia(type = "movie", initialQuery = "") {
    const [searchQuery, setSearchQuery] = useState(initialQuery)
    const [submittedQuery, setSubmittedQuery] = useState("")
    const [media, setMedia] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const [filters, setFilters] = useState({
        genre: "",
        year: "",
        rating: ""
    })

    const showFilters = submittedQuery.trim() === ""

    const fetchMedia = useCallback(async (query, page = 1) => {
        setIsLoading(true)

        try {
            let data

            if (query.trim()) {
                data = type === "movie" 
                        ? await searchMovies(query, page)
                        : await searchTVShows(query, page)
            } else if (filters.genre || filters.year || filters.rating) {
                data = type === "movie"
                    ? await discoverMovies(filters, page)
                    : await discoverTVShows(filters, page)
            } else {
                data = type === "movie"
                    ? await getPopularMovies(page)
                    : await getPopularTVShows(page)
            }

            setMedia(data.results || [])
            setTotalPages(Math.min(data.total_pages, 500) || 1)
            setError(null)
        } catch (err) {
            console.log("Error fetching media...", err)
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }, [filters, type])

    useEffect(() => {
        fetchMedia("", 1)
    }, [fetchMedia])

    useEffect(() => {
        if (showFilters) {
            setCurrentPage(1)
            fetchMedia("", 1)
        }
    }, [filters, fetchMedia, showFilters])

    const handleSearch = (e) => {
        e.preventDefault()
        const trimmedQuery = searchQuery.trim()

        setCurrentPage(1)
        setSubmittedQuery(trimmedQuery)
        fetchMedia(trimmedQuery, 1)
    }

    const handlePageChange = (newPage) => {
        const cappedPage = Math.max(1, Math.min(newPage, Math.min(totalPages, 500)))
        setCurrentPage(cappedPage)
        fetchMedia(submittedQuery, cappedPage)
    }

    return {
        searchQuery,
        setSearchQuery,
        submittedQuery,
        media,
        error,
        isLoading,
        currentPage,
        totalPages,
        handleSearch,
        handlePageChange,
        filters,
        setFilters,
        showFilters
    }
}