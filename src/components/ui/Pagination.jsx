import { NextIcon, PreviousIcon } from "@/components/icons"
import { getPagination } from "@/utils/getPagination"

function Pagination({ currentPage, totalPages, onPageChange, maxVisible = 5 }) {
    const pages = getPagination(currentPage, totalPages, maxVisible)

    if (pages.length === 0) return null

    return (
        <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg bg-[#222028] disabled:opacity-50 hover:bg-[#222028]/90 hover:text-primary transition"
            >
                <PreviousIcon className="w-4 h-4" />
            </button>

            {pages.map((item) =>
                item.type === "ellipsis" ? (
                    <span key={item.key} className="px-2 py-1">
                        …
                    </span>
                ) : (
                    <button
                        key={item.value}
                        onClick={() => onPageChange(item.value)}
                        className={`px-4 py-2 text-xs font-medium rounded-lg ${item.value === currentPage
                            ? "bg-primary text-[#222028]"
                            : "bg-[#222028] hover:bg-[#222028]/90 hover:text-primary transition"
                            }`}
                    >
                        {item.value}
                    </button>
                )
            )}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg bg-[#222028] disabled:opacity-50 hover:bg-[#222028]/90 hover:text-primary transition"
            >
                <NextIcon className="w-4 h-4" />
            </button>
        </div>
    )
}

export default Pagination