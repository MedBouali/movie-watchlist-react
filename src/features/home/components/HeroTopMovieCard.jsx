import { Link } from "react-router-dom"
import { ImageWithFallback } from "@/components/ui"
import { formatMedia } from "@/features/media/utils/formatMedia"

function HeroTopMovieCard({ media }) {
    const { title, year, type, imageUrl } = formatMedia(media)
    const to = media?.id ? `/${type}/${media.id}` : "#"

    return (
        <article className="relative w-16 md:w-20 h-16 md:h-20 rounded-lg overflow-hidden group mb-4">
            <Link to={to} className="absolute inset-0 z-10" aria-label={`View details for ${title}`} />

            <ImageWithFallback
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
            />

            <div className="absolute flex flex-col items-center justify-end inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity p-2 z-20 pointer-events-none">
                <h3 className="text-[10px] font-semibold text-white text-center">{title}</h3>
            </div>
        </article>
    )
}

export default HeroTopMovieCard