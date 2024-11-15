import circles from '@/assets/images/circles.svg'
import gradeCircles from '@/assets/images/grade-cricles.svg'
import Image from 'next/image'

export default function HomeContactMe() {
  return (
    <section
      id="homeContactMe"
      className="flex justify-center items-center min-h-screen pb-10 w-full bg-[#F2F4F7] relative"
    >
      <Image
        className="hidden md:block absolute bottom-20 right-20 w-80"
        width={213}
        height={196}
        src={gradeCircles.src}
        alt="Circles"
      />

      <Image
        className="absolute top-20 left-10 mb-10 w-60 md:top-36 md:left-48 "
        width={130}
        height={20}
        src={circles.src}
        alt="Circles"
      />

      <div className="flex flex-col w-full container-size z-20">
        <h5 className="text-primary font-extrabold text-center text-7xl mb-5">
          Send me a message
        </h5>

        <p className="text-primary text-center text-2xl font-thin mb-10">
          Got a question or proposal, or just want to say hello? Go ahead. I’m
          always open <br />
          to discussing product design work or partnership opportunities.
        </p>

        <a
          href="mailto:higordasilvalins@gmail.com?subject=Olá Higor, vamos conversar sobre uma proposta!&body=Escreva sua mensagem aqui"
          className="m-auto py-2 px-32 border-2 font-bold border-primary text-primary rounded-2xl text-xl"
        >
          Shoot
        </a>
      </div>
    </section>
  )
}
