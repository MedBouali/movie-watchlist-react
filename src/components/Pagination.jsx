import { NextIcon, PreviousIcon } from "./icons"

function Pagination({ currentPage, totalPages, onPageChange, maxVisible = 5 }) {
    if (totalPages <= 1) return null

    const pageNumbers = []

    pageNumbers.push(1)

    let startPage = Math.max(currentPage - Math.floor(maxVisible / 2), 2)
    let endPage = Math.min(currentPage + Math.floor(maxVisible / 2), totalPages - 1)

    if (currentPage <= Math.floor(maxVisible / 2)) {
        endPage = Math.min(maxVisible, totalPages - 1)
    }

    if (currentPage + Math.floor(maxVisible / 2) >= totalPages) {
        startPage = Math.max(totalPages - maxVisible + 1, 2)
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
    }

    if (totalPages > 1) pageNumbers.push(totalPages)

    const renderPages = []
    for (let i = 0; i < pageNumbers.length; i++) {
        if (i > 0 && pageNumbers[i] - pageNumbers[i - 1] > 1) {
            renderPages.push("ellipsis-" + i)
        }
        renderPages.push(pageNumbers[i])
    }

    return (
        <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg bg-[#222028] disabled:opacity-50 hover:bg-[#222028]/90 hover:text-primary transition"
            >
                <PreviousIcon className="w-4 h-4" />
            </button>

            {renderPages.map((page) =>
                typeof page === "string" && page.startsWith("ellipsis") ? (
                    <span key={page} className="px-2 py-1">
                        …
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`px-4 py-2 text-xs font-medium rounded-lg ${
                            page === currentPage
                                ? "bg-primary text-[#222028]"
                                : "bg-[#222028] hover:bg-[#222028]/90 hover:text-primary transition"
                        }`}
                    >
                        {page}
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