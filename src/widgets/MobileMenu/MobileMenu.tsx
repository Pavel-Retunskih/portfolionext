'use client'

import {Dispatch, SetStateAction} from "react";
import Link from "next/link";
import {Burger} from "@/components/Burger/Burger";

type Props = {
  open: boolean
  setOpenAction: Dispatch<SetStateAction<boolean>>
}

export function MobileMenu({open, setOpenAction}: Props) {

  const onClickHandler = () => {
    setOpenAction(!open);
  }

  return (
      <div className={'flex bg-primary-dark_blue flex-col w-full max-w-screen-md md:hidden'}>
        <div className={'flex justify-between items-center border-b border-b-lines h-[50px] p-[18px]'}>
          <span className={'text-secondary-grey'}>Pavel_Retunskih</span>
          <Burger isOpen={open} setIsOpenAction={setOpenAction}/>
        </div>

        {open && <div className={'w-full mx-auto bg-primary-blue'}>
          <ul className={'flex flex-col items-start'}>
            <li className={'border-b border-b-lines w-full pl-5 py-4'}><Link href={'/hello'}
                                                                             onClick={onClickHandler}>_hello</Link>
            </li>
            <li className={'border-b border-b-lines w-full pl-5 py-4'}><Link href={'/about_me'}
                                                                             onClick={onClickHandler}>_about-me</Link>
            </li>
            <li className={'border-b border-b-lines w-full pl-5 py-4'}><Link href={'/projects'}
                                                                             onClick={onClickHandler}>_projects</Link>
            </li>
            <li className={'border-b border-b-lines w-full pl-5 py-4'}><Link href={'/contact_me'}
                                                                             onClick={onClickHandler}>_contact-me</Link>
            </li>
          </ul>
        </div>}
      </div>)
}