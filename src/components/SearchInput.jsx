import { SearchIcon } from "./icons"

function SearchInput({ searchQuery, setSearchQuery, handleSearch }) {
    return (
        <form
            onSubmit={handleSearch}
            className="relative flex gap-3 max-w-xl mx-auto mt-14 px-6"
        >
            <input type="text" placeholder="Search for movies..."
                className="w-full bg-[#222028] border-2 border-[#222028] text-[15px] placeholder-gray-400 rounded-lg h-[45.5px] pl-11 pr-[95px] outline-none peer focus:border-2 focus:border-primary transition"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            <SearchIcon className="w-5 h-5 absolute left-10 top-[23.3px] -translate-y-1/2 text-gray-400 peer-focus:text-primary transiton" />
            <button
                type="submit"
                className="absolute right-[29px] top-1/2 -translate-y-1/2 bg-gray-400 peer-focus:bg-primary text-[#222028] hover:opacity-90 transition font-normal px-4 h-[36px] rounded-md text-[0.85rem]"
            >
                Search
            </button>
        </form>
    )
}

export default SearchInput