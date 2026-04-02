import { DropdownIcon } from "@/components/icons"
import { useDropdown } from "@/components/ui"

function Dropdown({ label, options, selected, onSelect, variant = "secondary" }) {
    const { isOpen, toggle, close, dropdownRef } = useDropdown()

    const baseButtonClasses = "group inline-flex justify-between items-center rounded-lg px-4 py-2 text-sm font-medium shadow-sm focus:outline-none w-full"

    const variantClasses = {
        primary: "bg-transparent ring-2 ring-primary focus:bg-primary/5 transition",
        secondary: "bg-[#222028] border border-[#222028] hover:bg-[#222028]/90 focus:ring-2 focus:ring-primary transition"
    }

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button
                onClick={toggle}
                className={`${baseButtonClasses} ${variantClasses[variant]}`}
            >
                {selected ? selected.label : label}
                <DropdownIcon className="w-4 h-4 ml-2 text-gray-500 group-focus:text-primary transition" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 bg-[#222028] border border-[#222028] rounded-md shadow-lg z-50">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => {
                                onSelect(option)
                                close()
                            }}
                            className="block w-full text-left px-4 py-2 text-sm hover:text-primary transition"
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