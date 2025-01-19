import GithubIcon from "@/assets/svg/GithubIcon";
import TelegramIcon from "@/assets/svg/TelegramIcon";
import LinkedInIcon from "@/assets/svg/LinkedInIcon";

export function Footer() {
  return (
      <div className={'h-[50px] w-full flex items-center justify-between'}>
        <div className={'flex h-full items-center gap-3'}>
          <p className={'max-w-[189px] text-nowrap'}>find me in:</p>
          <div className={'flex h-full'}>
            <div className={'flex items-center px-5 border-x h-full border-x-lines'}>
              <TelegramIcon className={'hover:text-secondary-white'}/>
            </div>
            <div className={'flex items-center px-5 border-r h-full border-r-lines'}>
              <LinkedInIcon className={'hover:text-secondary-white'}/>
            </div>
          </div>


        </div>
        <div className={'flex h-full items-center border-l border-l-lines pl-6 gap-2.5'}>
          <span className={'hidden md:block'}>@username</span>
          <div>
            <GithubIcon className={'hover:text-secondary-white'}/>
          </div>

        </div>
      </div>

  )
}