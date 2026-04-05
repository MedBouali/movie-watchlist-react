import {
    MediaFilters,
    useMedia
} from "@/features/media"
import {
    Pagination,
    EmptyState,
    LoadingState,
    ErrorState,
    Heading
} from "@/components/ui"
import { SearchInput } from "@/components/forms"
import { formatMediaListPage } from "@/features/media/utils/formatMediaListPage"
import { Container } from "@/components/layout"
import { MediaCard } from "@/components/cards"
import { Seo } from "@/components/seo"

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
            <Seo
                title={heading}
                description={`Browse ${type === "movie" ? "movies" : "TV shows"}, explore ratings, trailers, and details on WatchWise.`}
            />
            
            <Container>
                <SearchInput
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    handleSearch={handleSearch}
                    handleClear={handleClear}
                    submittedQuery={submittedQuery}
                />

                <section className="pt-12" id={type === "movie" ? "movies" : "tv-shows"}>
                    <div className="mx-auto w-full my-4">
                        <Heading text={heading} />

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
            </Container>
        </>
    )
}