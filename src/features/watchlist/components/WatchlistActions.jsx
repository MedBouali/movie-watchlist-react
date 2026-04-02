import {
    BookmarkIcon,
    BookmarkFilledIcon,
    CheckIcon,
    CheckFilledIcon
} from "@/components/icons"
import { Button } from "@/components/ui"

function WatchlistActions({
    isSaved,
    isWatched,
    onToggleWatchlist,
    onToggleWatched,
    variant = "card"
}) {

    if (variant === "header") {
        return (
            <>
                <Button
                    onClick={onToggleWatchlist}
                    variant="secondary"
                    size="md"
                >
                    {isSaved ? "Remove from Watchlist" : "Add to Watchlist"}
                </Button>

                {isSaved && (
                    <Button
                        onClick={onToggleWatched}
                        variant="secondary"
                        size="md"
                    >
                        {isWatched ? "Mark as Unwatched" : "Mark as Watched"}
                    </Button>
                )}
            </>
        )
    }

    return (
        <div className="absolute top-0 right-0 p-3 flex flex-col gap-2">
            <button
                onClick={onToggleWatchlist}
                title={isSaved ? "Remove from watchlist" : "Add to watchlist"}
                className="relative z-30 grid place-items-center bg-[#222028]/90 hover:bg-[#222028]/90 hover:text-primary min-w-9 min-h-8 max-w-9 max-h-8 rounded-lg text-sm transition"
            >
                {isSaved ? (
                    <BookmarkFilledIcon className="w-[1rem] h-[1rem] fill-primary" />
                ) : (
                    <BookmarkIcon className="w-[1rem] h-[1rem]" />
                )}
            </button>

            {isSaved && (
                <button
                    onClick={onToggleWatched}
                    title={isWatched ? "Mark as unwatched" : "Mark as watched"}
                    className="relative z-30 grid place-items-center bg-[#222028]/90 hover:bg-[#222028]/90 hover:text-primary min-w-9 min-h-8 max-w-9 max-h-8 rounded-lg text-sm transition"
                >
                    {isWatched ? (
                        <CheckFilledIcon className="w-[1.1rem] h-[1.1rem] fill-primary" />
                    ) : (
                        <CheckIcon className="w-[1.1rem] h-[1.1rem]" />
                    )}
                </button>
            )}
        </div>
    )
}

export default WatchlistActions