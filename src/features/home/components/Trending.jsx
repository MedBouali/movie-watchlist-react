import { MediaCard } from "@/components/cards"
import { Heading } from "@/components/ui"

function Trending({ title, media = [] }) {
    return (
        <section className="mx-auto my-12">
            <Heading text={title} />

            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                {media.map((item) => (
                    <div key={item.id} className="flex-none w-38 snap-start">
                        <MediaCard media={item} variant="hero" />
                    </div>
                ))}
            </div>
        </section>  
    )
}

export default Trending