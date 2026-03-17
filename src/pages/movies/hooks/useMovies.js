import { useState, useEffect } from "react"
import { getPopularMovies, searchMovies } from "../../../services/movieService"

export default function useMovies(initialQuery = "") {
    const [searchQuery, setSearchQuery] = useState(initialQuery)
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const fetchMovies = async (query = searchQuery, page = 1) => {
        setIsLoading(true)
        try {
            const data = !query.trim()
                ? await getPopularMovies(page)
                : await searchMovies(query, page)

            setMovies(data.results || [])
            setTotalPages(Math.min(data.total_pages, 500) || 1)
            setError(null)
        } catch (err) {
            console.log("Error fetching movies...", err)
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        setCurrentPage(1)
        fetchMovies(searchQuery, 1)
    }

    const handlePageChange = (newPage) => {
        const cappedPage = Math.max(1, Math.min(newPage, Math.min(totalPages, 500)))
        setCurrentPage(cappedPage)
        fetchMovies(searchQuery, cappedPage)
    }

    return {
        searchQuery,
        setSearchQuery,
        movies,
        error,
        isLoading,
        currentPage,
        totalPages,
        fetchMovies,
        handleSearch,
        handlePageChange
    }
}