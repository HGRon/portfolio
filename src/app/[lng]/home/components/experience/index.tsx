import Image from 'next/image'
import starsImage from '@/assets/icons/stars.png'
import React from 'react'

export default function Experience() {
  return (
    <div className="flex flex-col items-center z-50 md:z-0 md:items-end text-primary w-[20rem] animation-to-left">
      <Image
        className="mb-4"
        width={160}
        height={32}
        src={starsImage.src}
        alt="stars"
      />

      <p className="text-primary text-5xl font-bold">4 Years</p>
      <p className="text-primary text-base">Experience</p>
    </div>
  )
}
