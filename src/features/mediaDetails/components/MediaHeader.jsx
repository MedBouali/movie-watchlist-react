import { MediaMeta, MediaTrailer } from "@/features/mediaDetails"
import { useWatchlistActions, WatchlistActions } from "@/features/watchlist"
import { MediaCard } from "@/components/cards"
import { Button } from "@/components/ui"

function MediaHeader({ media, title, year, navigate, trailer, showBackButton = true }) {
    const {
        isSaved,
        isWatched,
        handleToggleWatchlist,
        handleToggleWatched
    } = useWatchlistActions(media)

    return (
        <div className="grid md:grid-cols-[260px_1fr] gap-10">
            <MediaCard
                media={media}
                showWatchlistActions={false}
                showOverview={false}
                showGenres={false}
                isClickable={false}
            />

            <div className="flex flex-col justify-between">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        {title}
                    </h1>

                    <MediaMeta media={media} year={year} />

                    {media.genres?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {media.genres.map((g) => (
                                <span
                                    key={g.id}
                                    className="bg-[#222028] px-3 py-1 rounded-lg text-xs text-primary"
                                >
                                    {g.name}
                                </span>
                            ))}
                        </div>
                    )}

                    <p className="text-gray-300 leading-relaxed max-w-2xl mb-4">
                        {media.overview || "No description available."}
                    </p>

                    <MediaTrailer trailer={trailer} />
                </div>

                <div className="flex gap-3 mt-4">
                    {showBackButton && (
                        <Button
                            onClick={() => navigate(-1)}
                            variant="secondary"
                            size="md"
                        >
                            Back
                        </Button>
                    )}

                    <WatchlistActions
                        isSaved={isSaved}
                        isWatched={isWatched}
                        onToggleWatchlist={handleToggleWatchlist}
                        onToggleWatched={handleToggleWatched}
                        variant="header"
                    />
                </div>
            </div>
        </div>
    )
}

export default MediaHeader