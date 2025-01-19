import GithubIcon from "@/assets/svg/GithubIcon";
import TelegramIcon from "@/assets/svg/TelegramIcon";
import LinkedInIcon from "@/assets/svg/LinkedInIcon";

export function Footer() {
  return (
      <div className={'h-[50px] w-full flex items-center justify-between'}>
        <div className={'flex items-center gap-3'}>
          <p>find me in:</p>
          <div className={'flex items-center px-5 border-x h-[50px] border-x-lines'}>
            <TelegramIcon className={'hover:text-secondary-white'}/>
          </div>
          <div className={'flex items-center px-5 border-r h-[50px] border-r-lines'}>
            <LinkedInIcon className={'hover:text-secondary-white'}/>
          </div>

        </div>
        <div className={'flex items-center gap-2.5'}>
          <span>@username</span>
          <GithubIcon className={'hover:text-secondary-white'}/>
        </div>
      </div>

  )
}