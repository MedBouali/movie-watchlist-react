import {
    getPopularMovies,
    getPopularTVShows,
    getTrendingMovies,
    getTrendingTVShows
} from "@/features/media/api/mediaApi"
import { fetchFromAPI, ENDPOINTS } from "@/services/api"

export const fetchHomeData = async () => {
    const [moviesRes, tvRes, trendingMoviesRes, trendingTVRes] = await Promise.all([
        getPopularMovies(),
        getPopularTVShows(),
        getTrendingMovies(),
        getTrendingTVShows(),
    ])

    return {
        popularMovies: moviesRes.results,
        popularTV: tvRes.results,
        trendingMovies: trendingMoviesRes.results,
        trendingTV: trendingTVRes.results,
    }
}

export const getMovieDetails = (id) =>
    fetchFromAPI(ENDPOINTS.movies.details(id), 1, {
        append_to_response: "videos"
    })

export const getRandomMovie = async () => {
    try {
        const randomPage = Math.floor(Math.random() * 20) + 1

        const data = await fetchFromAPI(ENDPOINTS.movies.popular, randomPage)
        const movies = data.results

        const randomIndex = Math.floor(Math.random() * movies.length)
        return movies[randomIndex]
    } catch (error) {
        console.error("Error fetching random movie:", error)
        throw error
    }
}

export const getRandomTVShow = async () => {
    try {
        const randomPage = Math.floor(Math.random() * 20) + 1

        const data = await fetchFromAPI(ENDPOINTS.tv.popular, randomPage)
        const shows = data.results

        const randomIndex = Math.floor(Math.random() * shows.length)
        return shows[randomIndex]
    } catch (error) {
        console.error("Error fetching random TV show:", error)
        throw error
    }
}