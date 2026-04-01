import { MediaCard } from "@/components/cards"

export default function SimilarMedia({ similar, type }) {
    if (!similar || similar.length === 0) return null

    return (
        <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">
                Similar {type === "movie" ? "Movies" : "TV Shows"}
            </h2>

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