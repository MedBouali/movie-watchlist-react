import { ImageWithFallback } from "@/components/ui"

function ProviderGroup({ title, providers = [] }) {
    if (!providers || providers.length === 0) return null

    return (
        <div className="mb-6">
            <h3 className="text-sm text-gray-400 mb-2">{title}</h3>

            <div className="flex gap-3">
                {providers.map((p) => {
                    if (!p.logo_path) return null

                    return (
                        <div
                            key={p.provider_id}
                            className="block w-10 h-10"
                            title={p.provider_name}
                        >
                            <ImageWithFallback
                                src={`https://image.tmdb.org/t/p/w92${p.logo_path}`}
                                alt={p.provider_name}
                                className="w-full h-full object-contain rounded"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function WatchProviders({ providers, country = "US" }) {
    if (!providers || !providers[country]) return null

    const data = providers[country]

    const hasAny =
        data.flatrate?.length ||
        data.rent?.length ||
        data.buy?.length

    if (!hasAny) return null

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Where to Watch</h2>

            <ProviderGroup
                title="Stream"
                providers={data.flatrate}
            />

            <ProviderGroup
                title="Rent"
                providers={data.rent}
            />

            <ProviderGroup
                title="Buy"
                providers={data.buy}
            />

            <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1 text-sm text-primary hover:underline"
            >
                View all options →
            </a>
        </div>
    )
}

export default WatchProviders