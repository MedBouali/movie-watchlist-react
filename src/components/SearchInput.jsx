import { SearchIcon } from "./icons"

function SearchInput({ searchQuery, setSearchQuery, handleSearch }) {
    return (
        <form
            onSubmit={handleSearch}
            className="relative flex gap-3 max-w-xl mx-auto mt-14 px-6"
        >
            <input type="text" placeholder="Search for movies..."
                className="w-full bg-gray-100 border border-gray-300 text-gray-600 placeholder-gray-400 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            <SearchIcon className="w-5 h-5 absolute left-9 top-[1.576rem] -translate-y-1/2 text-gray-400" />
            <button
                type="submit"
                className="absolute right-8 top-1/2 -translate-y-1/2 bg-red-700 text-white hover:bg-red-800 font-normal transition px-4 py-2 rounded-lg text-md"
            >
                Search
            </button>
        </form>
    )
}

export default SearchInput