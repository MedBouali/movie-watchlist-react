import { useState } from "react"
import { NavLink } from "react-router-dom"
import { MenuIcon } from "@/components/icons"
import { useAuth } from "@/app/providers"
import { LoadingState, AvatarMenu } from "@/components/ui"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { user, isLoading } = useAuth()

    const activeClass = "border-b-2 border-primary font-medium py-1"
    const inactiveClass = "border-b-2 border-transparent font-medium hover:border-primary py-1 transition"

    const getAuthButtons = () => {
        if (isLoading) return <LoadingState message="Loading..." inline={true} />;

        if (user) return <AvatarMenu email={user.email} />

        return (
            <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
                Sign In
            </NavLink>
        )
    }

    return (
        <header className="fixed top-0 left-0 right-0 py-1 z-50 bg-[#1a191f]">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden cursor-pointer"
                    >
                        <MenuIcon className="w-7 h-7" />
                    </button>

                    <NavLink to="/" end>
                        <h1 className="text-2xl font-bold">
                            Watch<span className="text-primary">Wise</span>
                        </h1>
                    </NavLink>
                </div>

                <div className="flex items-center gap-6 pr-1">
                    <nav className="hidden md:flex items-center gap-6">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/movies"
                            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
                        >
                            Movies
                        </NavLink>
                        <NavLink
                            to="/tv-shows"
                            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
                        >
                            TV Shows
                        </NavLink>
                        <NavLink
                            to="/watchlist"
                            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
                        >
                            Watch List
                        </NavLink>
                        <div
                            role="separator"
                            aria-orientation="vertical"
                            className="w-[0.5px] h-4 bg-gray-500 mx-2"
                        />
                    </nav>
                    {getAuthButtons()}
                </div>
            </div>

            <div className={`${isOpen ? "block" : "hidden"} md:hidden px-6 p-4 font-medium space-y-3`}>
                <div className="flex flex-col gap-3">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-primary block" : "block"}>
                        Home
                    </NavLink>
                    <NavLink to="/movies" className={({ isActive }) => isActive ? "text-primary block" : "block"}>
                        Movies
                    </NavLink>
                    <NavLink to="/tv-shows" className={({ isActive }) => isActive ? "text-primary block" : "block"}>
                        TV Shows
                    </NavLink>
                    <NavLink to="/watchlist" className={({ isActive }) => isActive ? "text-primary block" : "block"}>
                        Watch List
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Navbar