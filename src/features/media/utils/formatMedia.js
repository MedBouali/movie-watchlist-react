import { genres } from "@/utils/genres"

export function formatMedia(media) {
    const title = media.title || media.name || "Untitled"
    const year = (media.release_date || media.first_air_date)?.split("-")[0] || "N/A"
    const type = media.title ? "movie" : "tv"
    const mediaGenres = media.genre_ids
        ?.map((id) => genres.find((g) => g.id === id)?.name)
        .filter(Boolean)
        .join(", ")

    return {
        title,
        year,
        type,
        mediaGenres,
    }
}