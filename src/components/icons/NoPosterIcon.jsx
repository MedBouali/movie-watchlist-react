export default function NoPosterIcon({ className = "w-16 h-16" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={className}
        >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 15l4-4a2 2 0 012.8 0L13 14l2-2a2 2 0 012.8 0L21 15" />
            <path d="M9 9h.01" />
            <line x1="3" y1="5" x2="21" y2="19" />
        </svg>
    )
}