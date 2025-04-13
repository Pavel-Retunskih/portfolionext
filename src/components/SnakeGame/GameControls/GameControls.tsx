'use client'

import FillArrowIcon from "@/assets/svg/FillArrowIcon";

type Props = {
  setSnakeDirection: (direction: 'up' | 'down' | 'right' | 'left') => void
}

export function GameControls({setSnakeDirection}: Props) {

  return <div>
    <div className={'text-base text-secondary-white'}>
      <p>{'// use keyboard'}</p>
      <p>{'// arrows to play'}</p>
      <div className={'flex gap-1 flex-col'}>
        <div className={'flex items-center justify-center'}>
          <button
              className={'bg-primary-blue border border-secondary-grey w-[50px] h-[28px] rounded-xl flex' +
                  ' justify-center items-center'}
              onClick={() => {
                setSnakeDirection('up')
              }}
          >
            <FillArrowIcon/>
          </button>
        </div>
        <div className={'flex items-center justify-center'}>
          <button
              className={'bg-primary-blue border flex justify-center items-center border-secondary-grey w-[50px]' +
                  ' h-[28px] rounded-xl'}
              onClick={() => {
                setSnakeDirection('left')
              }}
          ><FillArrowIcon className={'-rotate-90'}/>
          </button>
          <button
              className={'bg-primary-blue border flex justify-center items-center border-secondary-grey w-[50px] h-[28px] rounded-xl'}
              onClick={() => {
                setSnakeDirection('down')
              }}
          >
            <FillArrowIcon className={'rotate-180'}/>
          </button>
          <button
              className={'bg-primary-blue border flex justify-center items-center border-secondary-grey w-[50px] h-[28px] rounded-xl'}
              onClick={() => {
                setSnakeDirection('right')
              }}>
            <FillArrowIcon className={'rotate-90'}/>
          </button>
        </div>
      </div>
    </div>
  </div>
}