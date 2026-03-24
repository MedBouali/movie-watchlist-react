import { genres } from "@/utils/genres"

export function getMediaFilterOptions() {
    const genreOptions = [
        { value: "", label: "All Genres" },
        ...genres.map((genre) => ({
            value: String(genre.id),
            label: genre.name
        }))
    ]

    const yearOptions = [
        { value: "", label: "All Years" },
        ...Array.from({ length: 30 }, (_, i) => {
            const year = new Date().getFullYear() - i
            return { value: String(year), label: String(year) }
        })
    ]

    const ratingOptions = [
        { value: "", label: "All Ratings" },
        { value: "9", label: "9+" },
        { value: "8", label: "8+" },
        { value: "7", label: "7+" },
        { value: "6", label: "6+" },
        { value: "5", label: "5+" }
    ]

    return { genreOptions, yearOptions, ratingOptions }
}