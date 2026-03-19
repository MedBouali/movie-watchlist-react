import { fetchFromAPI } from "./api";

export const getPopularMovies = async (page = 1) => {
    return fetchFromAPI("/movie/popular", page)
}

export const searchMovies = async (query, page = 1) => {
    return fetchFromAPI("/search/movie", page, `query=${encodeURIComponent(query)}`)
}

export const discoverMovies = async (filters, page = 1) => {
    let query = ""

    if (filters.genre) query += `&with_genres=${filters.genre}`
    if (filters.year) query += `&primary_release_year=${filters.year}`
    if (filters.rating) query += `&vote_average.gte=${filters.rating}`

    return fetchFromAPI("/discover/movie", page, query)
}