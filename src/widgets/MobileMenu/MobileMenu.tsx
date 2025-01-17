'use client'
import {Burger} from "@/components/Burger";
import {Dispatch, SetStateAction} from "react";
import Link from "next/link";

export function MobileMenu({isOpen, setIsOpen}:{isOpen:boolean, setIsOpen: Dispatch<SetStateAction<boolean>>}) {

  const handleClick = () => {
    setIsOpen((isOpen)=>!isOpen)
  }

  return (
      <div className={'flex flex-col w-full max-w-screen-md border-b border-b-lines md:hidden'}>
        <div className={'flex justify-between items-center h-[50px] p-[18px]'}>
          <span>Pavel_Retunskih</span>
          <Burger isOpen={isOpen} setIsOpen={handleClick}/>
        </div>

    {isOpen && <div className={' w-[94%] h-full mx-auto bg-primary-blue mt-[55px] flex' +
        ' flex-col gap-[35px]' +
        ' items-center'}>
      <ul>
        <li onClick={()=>setIsOpen(false)}><Link href="/hello">_hello</Link></li>
        <li onClick={()=>setIsOpen(false)} ><Link href="/about_me">_about-me</Link></li>
        <li onClick={()=>setIsOpen(false)}><Link href="/projects">_projects</Link></li>
        <li onClick={()=>setIsOpen(false)}><Link href="/contact_me">_contact-me</Link></li>
      </ul>
    </div>}
  </div>)
}