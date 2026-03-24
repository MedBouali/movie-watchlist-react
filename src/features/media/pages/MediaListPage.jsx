import {
    SearchInput,
    MediaCard,
    MediaFilters,
    useMedia
} from "@/features/media"
import {
    Pagination,
    EmptyState,
    LoadingState,
    ErrorState
} from "@/components/ui"
import { formatMediaListPage } from "@/features/media/utils/formatMediaListPage"

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
        handleClear,
        handlePageChange,
        filters,
        setFilters,
        showFilters
    } = useMedia(type)

    const { emptyTitle, emptyDescription, heading } = formatMediaListPage({
        type,
        title,
        filters,
        searchQuery,
        submittedQuery
    })

    return (
        <>
            <SearchInput
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
                handleClear={handleClear}
                submittedQuery={submittedQuery}
            />

            <section className="pt-12" id={type === "movie" ? "movies" : "tv-shows"}>
                <div className="container mx-auto px-6 w-full my-4">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-semibold mb-2">
                            {heading.includes('"') ? (
                                <>
                                    {heading.split('"')[0]}
                                    <span className="text-primary">"{heading.split('"')[1]}"</span>
                                    {heading.split('"')[2] || ""}
                                </>
                            ) : (
                                heading
                            )}
                        </h1>
                    </div>

                    <MediaFilters
                        filters={filters}
                        setFilters={setFilters}
                        showFilters={showFilters}
                    />

                    {error ? (
                        <ErrorState title="Failed to Load" description={error} />
                    ) : isLoading ? (
                        <LoadingState message="Loading media..." />
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