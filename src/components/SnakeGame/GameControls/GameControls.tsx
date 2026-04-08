'use client'

import FillArrowIcon from "@/assets/svg/FillArrowIcon";

type Direction = 'up' | 'down' | 'right' | 'left';

type Props = {
  setSnakeDirection: (direction: Direction) => void
}

const btnClass = 'bg-primary-blue border border-secondary-grey w-[50px] h-[28px] rounded-xl flex justify-center items-center hover:border-secondary-aqua hover:bg-[rgba(67,217,173,0.08)] active:scale-95 transition-all';

export function GameControls({setSnakeDirection}: Props) {
  return (
      <div>
        <div className={'text-base text-secondary-white'}>
          <p>{'// use keyboard'}</p>
          <p>{'// arrows to play'}</p>
          <div className={'flex gap-1 flex-col mt-2'}>
            <div className={'flex items-center justify-center'}>
              <button className={btnClass} onClick={() => setSnakeDirection('up')} aria-label="Up">
                <FillArrowIcon/>
              </button>
            </div>
            <div className={'flex items-center justify-center gap-1'}>
              <button className={btnClass} onClick={() => setSnakeDirection('left')} aria-label="Left">
                <FillArrowIcon className={'-rotate-90'}/>
              </button>
              <button className={btnClass} onClick={() => setSnakeDirection('down')} aria-label="Down">
                <FillArrowIcon className={'rotate-180'}/>
              </button>
              <button className={btnClass} onClick={() => setSnakeDirection('right')} aria-label="Right">
                <FillArrowIcon className={'rotate-90'}/>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}