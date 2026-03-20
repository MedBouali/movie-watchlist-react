import { useEffect, useState } from "react"
import { getMovieDetails, getTVDetails } from "../services/mediaService"

export default function useMediaDetails(type, id) {
    const [media, setMedia] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchDetails() {
            setIsLoading(true)
            setError(null)

            try {
                const data =
                    type === "movie"
                        ? await getMovieDetails(id)
                        : await getTVDetails(id)

                setMedia(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        if (id) fetchDetails()
    }, [id, type])

    return { media, isLoading, error }
}