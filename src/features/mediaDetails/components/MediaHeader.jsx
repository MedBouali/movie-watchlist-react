import { MediaMeta, MediaTrailer } from "@/features/mediaDetails"
import { ImageWithFallback } from "@/components/ui"

function MediaHeader({ media, title, year, navigate, trailer, showActions = true }) {
    return (
        <div className="grid md:grid-cols-[260px_1fr] gap-10">
            <div className="relative rounded-xl overflow-hidden shadow-lg group aspect-[2/3]">
                <ImageWithFallback
                    src={
                        media.poster_path
                            ? `https://image.tmdb.org/t/p/w500/${media.poster_path}`
                            : null
                    }
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col justify-between">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        {title}
                    </h1>

                    <MediaMeta media={media} year={year} />

                    {media.genres?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {media.genres.map((g) => (
                                <span
                                    key={g.id}
                                    className="bg-[#222028] px-3 py-1 rounded-lg text-xs text-primary"
                                >
                                    {g.name}
                                </span>
                            ))}
                        </div>
                    )}

                    <p className="text-gray-300 leading-relaxed max-w-2xl mb-4">
                        {media.overview || "No description available."}
                    </p>

                    <MediaTrailer trailer={trailer} />
                </div>

                <div className="flex gap-3 mt-4">
                    {showActions && (
                        <>
                            <button
                                onClick={() => navigate(-1)}
                                className="px-4 py-2 rounded-lg text-sm font-medium bg-[#222028] hover:bg-[#222028]/90 hover:text-primary transition"
                            >
                                Back
                            </button>

                            <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[#222028] hover:bg-[#222028]/90 hover:text-primary transition">
                                Add To List
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MediaHeader