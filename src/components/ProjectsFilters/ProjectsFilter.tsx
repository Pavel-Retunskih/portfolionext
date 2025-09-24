'use client'

import {useRouter, useSearchParams} from 'next/navigation'
import {useCallback, useTransition} from 'react'
import {AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger} from "@/components/Accordion/Accordion";
import ArrowIcon from "@/assets/svg/ArrowIcon";
import {clsx} from "clsx";

interface Props {
  allTechnologies: string[]
  selectedTechnologies: string[]
}

export function ProjectsFilters({allTechnologies, selectedTechnologies}: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const updateFilters = useCallback((
      type: 'tech',
      value: string,
      checked: boolean
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
        <div>
          <div className="space-y-2">
            <AccordionRoot type={'single'} collapsible>
              <AccordionItem value={'technologies'}>
                <AccordionTrigger icon={
                  <ArrowIcon
                      className={"transition-transform mr-3 duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)]" +
                          " group-data-[state=open]:rotate-90 "}/>
                }
                                  className={clsx(
                                      "flex gap-2 items-center group"
                                  )}>
                  <h3>Технологии</h3>
                </AccordionTrigger>
                <AccordionContent>
                  {allTechnologies.map(tech => {
                    const isSelected = selectedTechnologies.includes(tech)
                    return (
                        <label key={tech} className="flex items-center cursor-pointer">
                          <div className="relative">
                            <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={(e) => updateFilters('tech', tech, e.target.checked)}
                                disabled={isPending}
                                className="mr-2 accent-secondary-purple disabled:opacity-50"
                            />
                            {isPending && isSelected && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div
                                      className="w-3 h-3 border border-secondary-purple border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}
                          </div>
                          <span className={`text-sm ${isPending ? 'text-secondary-grey' : ''}`}>
                  {tech}
                </span>
                        </label>
                    )
                  })}
                </AccordionContent>
              </AccordionItem>

            </AccordionRoot>

          </div>
        </div>
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