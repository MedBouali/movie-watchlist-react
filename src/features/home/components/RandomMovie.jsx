import { useState } from "react"
import RandomMovieModal from "@/features/home/components/RandomMovieModal"
import { getRandomMovie } from "@/features/home/api/homeApi"
import { ErrorState, Button } from "@/components/ui"

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
                Not sure what to watch tonight? Click the button and{" "}
                <span className="font-semibold">Watch</span>
                <span className="text-primary font-semibold">Wise</span> will pick for you.
            </p>

            <Button
                onClick={handlePick}
                variant="primary"
                size="md"
                disabled={loading}
            >
                {loading ? "Picking..." : "Pick a Random Movie"}
            </Button>

            {error && <ErrorState message={error} />}

            <RandomMovieModal
                movie={selected}
                onClose={() => setSelected(null)}
            />
        </div>
    )
}

export default RandomMovie