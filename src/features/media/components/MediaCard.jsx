import { Link } from "react-router-dom"
import { BookmarkIcon } from "@/components/icons"
import { ImageWithFallback } from "@/components/ui"
import { formatMedia } from "@/features/media/utils/formatMedia"

function MediaCard({
    media,
    showOverview = true,
    showRating = true,
    showAddToList = true,
    showGenres = true
}) {
    const { title, year, type, voteAverage, mediaGenres, imageUrl, overview } = formatMedia(media)
    const to = media?.id ? `/${type}/${media.id}` : "#"

    function onAddToWatchlistClick(e) {
        e.stopPropagation()
        alert("clicked")
    }

    return (
        <article className="relative rounded-xl overflow-hidden shadow-lg group aspect-[2/3] transition-transform">
            <Link
                to={to}
                aria-label={`View details for ${title}`}
                className="absolute inset-0 z-10"
            />

            <ImageWithFallback
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 z-20 pointer-events-none">
                <div className="flex justify-between">
                    {showRating && (
                        <div className="flex justify-center items-center rounded-full text-[11px] font-medium w-8 h-8 bg-black/20 border-2 border-primary">
                            {voteAverage}
                        </div>
                    )}

                    {showAddToList && (
                        <button
                            onClick={onAddToWatchlistClick}
                            title="Add to list"
                            className="pointer-events-auto relative z-30 grid place-items-center bg-[#222028] hover:bg-[#222028]/90 hover:text-primary w-9 h-8 rounded-lg text-sm transition"
                        >
                            <BookmarkIcon className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-3 bg-linear-to-t from-gray-900/70 to-transparent z-20">
                {showOverview && (
                    <p className="text-transparent text-xs line-clamp-4 group-hover:text-white">
                        {overview}
                    </p>
                )}
                <p className="text-[11px] text-white">{year}</p>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                {showGenres && mediaGenres && (
                    <p className="text-xs text-primary">{mediaGenres}</p>
                )}
            </div>
        </article>
    )
}

export default MediaCard