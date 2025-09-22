import {ProjectsFilters} from "@/components/ProjectsFilters/ProjectsFilter";
import {ProjectsContent} from "@/components/ProjectsContent/ProjectsContent";


interface Project {
  title: string
  description: string
  technologies: string[]
  category: string
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'Персональное портфолио с игрой Snake',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    category: 'Web'
  },
  {
    title: 'E-commerce App',
    description: 'Интернет-магазин с корзиной',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'Web'
  },
  {
    title: 'Mobile Game',
    description: 'Мобильная игра на React Native',
    technologies: ['React Native', 'TypeScript'],
    category: 'Mobile'
  }
]

interface PageProps {
  searchParams: Promise<{
    tech?: string | string[]
    category?: string | string[]
  }>
}

export default async function Projects({searchParams}: PageProps) {
  const params = await searchParams

  // Нормализуем параметры в массивы
  const selectedTechnologies = Array.isArray(params.tech)
      ? params.tech
      : params.tech ? [params.tech] : []

  // Фильтрация на сервере
  const filteredProjects = projects.filter(project => {
    return selectedTechnologies.length === 0 ||
        selectedTechnologies.some(tech => project.technologies.includes(tech))

  })

  // Получаем уникальные значения
  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))]


  return (
      <div className="flex gap-6 p-6 w-full">
        <ProjectsFilters
            allTechnologies={allTechnologies}
            selectedTechnologies={selectedTechnologies}
        />

        <ProjectsContent
            projects={filteredProjects}
        />
      </div>
  )
}