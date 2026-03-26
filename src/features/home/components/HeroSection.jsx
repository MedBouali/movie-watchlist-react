import { HeroTopMovies, RandomMovie } from "@/features/home"

function HeroSection({ movies }) {
    return (
        <section className="px-5 min-h-screen flex flex-col justify-start items-center text-center pt-[7vw]">
            <h1 className="text-5xl font-bold mb-6">
                Never Wonder What To Watch Again
            </h1>

            <p className="text-md md:text-md mb-10 max-w-2xl">
                Discover movies, track your watchlist, and explore what everyone is watching with
                <span className="font-semibold"> Watch</span>
                <span className="text-primary font-semibold">Wise</span>.
            </p>

            <HeroTopMovies movies={movies} />

            <RandomMovie media={movies} />
        </section>
    )
}

export default HeroSection