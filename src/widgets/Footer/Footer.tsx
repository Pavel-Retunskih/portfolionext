import GithubIcon from "@/assets/svg/GithubIcon";
import TelegramIcon from "@/assets/svg/TelegramIcon";
import LinkedInIcon from "@/assets/svg/LinkedInIcon";
import {memo} from "react";
import Link from "next/link";

export const Footer = memo(() => {

  return (
      <div className={'h-[50px] w-full flex items-center justify-between px-4 md:px-2 border-t border-t-lines'}>
        <div className={'flex h-full items-center gap-3'}>
          <p className={'max-w-[189px] text-nowrap'}>find me in:</p>
          <div className={'flex h-full'}>
            <div className={'flex items-center px-5 border-x h-full border-x-lines'}>
              <Link href={'https://t.me/mimik_z'} target={'_blank'}>
                <TelegramIcon className={'hover:text-secondary-white'}/>
              </Link>
            </div>
            <div className={'flex items-center px-5 border-r h-full border-r-lines'}>
              <Link href={'https://www.linkedin.com/in/pavel-retunskih-5b7ba0179/'} target={'_blank'}>
                <LinkedInIcon className={'hover:text-secondary-white'}/>
              </Link>

            </div>
          </div>


        </div>
        <div className={'flex h-full items-center border-l border-l-lines pl-6 gap-2.5'}>
          <span className={'hidden md:block'}>@Pavel-Retunskih</span>
          <div>
            <Link href={'https://github.com/Pavel-Retunskih'} target={'_blank'}>
              <GithubIcon className={'hover:text-secondary-white'}/>
            </Link>
          </div>

        </div>
      </div>

  )
})
Footer.displayName = 'Footer'