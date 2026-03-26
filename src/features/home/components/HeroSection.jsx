import { HeroTopMovies, RandomMovie } from "@/features/home"

function HeroSection({ movies }) {
    return (
        <section className="px-[6vw] min-h-screen flex flex-col justify-start items-center text-center pt-[7vw] relative">
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
                <RandomMovie media={movies} />
            </div>
        </section>
    )
}

export default HeroSection