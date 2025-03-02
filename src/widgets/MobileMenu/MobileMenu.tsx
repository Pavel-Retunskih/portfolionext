'use client'

import {useState} from "react";
import Link from "next/link";
import {Burger} from "@/components/Burger/Burger";


export function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false);

  return (
      <div className={'flex flex-col w-full max-w-screen-md md:hidden'}>
        <div className={'flex justify-between items-center border-b border-b-lines h-[50px] p-[18px]'}>
          <span className={'text-secondary-grey'}>Pavel_Retunskih</span>
          <Burger isOpen={open} setIsOpenAction={setOpen}/>
        </div>

        {open && <div className={' w-full h-[80vh] mx-auto bg-primary-blue'}>
          <ul className={'flex flex-col items-start'}>
            <li className={'border-b border-b-lines w-full pl-5 py-4'}><Link href={'/hello'}>_hello</Link></li>
            <li className={'border-b border-b-lines w-full pl-5 py-4'}><Link href={'/about_me'}>_about-me</Link></li>
            <li className={'border-b border-b-lines w-full pl-5 py-4'}><Link href={'/projects'}>_projects</Link></li>
            <li className={'border-b border-b-lines w-full pl-5 py-4'}><Link href={'/contact_me'}>_contact-me</Link>
            </li>
          </ul>
        </div>}
      </div>)
}