import { NoPosterIcon } from "@/components/icons"

function ImageWithFallback({ src, alt, className }) {
    return src ? (
        <img src={src} alt={alt} className={className} />
    ) : (
        <div className={`flex flex-col items-center justify-center bg-gray-300 text-gray-500 ${className}`}>
            <NoPosterIcon className="w-12 h-12 mb-2 opacity-80" />
            <span className="text-xs">Unavailable</span>
        </div>
    )
}

export default ImageWithFallback