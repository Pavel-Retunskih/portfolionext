'use client'

import {useRouter, useSearchParams} from 'next/navigation'
import {ReactNode, useCallback, useTransition} from 'react'
import {AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger} from "@/components/Accordion/Accordion";
import ArrowIcon from "@/assets/svg/ArrowIcon";
import {clsx} from "clsx";
import {Checkbox} from "@/components/Checkbox/Checkbox";
import ReactIcon from "@/assets/svg/ReactIcon";
import NextIcon from "@/assets/svg/NextIcon";
import TypescriptIcon from "@/assets/svg/TypescriptIcon";
import TailwindIcon from "@/assets/svg/TailwindIcon";
import NodeIcon from "@/assets/svg/NodeIcon";
import VueIcon from "@/assets/svg/VueIcon";
import ViteIcon from "@/assets/svg/ViteIcon";
import GraphqlIcon from "@/assets/svg/GraphqlIcon";
import NestJsIcon from "@/assets/svg/NestJsIcon";
import ReduxIcon from "@/assets/svg/ReduxIcon";
import PostgresqlIcon from "@/assets/svg/PostgresqlIcon";
import MongooseIcon from "@/assets/svg/MongooseIcon";
import MongoDBIcon from "@/assets/svg/MongoDBIcon";

interface Props {
  allTechnologies: string[]
  selectedTechnologies: string[]
}

export function ProjectsFilters({allTechnologies, selectedTechnologies}: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const techIcons: Record<string, ReactNode> = {
    react: <ReactIcon/>,
    'next.js': <NextIcon/>,
    typescript: <TypescriptIcon/>,
    tailwind: <TailwindIcon/>,
    'node.js': <NodeIcon/>,
    vue: <VueIcon/>,
    vite: <ViteIcon/>,
    graphql: <GraphqlIcon/>,
    'nest.js': <NestJsIcon/>,
    redux: <ReduxIcon/>,
    postgresql: <PostgresqlIcon/>,
    mongodb: <MongoDBIcon/>,
    mongoose: <MongooseIcon/>
  }
  const updateFilters = useCallback((
      type: 'tech',
      value: string,
      checked: boolean | string
  ) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString())

      if (checked) {
        params.append(type, value)
      } else {
        const values = params.getAll(type).filter(v => v !== value)
        params.delete(type)
        values.forEach(v => params.append(type, v))
      }

      router.push(`/projects?${params.toString()}`)
    })
  }, [router, searchParams])
  return (
      <aside className={`w-64 space-y-6 transition-opacity ${isPending ? 'opacity-50' : 'opacity-100'} w-[300px]`}>
        <AccordionRoot type={'single'} collapsible defaultValue={'technologies'}>
          <AccordionItem value={'technologies'}>
            <AccordionTrigger icon={
              <ArrowIcon
                  className={"transition-transform mr-3 duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)]" +
                      " group-data-[state=open]:rotate-90"}/>
            }
                              className={clsx(
                                  "ml-1 flex gap-1 items-center group mb-6"
                              )}>
              <h3>Технологии</h3>
            </AccordionTrigger>
            <AccordionContent>
              {allTechnologies.map(tech => {

                return <div key={tech} className={'mb-4'}>
                  <Checkbox isSelected={selectedTechnologies.includes(tech)}
                            isPending={isPending}
                            onChange={(checked) => updateFilters('tech', tech, checked)}
                            name={tech}
                            icon={techIcons[tech.toLowerCase()]}
                  />
                </div>
              })}
            </AccordionContent>
          </AccordionItem>

        </AccordionRoot>
        {/* Глобальный индикатор загрузки */}
        {isPending && (
            <div
                className="fixed top-4 right-4 bg-primary-blue border border-lines rounded-lg px-4 py-2 flex items-center gap-2">
              <div
                  className="w-4 h-4 border-2 border-secondary-purple border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm">Применяем фильтры...</span>
            </div>
        )}
      </aside>
  )
}