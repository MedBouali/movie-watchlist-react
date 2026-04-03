import { fetchFromAPI, ENDPOINTS } from "@/services/api"

export const getPopularMovies = (page = 1) =>
    fetchFromAPI(ENDPOINTS.movies.popular, page)

export const searchMovies = (query, page = 1) =>
    fetchFromAPI(ENDPOINTS.movies.search, page, { query })

export const discoverMovies = (filters = {}, page = 1) => {
    const params = {}

    if (filters.genre) params.with_genres = filters.genre
    if (filters.year) params.primary_release_year = filters.year
    if (filters.rating) params["vote_average.gte"] = filters.rating

    return fetchFromAPI(ENDPOINTS.movies.discover, page, params)
}

export const getPopularTVShows = (page = 1) =>
    fetchFromAPI(ENDPOINTS.tv.popular, page)

export const searchTVShows = (query, page = 1) =>
    fetchFromAPI(ENDPOINTS.tv.search, page, { query })

export const discoverTVShows = (filters = {}, page = 1) => {
    const params = {}

    if (filters.genre) params.with_genres = filters.genre
    if (filters.year) params.first_air_date_year = filters.year
    if (filters.rating) params["vote_average.gte"] = filters.rating

    return fetchFromAPI(ENDPOINTS.tv.discover, page, params)
}

export const getTrendingMovies = () =>
    fetchFromAPI(ENDPOINTS.movies.trending)

export const getTrendingTVShows = () =>
    fetchFromAPI(ENDPOINTS.tv.trending)