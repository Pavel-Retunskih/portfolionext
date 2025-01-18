'use client'

import {Dispatch, SetStateAction} from "react";

type BurgerProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function Burger({isOpen, setIsOpen}:BurgerProps) {
const handleClick = () =>{
  setIsOpen((isOpen)=>!isOpen)
  }
  return (
      <button onClick={handleClick} className={'flex flex-col justify-center items-center'}>
        <span className={`bg-secondary-grey block transition-all duration-300 ease-out 
                    h-[2px] w-6 rounded-sm ${isOpen ?
            'rotate-45 translate-y-[7px]' : ''
        }`}></span>
        <span className={`bg-secondary-grey block transition-all duration-300 ease-out 
                    h-[2px] w-6 rounded-sm my-[5px] ${isOpen ?
            'opacity-0' : 'opacity-100'
        }`}></span>
        <span className={`bg-secondary-grey block transition-all duration-300 ease-out 
                    h-[2px] w-6 rounded-sm ${isOpen ?
            '-rotate-45 -translate-y-[7px]' : ' '
        }`}></span>
      </button>
  )
}