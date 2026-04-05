import { Button, ErrorState } from "@/components/ui"
import { RandomMovieModal } from "@/features/home"

function RandomPickerCard({
    title,
    description,
    onPick,
    loading,
    error,
    media,
    type,
    onClose
}) {
    return (
        <div className="bg-[#1f1d26] rounded-xl p-10 w-full text-center">
            <h2 className="text-xl font-semibold mb-8">{title}</h2>
            <p className="text-sm text-gray-400 mb-6">{description}</p>

            <Button
                onClick={onPick}
                variant="tertiary"
                size="md"
                disabled={loading}
            >
                {loading ? "Picking..." : `Pick a Random ${type === "tv" ? "TV Show" : "Movie"}`}
            </Button>

            {error && <ErrorState message={error} />}

            <RandomMovieModal media={media} type={type} onClose={onClose} />
        </div>
    )
}

export default RandomPickerCard