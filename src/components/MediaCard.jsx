import BookmarkIcon from "./icons/BookmarkIcon"
import InfoIcon from "./icons/InfoIcon"

function MediaCard({ media }) {
    function onAddToWatchlistClick() {
        alert("clicked")
    }

    return (
        <div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
                <img src="../../public/1.jpg" alt="Movie 1" className="w-full h-auto object-cover" />
                <div
                    className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex gap-2">
                        <button title="More Info"
                            className="grid place-items-center bg-blue-600/70 hover:bg-blue-600/80 text-white font-normal transition w-10 h-9 rounded-lg text-sm shadow-lg cursor-pointer">
                            <InfoIcon className="w-4 h-4" />
                        </button>
                        <button onClick={onAddToWatchlistClick} title="Add to Watchlist"
                            className="grid place-items-center bg-red-700/70 hover:bg-red-700/80 text-white font-normal transition w-10 h-9 rounded-lg text-sm shadow-lg cursor-pointer">
                            <BookmarkIcon className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <div
                    className="absolute bottom-0 left-0 w-full p-2 bg-linear-to-t from-gray-900/80 to-transparent">
                    <h3 className="text-sm font-semibold text-white">{media.title}</h3>
                    <p className="text-xs text-white">{media.year} • {media.genre}</p>
                </div>
            </div>
        </div>
    )
}

export default MediaCard