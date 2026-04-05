import {
    useHome,
    Trending,
    MediaRow,
    RandomMedia
} from "@/features/home"
import { LoadingState, ErrorState } from "@/components/ui"
import { Container } from "@/components/layout"
import { Seo } from "@/components/seo"

function Home() {
    const { popularMovies, popularTV, trendingMovies, trendingTV, isLoading, error } = useHome()

    return (
        <>
            <Seo
                title="Discover Movies and TV Shows"
                description="Discover trending movies and TV shows, get random recommendations, and explore popular media on WatchWise."
            />

            <Container>
                {isLoading && (
                    <LoadingState message="Fetching media..." />
                )}

                {error && (
                    <ErrorState
                        title="Failed to load home data"
                        description="Something went wrong while fetching movies and TV shows."
                    />
                )}

                {!isLoading && !error && (
                    <>
                        <Trending title="Trending Movies" media={trendingMovies} />
                        <Trending title="Trending TV Shows" media={trendingTV} />

                        <RandomMedia title="Random Picks" />

                        <MediaRow title="Popular Movies" media={popularMovies} />
                        <MediaRow title="Popular TV Shows" media={popularTV} />
                    </>
                )}
            </Container>
        </>
    )
}

export default Home