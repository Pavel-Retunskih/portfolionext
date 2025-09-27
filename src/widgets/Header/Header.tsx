'use client'

import Link from "next/link";
import {memo} from "react";
import {usePathname} from "next/navigation";
import clsx from "clsx";

export const Header = memo(() => {
  const pathname = usePathname();

  const linkClass = "text-[16px] border-r-2 border-r-lines flex items-center h-full px-8";
  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  return (
      <header className={"hidden md:block w-full border-b border-b-lines"}>
        <nav className={"flex h-[45px] w-full"}>
          <div className={"w-[301px] border-r-2 border-r-lines py-3 text-nowrap"}>
            <h1 className={"text-base pl-8"}>Pavel_Retunskih</h1>
          </div>
          <div className={"flex items-center flex-grow h-full justify-between"}>
            <div className={"flex h-full items-center"}>
              <Link
                  href="/hello"
                  aria-current={isActive("/hello") ? "page" : undefined}
                  className={clsx(linkClass, isActive("/hello") && "border-b border-b-accent-orange")}
              >
                _hello
              </Link>
              <Link
                  href="/about_me"
                  aria-current={isActive("/about_me") ? "page" : undefined}
                  className={clsx(linkClass, isActive("/about_me") && "border-b border-b-accent-orange")}
              >
                _about-me
              </Link>
              <Link
                  href="/projects"
                  aria-current={isActive("/projects") ? "page" : undefined}
                  className={clsx(linkClass, isActive("/projects") && "border-b border-b-accent-orange")}
              >
                _projects
              </Link>
            </div>
            <div className={"flex items-center h-full"}>
              <Link
                  href="/contact_me"
                  aria-current={isActive("/contact_me") ? "page" : undefined}
                  className={clsx(linkClass + ' border-l border-l-lines', isActive("/contact_me") && "border-b" +
                      " border-b-accent-orange")}
              >
                contact-me
              </Link>
            </div>
          </div>
        </nav>
      </header>
  );
});
Header.displayName = 'Header'
