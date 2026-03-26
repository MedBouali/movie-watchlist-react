import { getPopularMovies, getPopularTVShows } from "@/features/media/api/mediaApi"
import { fetchFromAPI, ENDPOINTS } from "@/services/api"

export const fetchHomeData = async () => {
    const [moviesRes, tvRes] = await Promise.all([
        getPopularMovies(),
        getPopularTVShows(),
    ])

    return {
        popularMovies: moviesRes.results,
        popularTV: tvRes.results,
    }
}

export const getMovieDetails = (id) =>
    fetchFromAPI(ENDPOINTS.movies.details(id), 1, {
        append_to_response: "videos"
    })

export const getRandomMovie = async () => {
    const data = await fetchFromAPI(ENDPOINTS.movies.popular)

    const movies = data.results
    const randomIndex = Math.floor(Math.random() * movies.length)

    return movies[randomIndex]
}