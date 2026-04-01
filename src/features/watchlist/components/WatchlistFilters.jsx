import { Dropdown } from "@/components/ui"
import { getWatchlistFilterOptions } from "@/features/watchlist/utils/watchlistFilterOptions"
import { getSelectedOption } from "@/utils/getSelectedOption"

export default function WatchlistFilters({ filters, setFilters }) {
    const { typeOptions, statusOptions } = getWatchlistFilterOptions()

    return (
        <div className="flex justify-end flex-nowrap gap-2">
            <Dropdown
                label="Movies"
                options={typeOptions}
                selected={getSelectedOption(typeOptions, filters.type)}
                onSelect={(option) =>
                    setFilters((prev) => ({
                        ...prev,
                        type: option.value
                    }))
                }
            />

            <Dropdown
                label="Unwatched"
                options={statusOptions}
                selected={getSelectedOption(statusOptions, filters.status)}
                onSelect={(option) =>
                    setFilters((prev) => ({
                        ...prev,
                        status: option.value
                    }))
                }
            />
        </div>
    )
}