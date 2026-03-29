import { LoadingIcon } from "@/components/icons"

export default function LoadingState({ message = "Loading...", inline = false }) {
    return (
        <div className={`flex ${inline ? "flex-row" : "min-h-[10rem] flex-col"} justify-center items-center`}>
            <LoadingIcon className={`w-6 h-6 text-gray-400 ${inline ? "mr-4" : "mb-4"} animate-spin`} />
            <p className="text-sm">{message}</p>
        </div>
    )
}