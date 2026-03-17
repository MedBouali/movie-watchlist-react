import { MovieIcon }  from "./icons"

function EmptyState({ title, description }) {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <MovieIcon className="w-16 h-16 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {title}
            </h3>
            <p className="text-gray-500 text-sm">{description}</p>
        </div>
    )
}

export default EmptyState