'use client'

import Link from "next/link";

import {memo, useMemo} from "react";

import {useCurrentPath} from "@/utils/PathnameProvider/PathnameProvider";

export const Header = memo(() => {
  const currentPath = useCurrentPath()
  const activeLinkClass = 'border-b-2 border-b-accent-orange'
  const linkClasses = useMemo(
      () => ({
        "/hello": currentPath === "/hello" ? activeLinkClass : "",
        "/about_me": currentPath === "/about_me" ? activeLinkClass : "",
        "/projects": currentPath === "/projects" ? activeLinkClass : "",
        "/contact_me": currentPath === "/contact_me" ? activeLinkClass : "",
      }),
      [currentPath]
  );
  const linkClass = 'text-[16px] border-r-2 border-r-lines flex items-center h-full ' +
      ' px-8'

  console.log('Header render')

  return (
      <header className={'hidden md:block' + ' ' + ' w-full'}>
        <nav className={'flex h-[45px] w-full'}>
          <div className={'w-[301px] border-r-2 border-r-lines py-3 text-nowrap'}>
            <h1 className={'text-base'}>
              Pavel_Retunskih</h1>
          </div>
          <div className={'flex items-center flex-grow h-full justify-between'}>
            <div className={'flex h-full items-center'}>
              <Link href="/hello"
                    className={`${linkClasses["/hello"]} ${linkClass}`}>_hello</Link>
              <Link href="/about_me"
                    className={`${linkClasses["/about_me"]} ${linkClass}`}>_about-me</Link>
              <Link href="/projects"
                    className={`${linkClasses["/projects"]} ${linkClass}`}>_projects</Link>
            </div>
            <div className={'flex items-center h-full'}>
              <Link href="/contact_me"
                    className={`${linkClasses["/contact_me"]} text-[16px] border-l border-l-lines flex items-center h-full px-8`}>contact-me</Link>
            </div>
          </div>

        </nav>

      </header>
  )
})
Header.displayName = 'Header'