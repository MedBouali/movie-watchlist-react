function CardButton({ children, onClick, title }) {
    return (
        <button
            onClick={onClick}
            title={title}
            className="relative z-30 grid place-items-center bg-[#222028]/90 hover:bg-[#222028]/90 hover:text-primary min-w-9 min-h-8 max-w-9 max-h-8 rounded-lg text-sm transition"
        >
            {children}
        </button>
    )
}

export default CardButton