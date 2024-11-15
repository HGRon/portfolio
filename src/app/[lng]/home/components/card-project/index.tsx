'use client'

import Image from 'next/image'
import { useRef } from 'react'
import Icon from '@/app/components/icon'

type CardProjectProps = {
  src: string
  tags: string[]
  description: string
}

export function MainCard({ src }: CardProjectProps) {
  const card = useRef<HTMLDivElement | null>(null)

  return (
    <div
      ref={card}
      className="relative hover:scale-105 duration-300 cursor-pointer"
    >
      <Image
        className="container w-full select-none opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
        src={src}
        width={416}
        height={432.5}
        quality={100}
        alt="terrex"
      />

      <div className="flex justify-center items-center absolute bottom-0 right-0 w-[4.6rem] aspect-square bg-primary rounded-full">
        <Icon className="text-white text-4xl" icon="arrow_outward" />
      </div>
    </div>
  )
}

export default function CardProject({
  src,
  tags,
  description,
}: CardProjectProps) {
  return (
    <div className="max-w-[18rem] min-w-[18rem] w-[18rem]">
      <MainCard src={src} description="" tags={[]} />

      <div className="flex flex-wrap gap-2 py-6">
        {tags?.map((tag, index) => (
          <div key={index + tag} className="rounded-2xl bg-gray-100 px-6 py-1">
            <p className="text-neutral-950 font-thin text-base">{tag}</p>
          </div>
        ))}
      </div>

      <p className="text-primary font-bold text-xl">{description}</p>
    </div>
  )
}
