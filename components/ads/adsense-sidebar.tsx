"use client"

import { useEffect, useRef, useState } from "react"

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export function AdSenseSidebar() {
  const adRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const adInitialized = useRef(false)
  const [isSticky, setIsSticky] = useState(true)

  useEffect(() => {
    // Only initialize once
    if (adInitialized.current) return

    // Check if adsbygoogle is loaded
    if (typeof window !== "undefined" && window.adsbygoogle) {
      try {
        // Push the ad only if the element exists
        if (adRef.current) {
          window.adsbygoogle.push({})
          adInitialized.current = true
          console.log("AdSense sidebar ad initialized")
        }
      } catch (error) {
        console.error("AdSense sidebar ad error:", error)
      }
    } else {
      console.log("AdSense not loaded yet, will retry")
      // Retry after a delay
      const timer = setTimeout(() => {
        if (typeof window !== "undefined" && window.adsbygoogle && adRef.current) {
          try {
            window.adsbygoogle.push({})
            adInitialized.current = true
            console.log("AdSense sidebar ad initialized on retry")
          } catch (error) {
            console.error("AdSense sidebar ad retry error:", error)
          }
        }
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const containerRect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if we're near the bottom of the sidebar container
      const distanceFromBottom = containerRect.bottom - windowHeight

      // If the ad would overlap with content below, make it absolute positioned
      if (distanceFromBottom < 100) {
        setIsSticky(false)
      } else {
        setIsSticky(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className={`${isSticky ? "sticky top-8" : "relative"} bg-[#1a1a1a] rounded-lg p-4 border border-[#333] mb-6 transition-all duration-300`}
    >
      <div className="text-xs text-gray-500 mb-2 text-center">Advertisement</div>
      <div ref={adRef}>
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            minHeight: "280px",
            width: "100%",
          }}
          data-ad-client="ca-pub-9986560445421982"
          data-ad-slot="6728476441"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  )
}
