import React from 'react'

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className={`no-underline inline-flex items-center justify-center text-center
        border-radius focus:outline-none focus:ring w-max
        cursor-pointer bg-secondary hover:bg-secondary/95
        focus:ring-white/50
        border-0 text-white
        h-12 p-3
        rounded-full`}
    >
      {children}
    </button>
  )
}
