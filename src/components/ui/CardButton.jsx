function CardButton({ children, onClick, title }) {
    return (
        <button
            onClick={onClick}
            title={title}
            className="relative z-30 grid place-items-center bg-[#222028]/70 hover:bg-[#222028]/90 hover:text-primary min-w-8 min-h-8 max-w-8 max-h-8 rounded-full text-sm transition"
        >
            {children}
        </button>
    )
}

export default CardButton