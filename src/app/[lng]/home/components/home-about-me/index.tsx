'use client'

import Image from 'next/image'
import meImage from '@/assets/images/me.png'
import detailImage from '@/assets/images/detail.png'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function HomeAboutMe() {
  const element1 = useRef<HTMLDivElement | null>(null)
  const element2 = useRef<HTMLDivElement | null>(null)
  const element3 = useRef<HTMLDivElement | null>(null)

  const containerRef = useRef<HTMLDivElement | null>(null)

  const imageRef = useRef<HTMLImageElement | null>(null)
  const textRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const elements = [element1.current, element2.current, element3.current]

    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: '.home-scroller',
          start: '50% bottom',
        },
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        delay: 1,
      },
    )

    gsap.fromTo(
      imageRef.current,
      {
        x: 1000,
      },
      {
        scrollTrigger: {
          trigger: imageRef.current,
          scroller: '.home-scroller',
          start: 'top +500px',
        },
        x: 0,
      },
    )

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          y: 0,
        },
        {
          y: `${10 + index * 2}%`,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        },
      )

      gsap.fromTo(
        el,
        { x: -200, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            scroller: '.home-scroller',
            start: '50% bottom',
            end: '90% bottom',
            scrub: true,
          },
          x: 0,
          opacity: 1,
          ease: 'power3.out',
        },
      )
    })
  }, [])

  return (
    <section
      id="homeAboutMe"
      ref={containerRef}
      className="flex justify-center items-center min-h-screen w-full relative"
    >
      <div className="absolute h-full w-full">
        <div
          ref={element1}
          className="absolute z-20 right-96 bottom-24 w-[9vw] max-w-[15rem] aspect-square"
        >
          <Image
            className="w-full h-auto"
            src={detailImage.src}
            width={440}
            height={418}
            quality={80}
            alt=""
          />
        </div>

        <div
          ref={element2}
          className="absolute bottom-40 w-[18vw] max-w-[40rem] aspect-square"
        >
          <Image
            className="w-full h-auto rotate-45"
            src={detailImage.src}
            width={440}
            height={418}
            quality={80}
            alt=""
          />
        </div>

        <div
          ref={element3}
          className="absolute -top-24 left-96 w-[11vw] max-w-[26rem] aspect-square"
        >
          <Image
            className="w-full h-auto rotate-90"
            src={detailImage.src}
            width={440}
            height={418}
            quality={80}
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center flex-col-reverse md:flex-row w-full gap-2 container-size">
        <div className="flex flex-col flex-1 z-20">
          <h4 className="mb-5 text-center md:text-start text-primary text-5xl font-bold">
            About <span className="text-secondary"> Me</span>
          </h4>

          <p className="hidden md:inline mb-5 p-1 backdrop-blur-sm-[1px] rounded-xl bg-white/20 text-center md:text-start text-3xl font-thin leading-10 text-balance text-primary">
            Focused on progressing in my career, I developed effective
            communication skills and participated in projects that expanded my
            experience. I am proactive, embrace challenges, and seek continuous
            learning.
          </p>

          <a
            href="https://www.linkedin.com/in/higor-lins/"
            target="_blank"
            className="m-auto md:m-0 py-2 w-fit px-10 bg-secondary text-white font-bold rounded-2xl text-xl"
          >
            See more
          </a>
        </div>

        <Image
          ref={imageRef}
          className="max-w-[50rem] min-w-[20rem] w-[28vw] h-auto object-contain"
          src={meImage.src}
          width={2900}
          height={2820}
          quality={100}
          alt=""
        />
      </div>
    </section>
  )
}
