import { useState, useEffect, useCallback } from "react"
import { getPopularMovies, searchMovies, discoverMovies } from "../../../services/movieService"

export default function useMovies(initialQuery = "") {
    const [searchQuery, setSearchQuery] = useState(initialQuery)
    const [submittedQuery, setSubmittedQuery] = useState("")
    const [movies, setMovies] = useState([])
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

    const fetchMovies = useCallback(async (query, page = 1) => {
        setIsLoading(true)
        try {
            let data
            if (query.trim()) {
                data = await searchMovies(query, page)
            } else if (filters.genre || filters.year || filters.rating) {
                data = await discoverMovies(filters, page)
            } else {
                data = await getPopularMovies(page)
            }

            setMovies(data.results || [])
            setTotalPages(Math.min(data.total_pages, 500) || 1)
            setError(null)
        } catch (err) {
            console.log("Error fetching movies...", err)
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }, [filters])

    useEffect(() => {
        fetchMovies("", 1)
    }, [fetchMovies])

    useEffect(() => {
        if (showFilters) {
            setCurrentPage(1)
            fetchMovies("", 1)
        }
    }, [filters, fetchMovies, showFilters])

    const handleSearch = (e) => {
        e.preventDefault()
        setCurrentPage(1)
        setSubmittedQuery(searchQuery)
        fetchMovies(searchQuery, 1)
    }

    const handlePageChange = (newPage) => {
        const cappedPage = Math.max(1, Math.min(newPage, Math.min(totalPages, 500)))
        setCurrentPage(cappedPage)
        fetchMovies(submittedQuery, cappedPage)
    }

    return {
        searchQuery,
        setSearchQuery,
        submittedQuery,
        movies,
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