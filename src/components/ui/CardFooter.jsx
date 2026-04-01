function CardFooter({
    title,
    year,
    overview,
    genres,
    showOverview = true,
    showGenres = true
}) {
    return (
        <div className="absolute bottom-0 left-0 w-full p-3 bg-linear-to-t from-gray-900/70 to-transparent z-20">
            {showOverview && (
                <p className="text-transparent text-xs line-clamp-4 group-hover:text-white">
                    {overview}
                </p>
            )}

            <p className="text-[11px] text-white">{year}</p>

            <h3 className="text-sm font-semibold text-white">
                {title}
            </h3>

            {showGenres && genres && (
                <p className="text-xs text-primary">
                    {genres}
                </p>
            )}
        </div>
    )
}

export default CardFooter