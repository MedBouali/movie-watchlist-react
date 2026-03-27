import { useEffect, useState } from "react"
import { getMovieDetails, getTVDetails, getWatchProviders } from "@/features/mediaDetails"

export default function useMediaDetails(type, id) {
    const [media, setMedia] = useState(null)
    const [providers, setProviders] = useState(null)
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

                const providerData = await getWatchProviders(id, type)

                setMedia(data)
                setProviders(providerData.results || null)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        if (id) fetchDetails()
    }, [id, type])

    return { media, providers, isLoading, error }
}