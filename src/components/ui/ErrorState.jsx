import { ErrorIcon } from "@/components/icons"

export default function ErrorState({ title = "Error", description, py = "py-16" }) {
    return (
        <div className={`flex flex-col items-center justify-center ${py} text-center text-red-500`}>
            <ErrorIcon className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
        </div>
    )
}