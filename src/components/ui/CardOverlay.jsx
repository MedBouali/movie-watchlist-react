function CardOverlay({ children }) {
    return (
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 z-20 pointer-events-none">
            {children}
        </div>
    )
}

export default CardOverlay