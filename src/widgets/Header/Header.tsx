'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

export function Header() {
  const currentPath = usePathname()
  console.log(currentPath == '/hello')
  const linkClass = 'text-[16px] border-r-2 border-r-lines text-center' +
      ' py-4 px-8'
  const activeLinkClass = 'border-b-2 border-b-accent-orange'

  return (
      <header className={'hidden md:block' + ' ' + 'mt-2.5 w-full'}>
        <nav className={'flex h-[45px]'}>
          <div className={'flex  w-[300px] border-r-2 border-r-lines py-4 text-nowrap'}>
            <h1 className={'text-base'}>
              Pavel_Retunskih</h1>
          </div>
          <div className={'flex items-center justify-between w-full'}>
            <div className={'flex items-center'}>

              <Link href="/hello"
                    className={(currentPath === '/hello' ? activeLinkClass : ' ') + " " + linkClass}>_hello</Link>
              <Link href="/about_me"
                    className={(currentPath === '/about_me' ? activeLinkClass : ' ') + " " + linkClass + ' ' + 'text-nowrap'}>_about-me</Link>
              <Link href="/projects"
                    className={(currentPath === '/projects' ? activeLinkClass : ' ') + " " + linkClass + ' ' + 'text-nowrap'}>_projects</Link>
            </div>
            <div className={'flex items-center'}>
              <Link href="/contact_me"
                    className={(currentPath === '/contact_me' ? activeLinkClass : ' ') + " " + 'text-base border-l-2 border-l-lines' +
                        ' col-end-11' +
                        ' col-span-1 py-4 px-8'}>contact-me</Link>
            </div>
          </div>

        </nav>

      </header>
  )
}