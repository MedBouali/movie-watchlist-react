import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { logout } from "@/services/firebase/auth"

export default function AvatarMenu({ email }) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)
    const navigate = useNavigate()

    const handleToggle = () => setIsOpen(!isOpen)
    const handleClose = () => setIsOpen(false)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                handleClose()
            }
        }
        
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const initial = email?.[0].toUpperCase() || "U"

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button
                onClick={handleToggle}
                className="w-8 h-8 rounded-lg ring-2 ring-primary bg-primary/5 flex items-center justify-center text-white text-[16px] hover:opacity-90 transition"
            >
                {initial}
            </button>

            {isOpen && (
                <div className="absolute right-0 py-2 mt-2 w-48 bg-[#222028] border border-[#222028] rounded-lg shadow-lg z-50">
                    <div className="flex flex-col items-center gap-3 mx-3 py-4 mb-2 text-sm text-gray-300 border-b border-gray-500">
                        <span
                            className="w-9 h-9 rounded-lg ring-2 ring-primary bg-primary/5 flex items-center justify-center text-white text-[16px]"
                        >
                            {initial}
                        </span>
                        {email}
                    </div>
                    <button
                        onClick={() => {
                            navigate("/watchlist")
                            handleClose()
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:text-primary transition"
                    >
                        My Watchlist
                    </button>
                    <button
                        onClick={() => {
                            logout()
                            handleClose()
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:text-primary transition"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    )
}