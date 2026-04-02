import { MediaCard } from "@/components/cards"
import { Heading } from "@/components/ui"

export default function SimilarMedia({ similar, type }) {
    if (!similar || similar.length === 0) return null

    return (
        <div className="mt-16">
            <Heading text={`Similar ${type === "movie" ? "Movies" : "TV Shows"}`} />
            
            <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
                {similar.map((item) => (
                    <div key={item.id} className="flex-none w-40 md:w-48 snap-start">
                        <MediaCard media={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}