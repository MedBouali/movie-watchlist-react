import { useState } from "react"
import RandomMovieModal from "@/features/home/components/RandomMovieModal"
import { getRandomMovie } from "@/features/home/api/homeApi"
import { ErrorState } from "@/components/ui"

function RandomMovie() {
    const [selected, setSelected] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function handlePick() {
        try {
            setLoading(true)
            setError(null)

            const randomMovie = await getRandomMovie()
            setSelected(randomMovie)
        } catch (err) {
            console.error(err)
            setError("Failed to fetch a random movie. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="text-center">
            <p className="text-gray-400 text-[0.9rem] mb-6">
                If you're wondering what to watch tonight, just click the button and{" "}
                <span className="font-semibold"> Watch</span>
                <span className="text-primary font-semibold">Wise</span> will pick a random movie for you.
            </p>

            <button
                onClick={handlePick}
                disabled={loading}
                className="text-sm font-medium border-2 border-primary hover:bg-[#222028]/90 hover:text-primary transition px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? "Picking..." : "Pick a Random Movie"}
            </button>

            {error && <ErrorState message={error} />}

            <RandomMovieModal
                movie={selected}
                onClose={() => setSelected(null)}
            />
        </div>
    )
}

export default RandomMovie