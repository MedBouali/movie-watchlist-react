import { genres } from "@/utils/genres"

export function formatMedia(media) {
    const title = media.title || media.name || "Untitled"
    const year = (media.release_date || media.first_air_date)?.split("-")[0] || "N/A"
    const type = media.media_type || (media.title ? "movie" : "tv")
    const voteAverage = media.vote_average?.toFixed(1) || "N/A"
    const mediaGenres = media.genre_ids
        ?.map((id) => genres.find((g) => g.id === id)?.name)
        .filter(Boolean)
        .join(", ")
    const poster = media.poster_path
        ? `https://image.tmdb.org/t/p/w500/${media.poster_path}`
        : null
    const backdrop = media.backdrop_path
        ? `https://image.tmdb.org/t/p/original${media.backdrop_path}`
        : poster
    const overview = media.overview || "No description available."

    return {
        title,
        year,
        type,
        voteAverage,
        mediaGenres,
        poster,
        backdrop,
        overview
    }
}