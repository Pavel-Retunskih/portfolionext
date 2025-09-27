'use client'

import Link from "next/link";

import {memo} from "react";


export const Header = memo(() => {


  const linkClass = 'text-[16px] border-r-2 border-r-lines flex items-center h-full ' +
      ' px-8'
  return (
      <header className={'hidden md:block' + ' ' + ' w-full border-b border-b-lines'}>
        <nav className={'flex h-[45px] w-full'}>
          <div className={'w-[301px] border-r-2 border-r-lines py-3 text-nowrap'}>
            <h1 className={'text-base pl-8'}>
              Pavel_Retunskih</h1>
          </div>
          <div className={'flex items-center flex-grow h-full justify-between'}>
            <div className={'flex h-full items-center'}>
              <Link href="/hello"
                    className={` ${linkClass}`}>_hello</Link>
              <Link href="/about_me"
                    className={` ${linkClass}`}>_about-me</Link>
              <Link href="/projects"
                    className={` ${linkClass}`}>_projects</Link>
            </div>
            <div className={'flex items-center h-full'}>
              <Link href="/contact_me"
                    className={` text-[16px] border-l border-l-lines flex items-center h-full px-8`}>contact-me</Link>
            </div>
          </div>

        </nav>

      </header>
  )
})
Header.displayName = 'Header'