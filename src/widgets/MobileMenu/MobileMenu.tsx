'use client'
import {Burger} from "@/components/Burger";
import {Dispatch, SetStateAction, useEffect} from "react";
import {usePathname, useRouter} from "next/navigation";

export function MobileMenu({isOpen, setIsOpen}:{isOpen:boolean, setIsOpen: Dispatch<SetStateAction<boolean>>}) {
  const router = useRouter();
  const pathName = usePathname()

  const handleClick = async (path:string) => {
    await router.push(`/${path}`)
  }

  useEffect(() => {
    setIsOpen(false);
  }, [pathName, setIsOpen]);

  return (
      <div className={'flex flex-col w-full max-w-screen-md border-b border-b-lines md:hidden'}>
        <div className={'flex justify-between items-center h-[50px] p-[18px]'}>
          <span>Pavel_Retunskih</span>
          <Burger isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>

    {isOpen && <div className={' w-[94%] h-full mx-auto bg-primary-blue mt-[55px] flex' +
        ' flex-col gap-[35px]' +
        ' items-center'}>
      <ul>
        <li onClick={()=>handleClick('hello') }>_hello</li>
        <li onClick={()=>handleClick('about_me')} >_about-me</li>
        <li onClick={()=>handleClick('projects')}>_projects</li>
        <li onClick={()=>handleClick('contact_me')}>_contact-me</li>
      </ul>
    </div>}
  </div>)
}