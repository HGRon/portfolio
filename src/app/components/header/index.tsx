'use client'

import React, { useEffect, useState } from 'react'
import Icon from '../icon'
import Logo from '@/app/components/logo'
import Link from 'next/link';

export enum Menu {
  HomeCover = 'homeCover',
  HomeAboutMe = 'homeAboutMe',
  HomeProjects = 'homeProjects',
  HomeContactMe = 'homeContactMe',
}

export function MenuIcon({
  icon,
  selected,
  anchor,
}: {
  icon: string
  selected: boolean
  anchor?: string
}) {
  return (
    <Link
      href={`#${anchor}`}
      className={`flex items-center justify-center h-10 w-10 rounded-full cursor-pointer ${selected ? 'bg-secondary' : ''}`}
    >
      <Icon className="text-white" icon={icon} />
    </Link>
  )
}

export default function Header() {
  const [activatedMenu, setActivatedMenu] = useState(Menu.HomeCover)

  useEffect(() => {
    const scroller = document.getElementById('homeScroller')

    if (scroller) {
      scroller.addEventListener('scroll', () => {
        const homeCover = document.getElementById('homeCover')
        const homeAboutMe = document.getElementById('homeAboutMe')
        const homeProjects = document.getElementById('homeProjects')
        const homeContactMe = document.getElementById('homeContactMe')

        if (scroller.scrollTop > homeCover!.offsetTop - 100)
          setActivatedMenu(Menu.HomeCover)

        if (scroller.scrollTop > homeAboutMe!.offsetTop - 100)
          setActivatedMenu(Menu.HomeAboutMe)

        if (scroller.scrollTop > homeProjects!.offsetTop - 100)
          setActivatedMenu(Menu.HomeProjects)

        if (scroller.scrollTop > homeContactMe!.offsetTop - 100)
          setActivatedMenu(Menu.HomeContactMe)
      })
    }
  }, [])

  return (
    <header className="flex bg-white/40 backdrop-blur-[1px] justify-center items-center md:w-without-scrollbar w-full fixed top-0 left-0 z-50">
      <div className="flex w-full justify-between items-center container-size">
        <Logo/>

        <div className="flex items-center gap-2">
          <Link
            href="/cv_higor_lins.pdf"
            target="_blank"
            className="flex gap-2 items-center h-fit justify-center px-4 py-2 bg-[#171717] rounded-full cursor-pointer">
            <p className="text-base font-light text-white">CV</p>
            <Icon className="text-white" icon="download"/>
          </Link>

          <div className="hidden md:flex p-2 gap-2 bg-[#171717] rounded-full">
            <MenuIcon icon="home" anchor={Menu.HomeCover} selected={activatedMenu === Menu.HomeCover}/>
            <MenuIcon icon="face" anchor={Menu.HomeAboutMe} selected={activatedMenu === Menu.HomeAboutMe}/>
            <MenuIcon icon="backup_table" anchor={Menu.HomeProjects} selected={activatedMenu === Menu.HomeProjects}/>
            <MenuIcon icon="mail" anchor={Menu.HomeContactMe} selected={activatedMenu === Menu.HomeContactMe}/>
          </div>
        </div>
      </div>
    </header>
  )
}
