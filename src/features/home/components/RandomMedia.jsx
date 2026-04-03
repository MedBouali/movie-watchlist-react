import { useRandomMedia, getRandomMovie, getRandomTVShow } from "@/features/home"
import { RandomPickerCard } from "@/components/cards"
import { Heading } from "@/components/ui"

function RandomMedia({ title }) {
    const movie = useRandomMedia(getRandomMovie, "Failed to fetch a random movie. Please try again.")
    const tv = useRandomMedia(getRandomTVShow, "Failed to fetch a random TV show. Please try again.")

    return (
        <section className="mx-auto my-12">
            <Heading text={title} />

            <div className="flex flex-col md:flex-row justify-center gap-6">
                <RandomPickerCard
                    title="Not sure what movie to watch?"
                    description={
                        <>
                            Let <span className="font-semibold">Watch</span>
                            <span className="text-primary font-semibold">Wise</span> pick a movie for you.
                        </>
                    }
                    onPick={movie.pick}
                    loading={movie.loading}
                    error={movie.error}
                    media={movie.selected}
                    type="movie"
                    onClose={movie.reset}
                />

                <RandomPickerCard
                    title="Stuck on a show?"
                    description={
                        <>
                            Let <span className="font-semibold">Watch</span>
                            <span className="text-primary font-semibold">Wise</span> surprise you with a TV series.
                        </>
                    }
                    onPick={tv.pick}
                    loading={tv.loading}
                    error={tv.error}
                    media={tv.selected}
                    type="tv"
                    onClose={tv.reset}
                />
            </div>
        </section>
    )
}

export default RandomMedia