import GithubIcon from "@/assets/svg/GithubIcon";
import TelegramIcon from "@/assets/svg/TelegramIcon";
import LinkedInIcon from "@/assets/svg/LinkedInIcon";

export function Footer() {
  return (
      <div className={'h-[50px] w-full flex items-center justify-between'}>
        <div className={'flex items-center gap-3'}>
          <p>find me in:</p>
          <TelegramIcon className={'hover:text-secondary-white'}/>
          <LinkedInIcon className={'hover:text-secondary-white'}/>
        </div>
        <div className={'flex items-center gap-2.5'}>
          <span>@username</span>
          <GithubIcon className={'hover:text-secondary-white'}/>
        </div>
      </div>

  )
}