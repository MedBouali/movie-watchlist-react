import { MediaCard, SearchInput, Pagination, EmptyState, MediaFilters } from "../../components"
import useMedia from "../../hooks/useMedia"

export default function MediaListPage({ type = "movie", title }) {
    const {
        searchQuery,
        setSearchQuery,
        submittedQuery,
        media,
        error,
        isLoading,
        currentPage,
        totalPages,
        handleSearch,
        handlePageChange,
        filters,
        setFilters,
        showFilters
    } = useMedia(type)

    const hasActiveFilters = filters.genre || filters.year || filters.rating

    const emptyTitle =
        type === "movie" ? "No movies found" : "No TV shows found"
    const emptyDescription = searchQuery
        ? `No results for "${searchQuery}"`
        : type === "movie"
            ? "No movies available right now."
            : "No TV shows available right now."

    const defaultHeading = title || (type === "movie" ? "Popular Movies" : "Popular TV Shows")

    return (
        <>
            <SearchInput
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
            />

            <section className="pt-12" id={type === "movie" ? "movies" : "tv-shows"}>
                <div className="container mx-auto px-6 w-full my-4">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-semibold mb-2">
                            {submittedQuery ? (
                                <>
                                    Search results for{" "}
                                    <span className="text-primary">"{submittedQuery}"</span>
                                </>
                            ) : hasActiveFilters ? (
                                "Filter results"
                            ) : (
                                defaultHeading
                            )}
                        </h1>
                    </div>

                    <MediaFilters
                        filters={filters}
                        setFilters={setFilters}
                        showFilters={showFilters}
                    />

                    {error && (
                        <div className="flex justify-center text-red-700 font-medium">{error}</div>
                    )}

                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            Loading...
                        </div>
                    ) : media.length === 0 ? (
                        <EmptyState title={emptyTitle} description={emptyDescription} />
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 py-4">
                                {media.map((item) => (
                                    <MediaCard key={item.id} media={item} />
                                ))}
                            </div>

                            {!isLoading && media.length > 0 && (
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
        </>
    )
}