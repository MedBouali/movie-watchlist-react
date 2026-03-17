import MediaCard from "../components/MediaCard"
import SearchInput from "../components/SearchInput"
import { useState } from 'react'

function Movies() {
    const [searchQuery, setSearchQuery] = useState("")

    const medias = [
        {
            title: "Matix",
            year: "2026",
            genre: "Action"
        },
        {
            title: "Lord Of The Rings",
            year: "2020",
            genre: "Drama"
        },
        {
            title: "Shutter Island",
            year: "2026",
            genre: "Thriller"
        }
    ]

    return (
        <>
            <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <section id="movies" className="pt-12">
                <div className="container mx-auto px-6 w-full my-4">
                    <h3 className="text-xl font-semibold mb-2">Popular Movies</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 py-6">
                        {medias
                            .filter((media) =>
                                media.title.toLowerCase().includes(searchQuery.toLowerCase())
                            )
                            .map((media, index) => {
                                return <MediaCard key={index} media={media} />
                            })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movies