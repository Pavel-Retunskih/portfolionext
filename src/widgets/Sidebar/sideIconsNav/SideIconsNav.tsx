'use client'
import {ToggleGroup} from "radix-ui";
import ProfSkillsIcon from "@/assets/svg/ProfSkillsIcon";
import PersonSkillsIcon from "@/assets/svg/PersonSkillsIcon";
import HobbiesIcon from "@/assets/svg/HobbiesIcon";
import {InfoNames} from "@/widgets/Sidebar/Sidebar";
import {memo, useMemo} from "react";

export const SideIconsNav = memo(({onChangeAction, value}: {
  onChangeAction: (value: InfoNames) => void,
  value: InfoNames
}) => {

  const getToggleItemClass = useMemo(() => {
    return (itemValue: InfoNames) =>
        `${value === itemValue ? 'opacity-100' : 'opacity-40'}`;
  }, [value]);

  const toggleGroupItemClasses =
      "flex justify-around md:gap-9 items-center justify-center flex-row  md:flex-col "
  return (<div className={'w-full md:w-12 md:border-r-2 border-r-lines pt-4'}>
    <ToggleGroup.Root type='single' defaultValue={value}
                      onValueChange={(prev: InfoNames) => prev && onChangeAction(prev)
                      }
                      className={toggleGroupItemClasses}>
      <ToggleGroup.Item className={getToggleItemClass('professionalInfo')}
                        value={'professionalInfo'}>
        <ProfSkillsIcon className={'hover:text-secondary-aqua'}/>
      </ToggleGroup.Item>

      <ToggleGroup.Item className={getToggleItemClass('personalInfo')}
                        value={'personalInfo'}>
        <PersonSkillsIcon className={'hover:text-secondary-aqua'}/>
      </ToggleGroup.Item>

      <ToggleGroup.Item className={getToggleItemClass('hobbiesInfo')}
                        value={'hobbiesInfo'}>
        <HobbiesIcon className={'hover:text-secondary-aqua '}/>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  </div>)
})
SideIconsNav.displayName = 'SideIconsNav'