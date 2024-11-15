import Scroller from '@/app/components/scroller'
import HomeAboutMe from '@/app/[lng]/home/components/home-about-me'

export default function AboutMe() {
  return (
    <div className="relative overflow-hidden w-screen h-screen mx-auto">
      <Scroller>
        <HomeAboutMe />
      </Scroller>
    </div>
  )
}
