export default function Heading({ text, className = "text-2xl font-semibold mb-2" }) {
    if (!text) return null;

    const parts = text.split('"');

    return (
        <div className="flex justify-between items-center mb-4">
            <h1 className={className}>
                {parts.length > 1 ? (
                    <>
                        {parts[0]}
                        <span className="text-primary">"{parts[1]}"</span>
                        {parts[2] || ""}
                    </>
                ) : (
                    text
                )}
            </h1>
        </div>
    );
}