'use client'
import Link from "next/link";
import {SnakeGame} from "@/components/SnakeGame/SnakeGame";


export default function HelloPage() {
  return (
      <div
          style={{backgroundSize: '70%', backgroundPosition: '100% 30%'}}
          className="flex flex-col gap-8 lg:flex-row items-center w-full justify-between  bg-custom-bg bg-no-repeat bg-auto">
        <div className="md:mt-14">
          <div>
            <p className="text-[18px] text-white">Hi all. I am</p>
            <h1 className="text-[62px] text-secondary-white">Pavel Retunskih</h1>
            <p className="text-[32px] mb-20 text-secondary-purple">&gt; Front-end developer</p>
          </div>
          <div className="my-6">
            <p className="text-base text-secondary-grey">{'//'} complete the game to continue</p>
            <p className="text-base text-secondary-grey">{'//'} you can also see it on my Github page</p>
          </div>
          <p className="text-base">
            <span className="text-secondary-purple">const</span>
            <span className="text-accent-aqua"> githubLink</span> ={" "}
            <span className="text-accent-pink">
            <Link target="_blank" href="https://github.com/Pavel-Retunskih">
              &#34;https://github.com/Pavel-Retunskih&#34;
            </Link>
          </span>
          </p>
        </div>
        <SnakeGame/>
      </div>
  );
}
