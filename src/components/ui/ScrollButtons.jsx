import { NextIcon, PreviousIcon } from "@/components/icons"

export default function ScrollButtons({ scrollRef }) {
    const scroll = (direction = "right") => {
        if (!scrollRef.current) return
        const container = scrollRef.current
        const scrollAmount = container.clientWidth * 0.8
        container.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" })
    }

    return (
        <div className="flex gap-2 z-40 mb-4">
            <button
                onClick={() => scroll("left")}
                className="p-2 bg-[#222028] rounded-lg hover:text-primary transition"
            >
                <PreviousIcon className="w-5 h-4" />
            </button>
            <button
                onClick={() => scroll("right")}
                className="p-2 bg-[#222028] rounded-lg hover:text-primary transition"
            >
                <NextIcon className="w-5 h-4" />
            </button>
        </div>
    )
}