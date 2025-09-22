'use client'

import {SideIconsNav} from "@/widgets/Sidebar/sideIconsNav/SideIconsNav";
import {memo, useCallback, useState} from "react";
import {Description} from "@/widgets/Sidebar/Description/Description";

export type InfoNames = 'professionalInfo' | 'personalInfo' | 'hobbiesInfo'


export const Sidebar = memo(() => {

  const [value, setValue] = useState<InfoNames>('personalInfo')
  const handleValueChange = useCallback((newValue: InfoNames) => {
    setValue(newValue);
  }, []);

  return <aside
      className='md:w-[301px] md:border-r-2 flex-col border-r-lines md:flex md:flex-row  '>
    <SideIconsNav onChangeAction={handleValueChange} value={value}/>
    <div className={'pl-4  w-[251px]'}>
      <span className={'hidden items-center justify-center text-secondary-white w-full md:flex'}>{value}</span>
      <Description value={value}/>
    </div>
  </aside>
})
Sidebar.displayName = 'Sidebar'