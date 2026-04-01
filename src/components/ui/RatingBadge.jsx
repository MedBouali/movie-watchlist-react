function RatingBadge({ rating }) {
    if (!rating) return null

    return (
        <div className="flex justify-center items-center rounded-full text-[11px] font-medium w-8 h-8 bg-black/20 border-2 border-primary">
            {rating}
        </div>
    )
}

export default RatingBadge