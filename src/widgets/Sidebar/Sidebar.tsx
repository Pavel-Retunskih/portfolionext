'use client'

import {SideIconsNav} from "@/widgets/Sidebar/sideIconsNav/SideIconsNav";
import {memo, useCallback, useState} from "react";
import {Description} from "@/widgets/Sidebar/Description/Description";


export type InfoNames = 'professional-info' | 'personal-info' | 'hobbies-info'


export const Sidebar = memo(() => {
  console.log('Sidebar render')
  const [value, setValue] = useState<InfoNames>('personal-info')
  const handleValueChange = useCallback((newValue: InfoNames) => {
    setValue(newValue);
  }, []);

  return <aside className={'w-[301px] border-r-2 border-r-lines flex'}>
    <SideIconsNav onChangeAction={handleValueChange} value={value}/>
    <div>
      <span>{value}</span>
      <Description value={value}/>
    </div>

  </aside>
})
Sidebar.displayName = 'Sidebar'