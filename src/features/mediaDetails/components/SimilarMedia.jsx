import { useRef } from "react"
import { MediaCard } from "@/components/cards"
import { Heading, ScrollButtons } from "@/components/ui"

export default function SimilarMedia({ similar, type }) {
    const scrollRef = useRef(null)
    if (!similar || similar.length === 0) return null

    return (
        <div className="mt-16">
            <div className="flex items-center justify-between">
                <Heading text={`Similar ${type === "movie" ? "Movies" : "TV Shows"}`} />
                <ScrollButtons scrollRef={scrollRef} />
            </div>
            
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide"
            >
                {similar.map((item) => (
                    <div key={item.id} className="flex-none snap-start">
                        <MediaCard media={item} variant="small" />
                    </div>
                ))}
            </div>
        </div>
    )
}