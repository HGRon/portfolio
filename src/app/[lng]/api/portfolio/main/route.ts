import { NextResponse } from 'next/server'

export async function GET() {
  const projects = [
    {
      id: 3,
      description: 'An education platform to Edebe.',
      tags: ['NestJs', 'Angular'],
      image: '/projects/edebe.png',
    },
    {
      id: 4,
      description: 'IQR is platform built to construct landpages.',
      tags: ['NestJs', 'Angular'],
      image: '/projects/iqr.png',
    },
    {
      id: 5,
      description: 'A platform to engage students to University.',
      tags: ['NestJs', 'React'],
      image: '/projects/mundo_facens.png',
    },
    {
      id: 7,
      description: 'An app to manage plots and plantations.',
      tags: ['NestJs', 'Ionic'],
      image: '/projects/terrex.png',
    },
  ]

  return NextResponse.json(projects)
}
