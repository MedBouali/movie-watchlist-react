import { SearchIcon } from "./icons"

function SearchInput({ searchQuery, setSearchQuery, handleSearch }) {
    return (
        <form
            onSubmit={handleSearch}
            className="relative flex gap-3 max-w-xl mx-auto mt-14 px-6"
        >
            <input type="text" placeholder="Search for movies..."
                className="w-full bg-white border border-gray-200 text-gray-700 text-[15px] placeholder-gray-400 rounded-[2rem] h-[45.5px] pl-11 pr-[95px] outline-none peer focus:border-2 focus:border-red-600 transition"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            <SearchIcon className="w-5 h-5 absolute left-10 top-[23.3px] -translate-y-1/2 text-gray-400 peer-focus:text-red-700 transiton" />
            <button
                type="submit"
                className="absolute right-[30px] top-1/2 -translate-y-1/2 bg-gray-400 peer-focus:bg-red-700 text-white hover:bg-red-700 transition font-normal px-4 h-[36px] rounded-3xl text-[0.85rem]"
            >
                Search
            </button>
        </form>
    )
}

export default SearchInput