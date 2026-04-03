import { useRef } from "react"
import { MediaCard } from "@/components/cards"
import { Heading, ScrollButtons } from "@/components/ui"

function MediaRow({ title, media = [] }) {
    const scrollRef = useRef(null)

    return (
        <section className="mx-auto my-12">
            <div className="flex items-center justify-between">
                <Heading text={title} />
                <ScrollButtons scrollRef={scrollRef} />
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide"
            >
                {media.map((item) => (
                    <div key={item.id} className="flex-none snap-start">
                        <MediaCard media={item} variant="small" />
                    </div>
                ))}
            </div>

        </section>
    )
}

export default MediaRow