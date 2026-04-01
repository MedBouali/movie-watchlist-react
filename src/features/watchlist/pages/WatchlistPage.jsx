import { useState } from "react"
import { Container } from "@/components/layout"
import { MediaCard } from "@/components/cards"
import { useWatchlist, WatchlistFilters, useFilteredWatchlist } from "@/features/watchlist"
import { LoadingState, EmptyState } from "@/components/ui"

function WatchlistPage() {
    const { watchlist, isLoading } = useWatchlist()

    const [filters, setFilters] = useState({
        type: "movie",
        status: "unwatched"
    })

    const { filteredWatchlist, heading } = useFilteredWatchlist(watchlist, filters)

    if (isLoading) return (
        <Container>
            <LoadingState message="Loading your watchlist..." />
        </Container>
    )

    if (watchlist.length === 0) {
        return (
            <Container>
                <EmptyState
                    title="Your watchlist is empty"
                    description="Add movies or shows to your watchlist to see them here."
                />
            </Container>
        )
    }

    return (
        <Container>
            <section className="pt-12">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold mb-2">{heading} ({filteredWatchlist.length})</h1>
                </div>

                <WatchlistFilters
                    filters={filters}
                    setFilters={setFilters}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 py-4">
                    {filteredWatchlist.map((item) => (
                        <MediaCard key={item.id} media={item} />
                    ))}
                </div>
            </section>
        </Container>
    )
}

export default WatchlistPage