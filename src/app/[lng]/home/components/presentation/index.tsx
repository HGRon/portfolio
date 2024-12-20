import HelloPill from '@/app/[lng]/home/components/hello-pill'
import MyName from '@/app/[lng]/home/components/my-name'
import Profession from '@/app/[lng]/home/components/profession';

export default function Presentation() {
  return (
    <div className="flex items-center flex-col mt-36 animation-to-down">
      <HelloPill />
      <MyName />
      <Profession />
    </div>
  )
}
