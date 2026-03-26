import { useEffect, useRef } from "react"
import HeroTopMovieCard from "@/features/home/components/HeroTopMovieCard"

function HeroTopMovies({ movies = [] }) {
    const containerRef = useRef(null)
    const top20 = movies.slice(0, 20)
    const loopMovies = [...top20, ...top20]

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        let animationFrame
        const speed = 0.5

        const scroll = () => {
            container.scrollLeft += speed

            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0
            }

            animationFrame = requestAnimationFrame(scroll)
        }

        animationFrame = requestAnimationFrame(scroll)

        return () => cancelAnimationFrame(animationFrame)
    }, [])

    return (
        <div
            ref={containerRef}
            className="w-full overflow-x-hidden flex gap-2"
        >
            {loopMovies.map((movie, index) => (
                <div
                    key={`${movie.id}-${index}`}
                    className="flex-shrink-0 flex"
                >
                    <HeroTopMovieCard media={movie} />
                </div>
            ))}
        </div>
    )
}

export default HeroTopMovies