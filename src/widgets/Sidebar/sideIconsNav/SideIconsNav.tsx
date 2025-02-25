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
  console.log('SideIconsNav render')
  const getToggleItemClass = useMemo(() => {
    return (itemValue: InfoNames) =>
        `${value === itemValue ? 'opacity-100' : 'opacity-40'}`;
  }, [value]);

  const toggleGroupItemClasses =
      "flex gap-9 items-center justify-center flex-col"
  return (<div className={'w-12 border-r-2 border-r-lines'}>
    <ToggleGroup.Root type='single' defaultValue={value}
                      onValueChange={(prev: InfoNames) => prev && onChangeAction(prev)
                      }
                      className={toggleGroupItemClasses}>
      <ToggleGroup.Item className={getToggleItemClass('professional-info')}
                        value={'professional-info'}>
        <ProfSkillsIcon className={'hover:text-secondary-aqua'}/>
      </ToggleGroup.Item>
      <ToggleGroup.Item className={getToggleItemClass('personal-info')}
                        value={'personal-info'}>
        <PersonSkillsIcon className={'hover:text-secondary-aqua'}/>
      </ToggleGroup.Item>
      <ToggleGroup.Item className={getToggleItemClass('hobbies-info')}
                        value={'hobbies-info'}>
        <HobbiesIcon className={'hover:text-secondary-aqua '}/>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  </div>)
})
SideIconsNav.displayName = 'SideIconsNav'