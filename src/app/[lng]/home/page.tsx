import HomeCover from '@/app/[lng]/home/components/home-cover'
import HomeAboutMe from '@/app/[lng]/home/components/home-about-me'
import HomeProjects from '@/app/[lng]/home/components/home-projects'
import HomeContactMe from '@/app/[lng]/home/components/home-contact-me'

export default function Home() {
  return (
    <>
      <HomeCover />
      <HomeAboutMe />
      <HomeProjects />
      <HomeContactMe />
    </>
  )
}
