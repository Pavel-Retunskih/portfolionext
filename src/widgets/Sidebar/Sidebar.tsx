'use client'

import {SideIconsNav} from "@/widgets/Sidebar/sideIconsNav/SideIconsNav";
import {memo, useCallback, useState} from "react";
import {Description} from "@/widgets/Sidebar/Description/Description";


export type InfoNames = 'professionalInfo' | 'personalInfo' | 'hobbiesInfo'


export const Sidebar = memo(() => {
  console.log('Sidebar render')
  const [value, setValue] = useState<InfoNames>('personalInfo')
  const handleValueChange = useCallback((newValue: InfoNames) => {
    setValue(newValue);
  }, []);

  return <aside className={'w-[301px] border-r-2 border-r-lines flex'}>
    <SideIconsNav onChangeAction={handleValueChange} value={value}/>
    <div className={'pl-4  w-[251px]'}>
      <span className={'items-center justify-center text-secondary-white w-full flex'}>{value}</span>
      <Description value={value}/>
    </div>

  </aside>
})
Sidebar.displayName = 'Sidebar'