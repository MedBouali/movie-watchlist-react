import { useContext } from "react";
import {
    BookmarkIcon,
    BookmarkFilledIcon,
    CheckIcon,
    CheckFilledIcon
} from "@/components/icons"
import { Button, CardButton } from "@/components/ui"
import { AuthContext } from "@/app/providers";

function WatchlistActions({
    isSaved,
    isWatched,
    onToggleWatchlist,
    onToggleWatched,
    variant = "card"
}) {
    const { user } = useContext(AuthContext);

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

                {isSaved && user && (
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
            <CardButton
                onClick={onToggleWatchlist}
                title={isSaved ? "Remove from watchlist" : "Add to watchlist"}
            >
                {isSaved ? (
                    <BookmarkFilledIcon className="w-[1rem] h-[1rem] fill-primary" />
                ) : (
                    <BookmarkIcon className="w-[1rem] h-[1rem]" />
                )}
            </CardButton>

            {isSaved && user && (
                <CardButton
                    onClick={onToggleWatched}
                    title={isWatched ? "Mark as unwatched" : "Mark as watched"}
                >
                    {isWatched ? (
                        <CheckFilledIcon className="w-[1.1rem] h-[1.1rem] fill-primary" />
                    ) : (
                        <CheckIcon className="w-[1.1rem] h-[1.1rem]" />
                    )}
                </CardButton>
            )}
        </div>
    )
}

export default WatchlistActions