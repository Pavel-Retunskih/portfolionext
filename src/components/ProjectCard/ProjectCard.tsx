import {Project} from "@/components/ProjectsContent/ProjectsContent";
import Image from "next/image";
import ProjectImage from '@/assets/images/defaultProjectImg.jpg'
import Link from "next/link";

type  Props = {
  project: Project
  index: number
  repositoryUrl?: string
}

export function ProjectCard({project, index, repositoryUrl}: Props) {
  const {title, description, technologies} = project;

  return (
      <div
          className={'max-w-[370px] h-full flex flex-col mt-3 group cursor-pointer transition-all duration-300 hover:scale-105'}>
        <div className={'flex gap-3 mb-2'}>
          <span className={'text-secondary-purple '}>Project {index}</span>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <span className={'text-secondary-grey'}>//_{title.replace(' ', '_').toLowerCase()}</span>
        </div>
        <div className="w-full h-[145px] overflow-hidden rounded-t-xl relative">
          <Image
              src={ProjectImage}
              alt={'Project image'}
              width={370}
              height={145}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
          />
          {/* Overlay с затемнением и кнопкой */}
          <div
              className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
            <Link
                href={repositoryUrl ?? ' '} //TODO: Add actual link to repository
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 bg-primary-dark_blue hover:bg-primary-black text-secondary-grey px-4 py-2 rounded-lg font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
            >
              View on GitHub
            </Link>
          </div>
        </div>
        <div
            className={'bg-primary-dark_blue p-4 flex-1 flex flex-col rounded-b-xl group-hover:bg-opacity-90 transition-colors duration-300'}>
          <p className="text-secondary-grey mb-3 break-words flex-1">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map(tech => (
                <span
                    key={tech}
                    className="px-2 py-1 bg-primary-dark_blue text-accent-orange text-xs rounded border border-lines"
                >
              {tech}
            </span>
            ))}
          </div>
        </div>
      </div>
  )
}