import MediaCard from "@/features/media/components/MediaCard"

function MediaRow({ title, media = [] }) {
    return (
        <section className="mx-auto my-12">
            <h2 className="text-2xl font-semibold mb-6">{title}</h2>

            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                {media.map((item) => (
                    <div key={item.id} className="flex-none w-38 md:w-44 snap-start">
                        <MediaCard media={item} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MediaRow