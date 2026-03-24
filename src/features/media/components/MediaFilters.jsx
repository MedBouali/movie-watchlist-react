import { Dropdown } from "@/components/ui"
import { getMediaFilterOptions } from "@/features/media/utils/mediaFilterOptions"
import { getSelectedOption } from "@/utils/getSelectedOption"

export default function MediaFilters({ filters, setFilters, showFilters }) {
    if (!showFilters) return null

    const { genreOptions, yearOptions, ratingOptions } = getMediaFilterOptions()

    return (
        <div className="flex justify-end flex-nowrap gap-2">
            <Dropdown
                label="All Genres"
                options={genreOptions}
                selected={getSelectedOption(genreOptions, filters.genre)}
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
                selected={getSelectedOption(yearOptions, filters.year)}
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
                selected={getSelectedOption(ratingOptions, filters.rating)}
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