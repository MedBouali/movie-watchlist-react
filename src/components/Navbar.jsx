import { useState } from "react"
import { MenuIcon } from "./icons"
import { Link } from "react-router-dom"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="top-0 left-0 right-0 py-3 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                <h1 className="text-2xl font-bold">
                    Watch<span className="text-primary">Wise</span>
                </h1>

                <nav className="hidden md:flex justify-end gap-8 font-medium">
                    <Link to="/"
                        className="border-b-2 border-transparent hover:border-primary pb-1 transition">Home</Link>
                    <Link to="/movies"
                        className="border-b-2 border-transparent hover:border-primary pb-1 transition">Movies</Link>
                    <Link to="/tv-shows" className="border-b-2 border-transparent hover:border-primary pb-1 transition">TV
                        Shows</Link>
                    <Link to="/watchlist"
                        className="border-b-2 border-transparent hover:border-primary pb-1 transition">Watch List</Link>
                </nav>

                <button onClick={() => setIsOpen(!isOpen)} id="menuBtn" className="md:hidden cursor-pointer">
                    <MenuIcon className="w-7 h-7" />
                </button>
            </div>

            <div id="mobileMenu"
                className={`${isOpen ? "block" : "hidden"} md:hidden px-6 p-4 border-b border-gray-300 font-medium space-y-3`}>
                <Link to="/" className="block hover:text-primary">Home</Link>
                <Link to="/movies" className="block hover:text-primary">Movies</Link>
                <Link to="/tv-shows" className="block hover:text-primary">TV Shows</Link>
                <Link to="/watchlist" className="block hover:text-primary">Watch List</Link>
            </div>
        </header>
    )
}

export default Navbar