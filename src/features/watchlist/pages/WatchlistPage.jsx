import { useState } from "react"
import { Container } from "@/components/layout"
import { MediaCard } from "@/components/cards"
import {
    useWatchlist,
    WatchlistFilters,
    useFilteredWatchlist,
    usePaginatedWatchlist,
    useWatchlistSearch
} from "@/features/watchlist"
import {
    LoadingState,
    EmptyState,
    Pagination,
    Heading
} from "@/components/ui"
import { SearchInput } from "@/components/forms"

function WatchlistPage() {
    const { watchlist, isLoading } = useWatchlist()

    const {
        searchQuery,
        setSearchQuery,
        submittedQuery,
        filteredBySearch,
        handleSearch,
        handleClear
    } = useWatchlistSearch(watchlist)

    const [filters, setFilters] = useState({
        type: "movie",
        status: "unwatched"
    })

    const { filteredWatchlist, heading } = useFilteredWatchlist(filteredBySearch, filters)

    const {
        paginatedWatchlist,
        currentPage,
        setCurrentPage,
        totalPages,
        handlePageChange
    } = usePaginatedWatchlist(filteredWatchlist, 20)

    return (
        <Container>
            <SearchInput
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={(e) => {
                    handleSearch(e)
                    setCurrentPage(1)
                }}
                handleClear={() => {
                    handleClear()
                    setCurrentPage(1)
                }}
                submittedQuery={submittedQuery}
            />

            <section className="pt-12">
                <div className="mx-auto w-full my-4">
                    <Heading text={`${heading} (${filteredWatchlist.length})`} />

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
                        submittedQuery ? (
                            <EmptyState
                                title={`No results for "${submittedQuery}"`}
                                description="Try searching with a different title."
                            />
                        ) : (
                            <EmptyState
                                title={`No ${filters.status === "watched" ? "watched" : "unwatched"} ${filters.type === "movie" ? "movies" : "TV shows"}`}
                                description={`You don't have any ${filters.status === "watched" ? "watched" : "unwatched"} ${filters.type === "movie" ? "movies" : "TV shows"} in your watchlist.`}
                            />
                        )
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
                </div>
            </section>
        </Container>
    )
}

export default WatchlistPage