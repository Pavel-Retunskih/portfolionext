'use client'

export function Burger({isOpen, setIsOpen}:{isOpen:boolean, setIsOpen:()=>void}) {

  return (
      <button onClick={()=>setIsOpen()} className={'flex flex-col justify-center items-center'}>
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