import { MediaHeader, formatMediaDetails } from "@/features/mediaDetails"
import { CloseIcon } from "@/components/icons"
import { LoadingState, Portal } from "@/components/ui"
import { useMediaDetails } from "@/features/home"

function RandomMovieModal({ media, type = "movie", onClose }) {
    const { details, loading } = useMediaDetails(media, type)

    if (!media) return null

    const { title, year, trailer } = formatMediaDetails(details)

    return (
        <Portal>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
                <div className="p-4 bg-gray-900 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-xl">

                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-500 hover:text-white px-3 py-1"
                    >
                        <CloseIcon className="w-5 h-5" />
                    </button>

                    <div className="p-6 text-white text-start">
                        {loading || !details ? (
                            <LoadingState message="Loading..." />
                        ) : (
                            <MediaHeader
                                media={details}
                                title={title}
                                year={year}
                                trailer={trailer}
                                showBackButton={false}
                            />
                        )}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default RandomMovieModal