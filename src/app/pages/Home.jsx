import useHome from "@/features/home/hooks/useHome"
import { HeroSection, MediaRow } from "@/features/home"
import { LoadingState, ErrorState } from "@/components/ui"

function Home() {
    const { popularMovies, popularTV, isLoading, error } = useHome()

    if (isLoading) return <LoadingState message="Fetching media..." />

    if (error)
        return (
            <ErrorState
                title="Failed to load home data"
                description="Something went wrong while fetching movies and TV shows."
            />
        )

    return (
        <>
            <HeroSection movies={popularMovies} />
            <MediaRow title="Popular Movies" media={popularMovies} />
            <MediaRow title="Popular TV Shows" media={popularTV} />
        </>
    )
}

export default Home