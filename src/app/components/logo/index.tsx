import React from 'react'

export default function Logo() {
  return (
    <a href="home#homeCover" className="flex items-center gap-2 py-2">
      <div className="flex h-10 w-10 rounded-full bg-secondary">
        <h4 className="font-extrabold text-white m-auto">HL</h4>
      </div>

      <p className="text-primary font-extrabold">HLINS</p>
    </a>
  )
}
