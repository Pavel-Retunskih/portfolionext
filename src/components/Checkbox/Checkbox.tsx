import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as LabelPrimitive from "@radix-ui/react-label";
import CheckIcon from "@/assets/svg/CheckIcon";
import {ReactNode} from "react";

type Props = {
  isSelected: boolean
  isPending: boolean
  onChange: (checked: boolean | string) => void
  name: string
  icon?: ReactNode
}

export function Checkbox({isSelected, isPending, onChange, name, icon}: Props) {
  return (<div className={'flex gap-4 items-center'}>
        <CheckboxPrimitive.Root
            className={`flex items-center justify-center rounded-sm size-[18px] border border-lines outline-none transition-shadow duration-200 hover:shadow-[0_0_0_2px_rgba(96,108,118,0.3)] ${isSelected ? 'bg-lines' : 'bg-none'}`}
            checked={isSelected}
            onCheckedChange={(e) => onChange(e)}
            disabled={isPending}
            id={name}>

          <CheckboxPrimitive.Indicator>
            <CheckIcon/>
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <LabelPrimitive.Root htmlFor={name} className="cursor-pointer flex gap-2">
          {icon}
          {name}
        </LabelPrimitive.Root>
      </div>

  )
}