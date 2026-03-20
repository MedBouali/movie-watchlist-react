import { useParams, useNavigate } from "react-router-dom"
import useMediaDetails from "../../hooks/useMediaDetails"
import { MediaHeader, SimilarMedia, CastList } from "./components"
import { EmptyState, LoadingState, ErrorState } from "../../components"

function MediaDetails() {
    const { type, id } = useParams()
    const navigate = useNavigate()
    const { media, isLoading, error } = useMediaDetails(type, id)

    if (isLoading) return (
        <LoadingState message="Loading media details..." />
    )

    if (error)
        return <ErrorState title="Failed to Load" description={error} />

    if (!media) {
        return (
            <EmptyState
                title="Media Not Found"
                description="Sorry, we couldn't find the media you're looking for."
            />
        )
    }

    const trailer =
        media?.videos?.results?.find(
            (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        ) || null

    const cast = media?.credits?.cast || []
    const similar = media?.similar?.results || []

    const title = media?.title || media?.name
    const date = media?.release_date || media?.first_air_date
    const year = date?.split("-")[0]

    return (
        <div className="text-white min-h-screen">
            <div className="max-w-6xl mx-auto px-6 pt-16">
                <MediaHeader
                    media={media}
                    title={title}
                    year={year}
                    navigate={navigate}
                    trailer={trailer}
                />

                <CastList cast={cast} />

                <SimilarMedia similar={similar} type={type} />
            </div>
        </div>
    )
}

export default MediaDetails