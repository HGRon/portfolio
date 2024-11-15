'use client'

import React, { useEffect, useRef } from 'react'
import { debounce } from 'next/dist/server/utils'

export default function Scroller({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    const handleWheel = debounce((e) => {
      e.preventDefault()
      const delta = e.deltaY * 0.8

      container.scrollTo({
        top: delta,
        behavior: 'auto',
      })
    }, 100)

    container.addEventListener('wheel', handleWheel)

    return () => container.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <div
      ref={containerRef}
      className="home-scroller h-full flex flex-col bg-white overflow-auto snap-y snap-mandatory scrollbar-none"
    >
      {React.Children.map(children, (child, index) => (
        <div key={index} className="snap-start flex-shrink-0 h-full">
          {child}
        </div>
      ))}
    </div>
  )
}
