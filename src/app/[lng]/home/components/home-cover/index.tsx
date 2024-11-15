import Phrase from '@/app/[lng]/home/components/phrase'
import Experience from '@/app/[lng]/home/components/experience'
import Presentation from '@/app/[lng]/home/components/presentation'
import Bubble from '@/app/[lng]/home/components/bubble'

export default function HomeCover() {
  return (
    <section
      id="homeCover"
      className="flex flex-col items-center w-full min-h-screen relative"
    >
      <Presentation />

      <div className="flex justify-center w-full mt-10 md:mt-0 md:absolute top-1/2">
        <div className="flex justify-center md:justify-between w-full container-size">
          <Phrase />
          <Experience />
        </div>
      </div>

      <Bubble />
    </section>
  )
}
