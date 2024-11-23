import { Project } from 'next/dist/build/swc'
import CardProject from '@/app/[lng]/home/components/card-project'

export default async function Projects() {
  // const { t } = await translation(lng, 'translation')
  const projects: Project[] = await fetchProjects()

  return (
    <section className="flex justify-center items-center min-h-screen pt-20">
      <div className="container-size">
        <h4 className="mb-5 w-full text-center md:text-start text-primary text-5xl font-bold">
          <span className="hidden md:inline">This is my</span>
          <br />
          <span className="text-secondary"> history</span>
        </h4>

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
  const res = await fetch(`${process.env.BASE_URL}/en/api/portfolio`)

  if (!res.ok) throw new Error('Failed to fetch projects')

  return res.json()
}
