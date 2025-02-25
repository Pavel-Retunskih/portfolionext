'use client'

import {InfoNames} from "@/widgets/Sidebar/Sidebar";
import {PersonalInfo} from "@/widgets/Sidebar/Description/PersonalInfo/PersonalInfo";
import {ProfessionalInfo} from "@/widgets/Sidebar/Description/ProfessionalInfo/ProfessionalInfo";
import {HobbyInfo} from "@/widgets/Sidebar/Description/HobbyInfo/HobbyInfo";
import {memo, useMemo} from "react";

export const Description = memo(({value}: {
  value: InfoNames
}) => {
  console.log('Description render')
  const isPersonalInfo = useMemo(() => value === 'personal-info', [value]);
  const isProfessionalInfo = useMemo(() => value === 'professional-info', [value]);
  const isHobbyInfo = useMemo(() => value === 'hobbies-info', [value]);


  if (isPersonalInfo) {
    return <PersonalInfo/>
  }
  if (isProfessionalInfo) {
    return <ProfessionalInfo/>
  }
  if (isHobbyInfo) {
    return <HobbyInfo/>
  }
})
Description.displayName = 'Description'