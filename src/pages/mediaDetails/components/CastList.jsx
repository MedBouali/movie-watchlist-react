import { ImageWithFallback } from "../../../components"

function CastList({ cast }) {
    if (!cast || cast.length === 0) return null

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Cast</h2>

            <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2">
                {cast.map((actor) => (
                    <div key={actor.id} className="flex-shrink-0 w-32 flex flex-col items-center">
                        <ImageWithFallback
                            src={actor.profile_path ? `https://image.tmdb.org/t/p/w185${actor.profile_path}` : null}
                            alt={actor.name}
                            className="w-28 h-28 rounded-lg object-cover mb-2"
                        />
                        <span className="text-xs font-medium text-gray-300 text-center">{actor.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CastList