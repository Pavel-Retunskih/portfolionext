export type Project = {
  title: string
  description: string
  technologies: string[]
  category: string
}

export const projects: Project[] = [
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