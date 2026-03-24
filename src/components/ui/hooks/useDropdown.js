import { useState, useRef, useEffect } from "react"

export default function useDropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    function toggle() {
        setIsOpen((prev) => !prev)
    }

    function close() {
        setIsOpen(false)
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                close()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return {
        isOpen,
        toggle,
        close,
        dropdownRef,
    }
}
