function SearchInput({ searchQuery, setSearchQuery }) {
    return (
        <div className="relative flex gap-3 max-w-xl mx-auto mt-14 px-6">
            <input type="text" placeholder="Search movies..."
                className="w-full bg-gray-100 border border-gray-300 text-gray-600 placeholder-gray-400 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            <i className="fa-solid fa-magnifying-glass absolute left-9 top-[1.575rem] -translate-y-1/2 text-gray-400"></i>
        </div>
    )
}

export default SearchInput