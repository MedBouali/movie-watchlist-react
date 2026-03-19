import { genres } from "../utils/genres"
import { BookmarkIcon, InfoIcon } from "./icons"
import ImageWithFallback from "./ImageWithFallback"

function MediaCard({ media }) {
    function onAddToWatchlistClick() {
        alert("clicked")
    }

    const mediaGenres = media.genre_ids
        ?.map((id) => genres.find((g) => g.id === id)?.name)
        .filter(Boolean)
        .join(", ")

    return (
        <div className="relative rounded-xl overflow-hidden shadow-lg group aspect-[2/3]">
            <ImageWithFallback
                src={
                    media.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${media.poster_path}`
                        : null
                }
                alt={media.title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-800/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                <div className="flex gap-2 justify-end">
                    <button title="More Info" className="grid place-items-center bg-blue-500/40 hover:bg-blue-600/50 text-white w-9 h-8 rounded-lg text-sm">
                        <InfoIcon className="w-4 h-4" />
                    </button>
                    <button onClick={onAddToWatchlistClick} title="Add to list" className="grid place-items-center bg-yellow-500/40 hover:bg-yellow-500/50 text-white w-9 h-8 rounded-lg text-sm">
                        <BookmarkIcon className="w-4 h-4" />
                    </button>
                </div>

                <p className="text-white text-xs line-clamp-4 mb-14">{media.overview}</p>
            </div>
            <div
                className="absolute bottom-0 left-0 w-full p-3 bg-linear-to-t from-gray-900/80 to-transparent">
                <h3 className="text-sm font-semibold text-white">{media.title}</h3>
                <p className="text-xs text-white">
                    {media.release_date?.split("-")[0]} • <span className="text-yellow-500">{media.vote_average.toFixed(1)}</span> IMDb
                </p>
                {mediaGenres && (
                    <p className="text-xs text-white">
                        {mediaGenres}
                    </p>
                )}
            </div>
        </div>
    )
}

export default MediaCard