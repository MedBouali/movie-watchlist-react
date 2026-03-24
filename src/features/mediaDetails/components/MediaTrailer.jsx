import { PlayIcon } from "@/components/icons"

function MediaTrailer({ trailer }) {
    if (!trailer) return null

    const thumbnail = `https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`
    const youtubeUrl = `https://www.youtube.com/watch?v=${trailer.key}`

    return (
        <div className="flex justify-start items-center gap-3 mt-3">
            <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group max-w-[90px] cursor-pointer"
            >
                <div className="relative w-[90px] h-[51px] rounded-lg overflow-hidden border border-white/10">
                    <img
                        src={thumbnail}
                        alt="Trailer thumbnail"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 group-hover:bg-gray-700/40 group-hover:text-primary transition" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <PlayIcon className="w-8 h-8 text-white group-hover:text-primary transition" />
                    </div>
                </div>
            </a>
            <div className="text-gray-200 pb-2">Watch trailer</div>
        </div>
    )
}

export default MediaTrailer