import { Link } from "react-router-dom"
import { ImageWithFallback } from "@/components/ui"
import { formatMedia } from "@/features/media/utils/formatMedia"

function HeroTopMovieCard({ media }) {
    const { title, year, type, imageUrl } = formatMedia(media)
    const to = media?.id ? `/${type}/${media.id}` : "#"

    return (
        <article className="relative w-24 md:w-28 h-24 md:h-28 rounded-lg overflow-hidden group mb-4">
            <Link to={to} className="absolute inset-0 z-10" aria-label={`View details for ${title}`} />

            <ImageWithFallback
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
            />

            <div className="absolute flex flex-col items-start justify-end inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity p-2 z-20 pointer-events-none">
                <p className="text-[9px] text-white">{year}</p>
                <h3 className="text-xs font-semibold text-white">{title}</h3>
            </div>
        </article>
    )
}

export default HeroTopMovieCard