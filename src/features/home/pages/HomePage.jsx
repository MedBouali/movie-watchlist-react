import {
    useHome,
    Trending,
    MediaRow,
    RandomMedia
} from "@/features/home"
import { LoadingState, ErrorState } from "@/components/ui"
import { Container } from "@/components/layout"

function Home() {
    const { popularMovies, popularTV, trendingMovies, trendingTV, isLoading, error } = useHome()

    if (isLoading)
        return (
            <Container>
                <LoadingState message="Fetching media..." />
            </Container>
        )

    if (error)
        return (
            <Container>
                <ErrorState
                    title="Failed to load home data"
                    description="Something went wrong while fetching movies and TV shows."
                />
            </Container>
        )

    return (
        <Container>
            <Trending title="Trending Movies" media={trendingMovies} />
            <Trending title="Trending TV Shows" media={trendingTV} />

            <RandomMedia title="Random Picks" />

            <MediaRow title="Popular Movies" media={popularMovies} />
            <MediaRow title="Popular TV Shows" media={popularTV} />
        </Container>
    )
}

export default Home