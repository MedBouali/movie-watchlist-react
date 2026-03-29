import { useState } from "react"
import { Link } from "react-router-dom"
import { MenuIcon } from "@/components/icons"
import { logout } from "@/services/firebase/auth"
import { useAuth } from "@/app/providers"
import { Dropdown } from "@/components/ui"
import { LoadingState } from "@/components/ui"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { user, isLoading } = useAuth()

    const options = [
        {
            label: "Logout",
            value: "logout",
            action: logout,
        },
    ]

    const getAuthButtons = (isMobile = false) => {
        if (isLoading) return <LoadingState message="Loading..." inline={true} />;

        if (user) {
            return (
                <>
                    <Dropdown
                        label={user.email}
                        options={options.map((opt) => ({
                            label: opt.label,
                            value: opt.value,
                            onSelect: opt.action,
                        }))}
                        onSelect={(option) => option.onSelect?.()}
                    />
                </>
            )
        } else {
            return (
                <>
                    <Link
                        to="/login"
                        className={isMobile ? "block hover:text-primary font-medium space-y-3" : "border-b-2 font-medium border-transparent hover:border-primary py-1 transition"}
                    >
                        Sign In
                    </Link>
                </>
            )
        }
    }

    return (
        <header className={`absolute top-0 left-0 right-0 py-3 z-50 ${isOpen ? "bg-[#1a191f] border-b border-gray-500" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                <div className="flex items-center gap-8">
                    <h1 className="text-2xl font-bold">
                        Watch<span className="text-primary">Wise</span>
                    </h1>
                    <nav className="hidden md:flex gap-6 font-medium">
                        <Link to="/" className="border-b-2 border-transparent hover:border-primary py-1 transition">
                            Home
                        </Link>
                        <Link to="/movies" className="border-b-2 border-transparent hover:border-primary py-1 transition">
                            Movies
                        </Link>
                        <Link to="/tv-shows" className="border-b-2 border-transparent hover:border-primary py-1 transition">
                            TV Shows
                        </Link>
                        <Link to="/watchlist" className="border-b-2 border-transparent hover:border-primary py-1 transition">
                            Watch List
                        </Link>
                    </nav>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    {getAuthButtons(false)}
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden cursor-pointer">
                    <MenuIcon className="w-7 h-7" />
                </button>
            </div>

            <div className={`${isOpen ? "block" : "hidden"} md:hidden px-6 p-4 font-medium space-y-3`}>
                <div className="flex flex-col gap-3">
                    <Link to="/" className="block hover:text-primary">Home</Link>
                    <Link to="/movies" className="block hover:text-primary">Movies</Link>
                    <Link to="/tv-shows" className="block hover:text-primary">TV Shows</Link>
                    <Link to="/watchlist" className="block hover:text-primary">Watch List</Link>
                    <div>{getAuthButtons(true)}</div>
                </div>
            </div>
        </header>
    )
}

export default Navbar