import { fetchFromAPI, ENDPOINTS } from "@/services/api"

export const getMovieDetails = (id) =>
    fetchFromAPI(ENDPOINTS.movies.details(id), 1, {
        append_to_response: "videos,credits,similar",
    })

export const getTVDetails = (id) =>
    fetchFromAPI(ENDPOINTS.tv.details(id), 1, {
        append_to_response: "videos,credits,similar",
    })

export const getWatchProviders = (id, type = "movie") => {
    const endpoint =
        type === "movie"
            ? ENDPOINTS.movies.watchProviders(id)
            : ENDPOINTS.tv.watchProviders(id)

    return fetchFromAPI(endpoint)
}