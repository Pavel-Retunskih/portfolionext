'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

export function Header() {
  const currentPath = usePathname()
  console.log(currentPath == '/hello')
  const linkClass = 'text-[16px] border-r-2 border-r-lines flex items-center h-full ' +
      ' px-8'
  const activeLinkClass = 'border-b-2 border-b-accent-orange'

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
                    className={(currentPath === '/hello' ? activeLinkClass : ' ') + " " + linkClass}>_hello</Link>
              <Link href="/about_me"
                    className={(currentPath === '/about_me' ? activeLinkClass : ' ') + " " + linkClass + ' ' + 'text-nowrap'}>_about-me</Link>
              <Link href="/projects"
                    className={(currentPath === '/projects' ? activeLinkClass : ' ') + " " + linkClass + ' ' + 'text-nowrap'}>_projects</Link>
            </div>
            <div className={'flex items-center h-full'}>
              <Link href="/contact_me"
                    className={(currentPath === '/contact_me' ? activeLinkClass : ' ') + '   text-[16px] border-l border-l-lines flex items-center h-full  px-8'}>contact-me</Link>
            </div>
          </div>

        </nav>

      </header>
  )
}