import Image from 'next/image'
import detailImage from '@/assets/icons/conver.png'

export default function HelloPill() {
  return (
    <div className="relative mb-8">
      <Image
        className="absolute -top-full -right-6"
        width={33}
        height={33}
        src={detailImage.src}
        alt="detail"
      />

      <span className="border-2 mb-5 rounded-full border-primary py-1 px-4 text-primary">
        Hello, World!
      </span>
    </div>
  )
}
