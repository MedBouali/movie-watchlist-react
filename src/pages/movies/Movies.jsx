import { MediaCard, SearchInput, Pagination, EmptyState, MovieFilters } from "../../components"
import useMovies from "./hooks/useMovies"

function Movies() {
    const {
        searchQuery,
        setSearchQuery,
        submittedQuery,
        movies,
        error,
        isLoading,
        currentPage,
        totalPages,
        handleSearch,
        handlePageChange,
        filters,
        setFilters,
        showFilters
    } = useMovies()

    const hasActiveFilters = filters.genre || filters.year || filters.rating

    return (
        <>
            <SearchInput
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
            />
            <section id="movies" className="pt-12">
                <div className="container mx-auto px-6 w-full my-4">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-semibold mb-2">
                            {submittedQuery ? (
                                <>
                                    Search results for{" "}
                                    <span className="text-primary">"{submittedQuery}"</span>
                                </>
                            ) : hasActiveFilters ? (
                                <>
                                    Filter results
                                </>
                            ) : (
                                "Popular Movies"
                            )}
                        </h1>
                    </div>

                    <MovieFilters filters={filters} setFilters={setFilters} showFilters={showFilters} />

                    {error && (
                        <div className="flex justify-center text-red-700 font-medium">{error}</div>
                    )}

                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            Loading...
                        </div>
                    ) : movies.length === 0 ? (
                        <EmptyState
                            title="No movies found"
                            description={
                                searchQuery
                                    ? `No results for "${searchQuery}"`
                                    : "No movies available right now."
                            }
                        />
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 py-4">
                                {movies.map((media) => {
                                    return <MediaCard key={media.id} media={media} />
                                })}
                            </div>

                            {!isLoading && movies.length > 0 && (
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

export default Movies