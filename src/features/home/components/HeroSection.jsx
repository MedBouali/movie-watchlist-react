import { HeroTopMovies, RandomMovie } from "@/features/home"
import { Container } from "@/components/layout"
import useRotatingIndex from "@/features/home/hooks/useRotatingIndex"

function HeroSection({ movies }) {
    const topMovies = movies.slice(0, 10)

    const bgIndex = useRotatingIndex(topMovies.length, 10000)

    const currentMovie = topMovies[bgIndex]

    const bgImage = currentMovie?.backdrop_path
        ? `https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}`
        : null

    return (
        <section className="relative min-h-screen flex flex-col justify-center text-center overflow-hidden">
            {bgImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 backdrop-blur-sm" />

            <div className="relative z-10 w-full">
                <Container>
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            Find What to Watch, Faster.
                        </h1>

                        <p className="text-md md:text-lg mb-10 max-w-3xl text-gray-300">
                            Discover movies, track your watchlist, and explore what everyone is watching with{" "}
                            <span className="font-semibold">Watch</span>
                            <span className="text-primary font-semibold">Wise</span>.
                        </p>

                        <HeroTopMovies movies={movies} />

                        <div className="mt-8">
                            <RandomMovie />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default HeroSection