import { useState } from "react"

export default function useRandomMedia(fetchFn, errorMessage) {
    const [selected, setSelected] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function pick() {
        try {
            setLoading(true)
            setError(null)
            const media = await fetchFn()
            setSelected(media)
        } catch (err) {
            console.error(err)
            setError(errorMessage)
        } finally {
            setLoading(false)
        }
    }

    const reset = () => setSelected(null)

    return { selected, loading, error, pick, reset }
}