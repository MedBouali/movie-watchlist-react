import { genres } from "../utils/genres"
import Dropdown from "./Dropdown"

export default function MovieFilters({ filters, setFilters, showFilters }) {
    if (!showFilters) return null

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

    return (
        <div className="flex justify-end flex-wrap gap-2">
            <Dropdown
                label="All Genres"
                options={genreOptions}
                selected={genreOptions.find(
                    (g) => g.value === filters.genre
                )}
                onSelect={(option) =>
                    setFilters((prev) => ({
                        ...prev,
                        genre: option.value
                    }))
                }
            />

            <Dropdown
                label="All Years"
                options={yearOptions}
                selected={yearOptions.find(
                    (y) => y.value === filters.year
                )}
                onSelect={(option) =>
                    setFilters((prev) => ({
                        ...prev,
                        year: option.value
                    }))
                }
            />

            <Dropdown
                label="All Ratings"
                options={ratingOptions}
                selected={ratingOptions.find(
                    (r) => r.value === filters.rating
                )}
                onSelect={(option) =>
                    setFilters((prev) => ({
                        ...prev,
                        rating: option.value
                    }))
                }
            />
        </div>
    )
}