interface Project {
  title: string
  description: string
  technologies: string[]
  category: string
}

interface Props {
  projects: Project[]
}

export function ProjectsContent({projects}: Props) {
  return (
      <main className="flex-1">
        <ul className="space-y-4">
          {projects.map((project) => (
              <li key={project.title} className="border border-lines p-4 rounded">
                <h3 className="font-semibold mb-2 text-secondary-white">
                  {project.title}
                </h3>
                <p className="text-secondary-grey mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                      <span
                          key={tech}
                          className="px-2 py-1 bg-primary-dark_blue text-secondary-purple text-xs rounded border border-lines"
                      >
                  {tech}
                </span>
                  ))}
                </div>
              </li>
          ))}
        </ul>

        {projects.length === 0 && (
            <div className="text-center py-12 text-secondary-grey">
              <p>Проекты не найдены</p>
              <p className="text-sm mt-1">Попробуйте изменить фильтры</p>
            </div>
        )}
      </main>
  )
}