import { fetchFromAPI } from "./api";

export const getPopularMovies = async (page = 1) => {
    return fetchFromAPI("/movie/popular", page)
}

export const searchMovies = async (query, page = 1) => {
    return fetchFromAPI("/search/movie", page, `query=${encodeURIComponent(query)}`)
}