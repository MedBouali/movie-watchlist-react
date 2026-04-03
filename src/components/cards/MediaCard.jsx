import { useMemo } from "react"
import { Link } from "react-router-dom"
import { ImageWithFallback, CardOverlay, RatingBadge, CardFooter } from "@/components/ui"
import { formatMedia } from "@/features/media/utils/formatMedia"
import { useWatchlistActions, WatchlistActions } from "@/features/watchlist"

function MediaCard({
    media,
    variant = "default",
    showRatingBadge = true,
    showWatchlistActions = true,
    showOverview = true,
    showGenres = true,
    isClickable = true
}) {
    const formatted = useMemo(() => formatMedia(media), [media])

    const {
        title,
        year,
        type,
        voteAverage,
        mediaGenres,
        poster,
        backdrop,
        overview
    } = formatted

    const to = media?.id ? `/${type}/${media.id}` : "#"

    const {
        isSaved,
        isWatched,
        handleToggleWatchlist,
        handleToggleWatched
    } = useWatchlistActions(media)

    const isHero = variant === "hero"
    const isCarousel = variant === "carousel"

    const containerClass = isHero
        ? "relative rounded-xl overflow-hidden shadow-lg group w-72 md:w-96 aspect-[3/2] text-left"
        : isCarousel
            ? "relative rounded-xl overflow-hidden shadow-lg group w-40 md:w-44 aspect-[2/3] transition-transform"
            : "relative rounded-xl overflow-hidden shadow-lg group aspect-[2/3] transition-transform"

    const image = isHero ? backdrop : poster

    return (
        <article className={containerClass}>
            {isClickable && (
                <Link
                    to={to}
                    aria-label={`View details for ${title}`}
                    className="absolute inset-0 z-10"
                />
            )}

            <ImageWithFallback
                src={image}
                alt={title}
                className="w-full h-full object-cover"
            />

            <CardOverlay>
                {showRatingBadge && <RatingBadge rating={voteAverage} />}
            </CardOverlay>

            {showWatchlistActions && (
                <WatchlistActions
                    isSaved={isSaved}
                    isWatched={isWatched}
                    onToggleWatchlist={handleToggleWatchlist}
                    onToggleWatched={handleToggleWatched}
                    variant="card"
                />
            )}

            <CardFooter
                title={title}
                year={year}
                overview={overview}
                genres={mediaGenres}
                showOverview={showOverview}
                showGenres={showGenres}
            />
        </article>
    )
}

export default MediaCard