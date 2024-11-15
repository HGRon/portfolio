'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Bubble() {
  const bubble = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        bubble.current!,
        { scale: 10, zIndex: 100 },
        {
          scale: 1,
          zIndex: 20,
          ease: 'power1.inOut',
          duration: 0.9,
          delay: 0.2,
          onComplete: () => {
            gsap.fromTo(
              bubble.current!,
              { opacity: 1, y: 0 },
              {
                opacity: 0,
                y: -5000,
                scale: 10,
                ease: 'power1.inOut',
                scrollTrigger: {
                  trigger: bubble.current!,
                  scroller: '.home-scroller',
                  start: '+500 bottom',
                  scrub: true,
                },
              },
            )
          },
        },
      )
    },
    { dependencies: [bubble] },
  )

  return (
    <div
      ref={bubble}
      className="flex items-center -bottom-1/2 aspect-square max-h-[60rem] h-screen-95 justify-center absolute overflow-hidden"
    >
      <div className="absolute aspect-square h-[100%] rounded-full bg-secondary-light/20"></div>
      <div className="absolute aspect-square h-[90%] rounded-full bg-secondary-light/30"></div>
      <div className="absolute aspect-square h-[80%] rounded-full bg-secondary-light/40"></div>
      <div className="absolute aspect-square h-[70%] rounded-full bg-secondary-light/50"></div>
      <div className="absolute aspect-square h-[60%] rounded-full bg-secondary-light"></div>
    </div>
  )
}
