export function getPagination(currentPage, totalPages, maxVisible = 5) {
    if (totalPages <= 1) return []

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

    const result = []
    for (let i = 0; i < pageNumbers.length; i++) {
        if (i > 0 && pageNumbers[i] - pageNumbers[i - 1] > 1) {
            result.push({ type: "ellipsis", key: `ellipsis-${i}` })
        }

        result.push({ type: "page", value: pageNumbers[i] })
    }

    return result
}