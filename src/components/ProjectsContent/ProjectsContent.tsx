import {ProjectCard} from "@/components/ProjectCard/ProjectCard";

export type Project = {
  title: string
  description: string
  technologies: string[]
  category: string
}

type Props = {
  projects: Project[]
}

export function ProjectsContent({projects}: Props) {
  return (
      <main className="flex-1">
        <div className="flex flex-wrap gap-12">
          {projects.map((project, index) => (
              <div key={project.title} className="flex-1  min-w-[300px]">
                <ProjectCard project={project} index={index + 1}/>
              </div>
          ))}
        </div>

        {projects.length === 0 && (
            <div className="text-center py-12 text-secondary-grey">
              <p>Проекты не найдены</p>
              <p className="text-sm mt-1">Попробуйте изменить фильтры</p>
            </div>
        )}
      </main>
  )
}