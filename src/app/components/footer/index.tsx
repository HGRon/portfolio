import Image from 'next/image'

import awsIcon from '@/assets/icons/aws-icon.png'
import tailwindIcon from '@/assets/icons/tailwind-icon.png'
import nextJsIcon from '@/assets/icons/nextjs-icon.png'

export default function Footer() {
  return (
    <footer className="w-full bg-[#171717] flex justify-center">
      <div className="container-size !py-10">
        <span className="text-gray-300 font-bold text-4xl mb-10">Say Hello</span>

        <div className="flex flex-col md:flex-row gap-8 md:gap-40 py-12">
          <ul>
            <li className="mb-8">
              <a
                className="text-2xl text-gray-100"
                href="mailto:higordasilvalins@gmail.com?subject=Olá Higor, vamos conversar sobre uma proposta!&body=Escreva sua mensagem aqui"
              >
                higordasilvalins
              </a>
            </li>

            <li>
              <a
                className="text-2xl text-gray-100"
                target="_blank"
                href="https://www.linkedin.com/in/higor-lins/"
              >
                linkedin.com
              </a>
            </li>
          </ul>

          <ul>
            <li className="mb-8">
              <a className="text-2xl text-gray-100" href="home#homeCover">
                Home
              </a>
            </li>

            <li>
              <a
                href="/cv_higor_lins.pdf"
                target="_blank"
                className="text-2xl text-gray-100"
              >
                My resume
              </a>
            </li>
          </ul>
        </div>

        <hr />

        <div className="flex gap-8 items-center w-full py-8">
          <p className="text-xl text-start flex-1 text-white">
            © 2024 Higor Lins
          </p>

          <div className="flex gap-4">
            <a target="_blank" href="https://nextjs.org/">
              <Image
                className="w-8 object-contain"
                width={512}
                height={512}
                src={nextJsIcon.src}
                alt=""
              />
            </a>

            <a className="flex" target="_blank" href="https://tailwindcss.com/">
              <Image
                className="w-8 m-auto object-contain"
                width={2560}
                height={1565}
                src={tailwindIcon.src}
                alt=""
              />
            </a>

            <a target="_blank" href="https://aws.amazon.com/lambda/?nc1=h_ls">
              <Image
                className="w-8 object-contain"
                width={800}
                height={800}
                src={awsIcon.src}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
