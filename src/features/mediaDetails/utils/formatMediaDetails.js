export function formatMediaDetails(media) {
    if (!media) return {}

    const title = media.title || media.name || "Untitled"
    const date = media.release_date || media.first_air_date
    const year = date?.split("-")[0] || "N/A"

    const trailer =
        media?.videos?.results?.find(
            (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        ) || null

    const cast = media?.credits?.cast || []
    const similar = media?.similar?.results || []

    return { title, year, trailer, cast, similar }
}