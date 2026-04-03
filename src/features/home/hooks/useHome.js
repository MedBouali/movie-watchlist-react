import { useEffect, useState } from "react"
import { fetchHomeData } from "@/features/home/api/homeApi"

function useHome() {
    const [data, setData] = useState({
        popularMovies: [],
        popularTV: [],
        trendingMovies: [],
        trendingTV: [],
    })
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function load() {
            try {
                const result = await fetchHomeData()
                setData(result)
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }

        load()
    }, [])

    return { ...data, isLoading, error }
}

export default useHome