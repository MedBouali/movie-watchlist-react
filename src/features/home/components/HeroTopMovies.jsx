import HeroTopMovieCard from "@/features/home/components/HeroTopMovieCard"
import useAutoScrollCarousel from "@/features/home/hooks/useAutoScrollCarousel"

function HeroTopMovies({ movies = [] }) {
    const containerRef = useAutoScrollCarousel(0.5)
    const top20 = movies.slice(0, 20)
    const loopMovies = [...top20, ...top20]

    return (
        <div className="w-full overflow-hidden">
            <div
                ref={containerRef}
                className="overflow-x-hidden flex gap-2"
            >
                {loopMovies.map((movie, index) => (
                    <div
                        key={`${movie.id}-${index}`}
                        className="flex-shrink-0"
                    >
                        <HeroTopMovieCard media={movie} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeroTopMovies