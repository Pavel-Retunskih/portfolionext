import {ProjectsFilters} from "@/components/ProjectsFilters/ProjectsFilter";
import {ProjectsContent} from "@/components/ProjectsContent/ProjectsContent";
import {Project} from "@/app/api/projects/data/data";


interface PageProps {
  searchParams: Promise<{
    tech?: string | string[]
    category?: string | string[]
  }>
}

export default async function Projects({searchParams}: PageProps) {
  const projects: Project[] = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/projects`).then(async (data) => await data.json());

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
      <div className="flex flex-col md:flex-row gap-6 p-6 w-full flex-grow-1">
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