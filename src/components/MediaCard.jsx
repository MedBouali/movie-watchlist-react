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
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                <div className="flex gap-2 justify-between">
                    <div className="flex justify-center items-center rounded-full text-[11px] font-medium w-8 h-8 bg-black/20 border-2 border-primary">{media.vote_average.toFixed(1)}</div>
                    <button onClick={onAddToWatchlistClick} title="Add to list" className="grid place-items-center bg-[#222028] hover:bg-[#222028]/90 hover:text-primary w-9 h-8 rounded-lg text-sm transition">
                        <BookmarkIcon className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <button className="bg-[#222028] hover:bg-[#222028]/90 hover:text-primary rounded-lg text-sm font-medium px-4 py-2 mt-14 transition">
                        Read More
                    </button>
                </div>
                <p className="text-white text-xs line-clamp-4 mb-14">{media.overview}</p>
            </div>
            <div
                className="absolute bottom-0 left-0 w-full p-3 bg-linear-to-t from-gray-900/80 to-transparent">
                <p className="text-[11px] text-white">
                    {media.release_date?.split("-")[0]}
                </p>
                <h3 className="text-sm font-semibold text-white">{media.title}</h3>
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