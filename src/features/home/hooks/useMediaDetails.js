import { useState, useEffect } from "react"
import { getMovieDetails, getTVDetails } from "@/features/mediaDetails/api/mediaDetailsApi"

export default function useMediaDetails(media, type = "movie") {
    const [details, setDetails] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!media?.id) return

        setDetails(null)
        setLoading(true)

        async function load() {
            try {
                const data =
                    type === "movie"
                        ? await getMovieDetails(media.id)
                        : await getTVDetails(media.id)
                setDetails(data)
            } finally {
                setLoading(false)
            }
        }

        load()
    }, [media, type])

    return { details, loading }
}