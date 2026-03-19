import { useState, useRef, useEffect } from "react"
import { DropdownIcon } from "./icons"

function Dropdown({ label, options, selected, onSelect }) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group inline-flex justify-between items-center w-40 bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            >
                {selected ? selected.label : label}
                <DropdownIcon className="w-4 h-4 ml-2 text-gray-500 group-focus:text-red-700 transition" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => {
                                onSelect(option)
                                setIsOpen(false)
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown