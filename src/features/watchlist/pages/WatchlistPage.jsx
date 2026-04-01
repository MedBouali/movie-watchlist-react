import { useState } from "react"
import { Container } from "@/components/layout"
import { MediaCard } from "@/components/cards"
import {
    useWatchlist,
    WatchlistFilters,
    useFilteredWatchlist,
    usePaginatedWatchlist
} from "@/features/watchlist"
import {
    LoadingState,
    EmptyState,
    Pagination
} from "@/components/ui"

function WatchlistPage() {
    const { watchlist, isLoading } = useWatchlist()

    const [filters, setFilters] = useState({
        type: "movie",
        status: "unwatched"
    })

    const { filteredWatchlist, heading } = useFilteredWatchlist(watchlist, filters)

    const {
        paginatedWatchlist,
        currentPage,
        setCurrentPage,
        totalPages,
        handlePageChange
    } = usePaginatedWatchlist(filteredWatchlist, 20, filters)

    return (
        <Container>
            <section className="pt-12">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold mb-2">{heading} ({filteredWatchlist.length})</h1>
                </div>

                <WatchlistFilters
                    filters={filters}
                    setFilters={(newFilters) => {
                        setFilters(newFilters)
                        setCurrentPage(1)
                    }}
                />

                {isLoading ? (
                    <LoadingState message="Loading your watchlist..." />
                ) : filteredWatchlist.length === 0 ? (
                    <EmptyState
                        title={`No ${filters.status === "watched" ? "watched" : "unwatched"} ${filters.type === "movie" ? "movies" : "TV shows"}`}
                        description={`You don't have any ${filters.status === "watched" ? "watched" : "unwatched"} ${filters.type === "movie" ? "movies" : "TV shows"} in your watchlist.`}
                    />
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 py-4">
                            {paginatedWatchlist.map((item) => (
                                <MediaCard key={item.id} media={item} />
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </>
                )}
            </section>
        </Container>
    )
}

export default WatchlistPage