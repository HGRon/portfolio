import CardProject from '@/app/[lng]/home/components/card-project'

interface Project {
  id: number
  description: string
  tags: string[]
  image: string
}

export default async function HomeProjects() {
  const projects: Project[] = await fetchProjects()

  return (
    <section
      id="homeProjects"
      className="flex justify-center items-center min-h-screen"
    >
      <div className="container-size">
        <div className="flex flex-col md:flex-row gap-2 items-start justify-between w-full">
          <h4 className="mb-5 w-full text-center md:text-start text-primary text-5xl font-bold">
            <span className="hidden md:inline">Lets have a look at</span>
            <br />
            <span className="hidden md:inline">my</span>
            <span className="inline md:hidden">My</span>
            <span className="text-secondary"> Projects</span>
          </h4>

          {/* <button className="m-auto md:m-0 whitespace-nowrap w-max py-2 px-10 bg-secondary text-white font-bold rounded-2xl text-xl">
            See all
          </button> */}
        </div>

        <div className="flex gap-8 w-full max-w-full p-8 overflow-x-scroll md:justify-center md:items-center md:overflow-x-hidden md:flex-wrap md:p-4">
          {projects.map((project) => (
            <CardProject
              key={project.id}
              src={project.image}
              tags={project.tags}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${process.env.BASE_URL}/en/api/portfolio/main`)

  if (!res.ok) throw new Error('Failed to fetch projects')

  return res.json()
}
