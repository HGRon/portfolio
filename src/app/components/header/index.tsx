'use client'

import React, { useEffect, useState } from 'react'
import Icon from '../icon'
import Logo from '@/app/components/logo'
import Link from 'next/link'
import { Menu } from '@/app/types/menu.enum'

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
  const [activatedMenu, setActivatedMenu] = useState(Menu.HOME_COVER)

  useEffect(() => {
    const scroller = document.getElementById('homeScroller')

    if (scroller) {
      scroller.addEventListener('scroll', () => {
        const homeCover = document.getElementById('homeCover')
        const homeAboutMe = document.getElementById('homeAboutMe')
        const homeProjects = document.getElementById('homeProjects')
        const homeContactMe = document.getElementById('homeContactMe')

        if (scroller.scrollTop > homeCover!.offsetTop - 100)
          setActivatedMenu(Menu.HOME_COVER)

        if (scroller.scrollTop > homeAboutMe!.offsetTop - 100)
          setActivatedMenu(Menu.HOME_ABOUT_ME)

        if (scroller.scrollTop > homeProjects!.offsetTop - 100)
          setActivatedMenu(Menu.HOME_PROJECTS)

        if (scroller.scrollTop > homeContactMe!.offsetTop - 100)
          setActivatedMenu(Menu.HOME_CONTACT_ME)
      })
    }
  }, [])

  return (
    <header className="flex bg-white/40 backdrop-blur-[1px] justify-center items-center md:w-without-scrollbar w-full fixed top-0 left-0 z-50">
      <div className="flex w-full justify-between items-center container-size">
        <Logo />

        <div className="flex items-center gap-2">
          <Link
            href="/cv_higor_lins.pdf"
            target="_blank"
            className="flex gap-2 items-center h-fit justify-center px-4 py-2 bg-[#171717] rounded-full cursor-pointer"
          >
            <p className="text-base font-light text-white">CV</p>
            <Icon className="text-white" icon="download" />
          </Link>

          <div className="hidden md:flex p-2 gap-2 bg-[#171717] rounded-full">
            <MenuIcon
              icon="home"
              anchor="homeCover"
              selected={activatedMenu === Menu.HOME_COVER}
            />
            <MenuIcon
              icon="face"
              anchor="homeAboutMe"
              selected={activatedMenu === Menu.HOME_ABOUT_ME}
            />
            <MenuIcon
              icon="backup_table"
              anchor="homeProjects"
              selected={activatedMenu === Menu.HOME_PROJECTS}
            />
            <MenuIcon
              icon="mail"
              anchor="homeContactMe"
              selected={activatedMenu === Menu.HOME_CONTACT_ME}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
