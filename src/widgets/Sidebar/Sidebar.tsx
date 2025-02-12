'use client'

import {SideIconsNav} from "@/widgets/Sidebar/sideIconsNav/SideIconsNav";
import {useState} from "react";
import {usePathname} from "next/navigation";
import {Description} from "@/widgets/Sidebar/Description/Description";

export type InfoNames = 'professional-info' | 'personal-info' | 'hobbies-info'


export function Sidebar() {
  const path = usePathname()
  const isAboutMe = path === '/about_me'

  const [value, setValue] = useState<InfoNames>('professional-info')
  console.log(value)
  return <aside className={'w-[301px] border-r-2 border-r-lines flex'}>
    {isAboutMe && <SideIconsNav onChangeAction={setValue} value={value}/>}
    <div>
      <span>{value}</span>
      <Description value={value}/>
    </div>

  </aside>
}