'use client'

import {Dispatch, SetStateAction} from "react";
import Link, {useLinkStatus} from "next/link";
import {Burger} from "@/components/Burger/Burger";
import {usePathname} from "next/navigation";
import clsx from "clsx";

type Props = {
  open: boolean
  setOpenAction: Dispatch<SetStateAction<boolean>>
  setNavigatingAction: Dispatch<SetStateAction<boolean>>
}

export function MobileMenu({open, setOpenAction, setNavigatingAction}: Props) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href);
  const itemBase = 'border-b border-b-lines w-full pl-5 py-4';
  const itemActive = 'border-l-2 border-l-accent-orange bg-primary-dark_blue/40 text-secondary-white';

  const onSelect = () => {
    setNavigatingAction(true);
    setOpenAction(false);
  }

  return (
      <div className={'flex bg-primary-dark_blue flex-col w-full md:hidden'}>
        <div className={'flex justify-between items-center border-b border-b-lines h-[50px] p-[18px]'}>
          <span className={'text-secondary-grey'}>Pavel_Retunskih</span>
          <Burger isOpen={open} setIsOpenAction={setOpenAction}/>
        </div>

        <div
            className={`${open ? 'opacity-100' : 'opacity-0 h-0'} transition-all duration-200 ease-in-out w-full mx-auto bg-primary-blue ${!open ? 'pointer-events-none' : ''}`}>
          <ul className={'flex flex-col items-start'}>
            <li className={clsx(itemBase, isActive('/hello') && itemActive)}>
              <Link href={'/hello'} onClick={onSelect} aria-current={isActive('/hello') ? 'page' : undefined}
                    className={'block w-full'}>_hello</Link>
            </li>
            <li className={clsx(itemBase, isActive('/about_me') && itemActive)}>
              <Link href={'/about_me'} onClick={onSelect} aria-current={isActive('/about_me') ? 'page' : undefined}
                    className={'block w-full'}>_about-me</Link>
            </li>
            <li className={clsx(itemBase, isActive('/projects') && itemActive)}>
              <Link href={'/projects'} onClick={onSelect} aria-current={isActive('/projects') ? 'page' : undefined}
                    className={'block w-full'}>_projects</Link>
            </li>
            <li className={clsx(itemBase, isActive('/contact_me') && itemActive)}>
              <Link href={'/contact_me'} onClick={onSelect} aria-current={isActive('/contact_me') ? 'page' : undefined}
                    className={'block w-full'}>_contact-me</Link>
            </li>
          </ul>
        </div>
      </div>)
}
