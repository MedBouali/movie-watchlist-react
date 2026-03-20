function MediaMeta({ media, year }) {
    return (
        <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 mb-5">
            {year && <span>{year}</span>}

            <span className="text-primary">
                IMDb: {media.vote_average ? media.vote_average.toFixed(1) : "N/A"}
            </span>

            {media.runtime && (
                <span>
                    {Math.floor(media.runtime / 60)}h {media.runtime % 60}m
                </span>
            )}

            {media.number_of_seasons && (
                <span>{media.number_of_seasons} Seasons</span>
            )}
        </div>
    )
}

export default MediaMeta