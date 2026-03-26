import HeroTopMovieCard from "@/features/home/components/HeroTopMovieCard"

function HeroTopMovies({ movies = [] }) {
    const top3 = movies.slice(0, 3)

    return (
        <div className="flex gap-4 justify-center mb-10">
            {top3.map((movie) => (
                <div key={movie.id} className="rounded-full text-start">
                    <HeroTopMovieCard media={movie} />
                </div>
            ))}
        </div>
    )
}

export default HeroTopMovies