import { useParams, useNavigate } from "react-router-dom"
import { EmptyState, LoadingState, ErrorState } from "@/components/ui"
import {
    MediaHeader,
    SimilarMedia,
    CastList,
    useMediaDetails,
    WatchProviders
} from "@/features/mediaDetails"
import { formatMediaDetails } from "@/features/mediaDetails/utils/formatMediaDetails"
import { Container } from "@/components/layout"
import { Seo } from "@/components/seo"

function MediaDetailsView() {
    const { type, id } = useParams()
    const navigate = useNavigate()
    const { media, providers, isLoading, error } = useMediaDetails(type, id)
    const { title, year, trailer, cast, similar } = formatMediaDetails(media)

    return (
        <>
            <Seo
                title={media ? `${title} (${year})` : "Media Details"}
                description={
                    media
                        ? `Watch ${title}, a ${type === "movie" ? "movie" : "TV show"} released in ${year}. ${media.overview?.slice(0, 150)}`
                        : "Discover movies and TV shows on WatchWise."
                }
            />

            <Container>
                {error ? (
                    <ErrorState title="Failed to Load" description={error} />
                ) : isLoading ? (
                    <LoadingState message="Loading media details..." />
                ) : !media ? (
                    <EmptyState
                        title="Media Not Found"
                        description="Sorry, we couldn't find the media you're looking for."
                    />
                ) : (
                    <div className="text-white min-h-screen">
                        <div className="mx-auto pt-12">
                            <MediaHeader
                                media={media}
                                title={title}
                                year={year}
                                navigate={navigate}
                                trailer={trailer}
                            />

                            <WatchProviders providers={providers} country="US" />

                            <CastList cast={cast} />

                            <SimilarMedia similar={similar} type={type} />
                        </div>
                    </div>
                )}
            </Container>
        </>
    )
}

export default MediaDetailsView