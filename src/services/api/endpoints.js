export const ENDPOINTS = {
    movies: {
        popular: "/movie/popular",
        search: "/search/movie",
        discover: "/discover/movie",
        details: (id) => `/movie/${id}`,
        watchProviders: (id) => `/movie/${id}/watch/providers`,
    },
    tv: {
        popular: "/tv/popular",
        search: "/search/tv",
        discover: "/discover/tv",
        details: (id) => `/tv/${id}`,
        watchProviders: (id) => `/tv/${id}/watch/providers`,
    },
}