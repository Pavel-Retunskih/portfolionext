'use client'

import {useEffect, useState} from "react";
import Link from "next/link";
import {Burger} from "@/components/Burger/Burger";


export function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'auto';
  }, [open]);

  return (
      <div className={'flex inset-0 bg-primary-dark_blue flex-col w-full max-w-screen-md md:hidden'}>
        <div className={'flex justify-between items-center border-b border-b-lines h-[50px] p-[18px]'}>
          <span className={'text-secondary-grey'}>Pavel_Retunskih</span>
          <Burger isOpen={open} setIsOpenAction={setOpen}/>
        </div>

        {open && <div className={' w-full h-[100vh] mx-auto bg-primary-blue'}>
          <ul className={'flex flex-col items-start'}>
            <li className={'border-b border-b-lines w-full pl-5 py-4'}><Link href={'/hello'}
                                                                             onClick={() => setOpen(false)}>_hello</Link>
            </li>
            <li className={'border-b border-b-lines w-full pl-5 py-4'}><Link href={'/about_me'}
                                                                             onClick={() => setOpen(false)}>_about-me</Link>
            </li>
            <li className={'border-b border-b-lines w-full pl-5 py-4'}><Link href={'/projects'}
                                                                             onClick={() => setOpen(false)}>_projects</Link>
            </li>
            <li className={'border-b border-b-lines w-full pl-5 py-4'}><Link href={'/contact_me'}
                                                                             onClick={() => setOpen(false)}>_contact-me</Link>
            </li>
          </ul>
        </div>}
      </div>)
}