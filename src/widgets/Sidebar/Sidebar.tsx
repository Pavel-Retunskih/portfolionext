'use client'

import {SideIconsNav} from "@/widgets/Sidebar/sideIconsNav/SideIconsNav";
import {memo, useCallback, useState} from "react";
import {Description} from "@/widgets/Sidebar/Description/Description";
import {useCurrentPath} from "@/utils/PathnameProvider/PathnameProvider";


export type InfoNames = 'professionalInfo' | 'personalInfo' | 'hobbiesInfo'


export const Sidebar = memo(() => {

  const [value, setValue] = useState<InfoNames>('personalInfo')
  const handleValueChange = useCallback((newValue: InfoNames) => {
    setValue(newValue);
  }, []);
  const path = useCurrentPath()
  const isAboutMe = path.startsWith('/about_me')
  return <aside className={`${isAboutMe ? 'visible' : 'invisible'} w-[301px] border-r-2 border-r-lines flex`}>
    <SideIconsNav onChangeAction={handleValueChange} value={value}/>
    <div className={'pl-4  w-[251px]'}>
      <span className={'items-center justify-center text-secondary-white w-full flex'}>{value}</span>
      <Description value={value}/>
    </div>

  </aside>
})
Sidebar.displayName = 'Sidebar'