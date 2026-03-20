import { LoadingIcon } from "./icons"

export default function LoadingState({ message = "Loading..." }) {
    return (
        <div className="min-h-[10rem] flex flex-col justify-center items-center">
            <LoadingIcon className="w-6 h-6 text-gray-400 mb-4 animate-spin" />
            <p className="text-sm">{message}</p>
        </div>
    )
}