import { useParams, useNavigate } from "react-router-dom"
import { EmptyState, LoadingState, ErrorState } from "@/components/ui"
import {
    MediaHeader,
    SimilarMedia,
    CastList,
    useMediaDetails
} from "@/features/mediaDetails"
import { formatMediaDetails } from "@/features/mediaDetails/utils/formatMediaDetails"

function MediaDetails() {
    const { type, id } = useParams()
    const navigate = useNavigate()
    const { media, isLoading, error } = useMediaDetails(type, id)

    if (isLoading) return <LoadingState message="Loading media details..." />

    if (error) return <ErrorState title="Failed to Load" description={error} />

    if (!media) {
        return (
            <EmptyState
                title="Media Not Found"
                description="Sorry, we couldn't find the media you're looking for."
            />
        )
    }

    const { title, year, trailer, cast, similar } = formatMediaDetails(media)

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