'use client'

import {InfoNames} from "@/widgets/Sidebar/Sidebar";
import {PersonalInfo} from "@/widgets/Sidebar/Description/PersonalInfo/PersonalInfo";
import {ProfessionalInfo} from "@/widgets/Sidebar/Description/ProfessionalInfo/ProfessionalInfo";
import {HobbyInfo} from "@/widgets/Sidebar/Description/HobbyInfo/HobbyInfo";
import {useState} from "react";

export function Description({value}: {
  value: InfoNames
}) {
  const [itemValue, setItemValue] = useState<string>(value);
  const isPersonalInfo = value === 'personal-info';
  const isProffesionalInfo = value === 'professional-info';
  const isHobbyInfo = value === 'hobbies-info';

  if (isPersonalInfo) {
    return <PersonalInfo onItemChangeAction={setItemValue}/>
  }
  if (isProffesionalInfo) {
    return <ProfessionalInfo/>
  }
  if (isHobbyInfo) {
    return <HobbyInfo/>
  }
}
