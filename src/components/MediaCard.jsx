import { genres } from "../utils/genres"
import { BookmarkIcon } from "./icons"
import ImageWithFallback from "./ImageWithFallback"
import { useNavigate } from "react-router-dom"

function MediaCard({ media }) {
    const title = media.title || media.name || "Untitled"
    const year = (media.release_date || media.first_air_date)?.split("-")[0]
    const navigate = useNavigate()

    function onAddToWatchlistClick() {
        alert("clicked")
    }

    const handleMediaClick = () => {
        if (!media?.id) return
        const type = media.title ? "movie" : "tv"
        navigate(`/${type}/${media.id}`)
    }

    const mediaGenres = media.genre_ids
        ?.map((id) => genres.find((g) => g.id === id)?.name)
        .filter(Boolean)
        .join(", ")

    return (
        <div className="relative rounded-xl overflow-hidden shadow-lg group aspect-[2/3] group-hover transition-transform">
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
            </div>
            <div className="absolute inset-0 flex justify-center items-start mt-[50%]
                opacity-0 group-hover:opacity-100 
                transition z-20 pointer-events-none">
                <button
                    onClick={handleMediaClick}
                    className="pointer-events-auto bg-[#222028]/70 hover:bg-[#222028]/90 hover:text-primary rounded-lg text-sm font-medium px-4 py-2 transition"
                >
                    Read More
                </button>
            </div>
            <div
                className="absolute bottom-0 left-0 w-full p-3 bg-linear-to-t from-gray-900/80 to-transparent">
                <p className="text-transparent text-xs line-clamp-4 group-hover:text-white">{media.overview}</p>
                <p className="text-[11px] text-white">{year}</p>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                {mediaGenres && (
                    <p className="text-xs text-primary">
                        {mediaGenres}
                    </p>
                )}
            </div>
        </div>
    )
}

export default MediaCard