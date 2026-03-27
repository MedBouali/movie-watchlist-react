import { useEffect, useRef } from "react"

export default function useAutoScrollCarousel(speed = 0.5) {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        let animationFrame

        const scroll = () => {
            container.scrollLeft += speed
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft -= container.scrollWidth / 2
            }
            animationFrame = requestAnimationFrame(scroll)
        }

        animationFrame = requestAnimationFrame(scroll)

        const pause = () => cancelAnimationFrame(animationFrame)
        const resume = () => {
            animationFrame = requestAnimationFrame(scroll)
        }

        container.addEventListener("mouseenter", pause)
        container.addEventListener("mouseleave", resume)

        return () => {
            cancelAnimationFrame(animationFrame)
            container.removeEventListener("mouseenter", pause)
            container.removeEventListener("mouseleave", resume)
        }
    }, [speed])

    return containerRef
}