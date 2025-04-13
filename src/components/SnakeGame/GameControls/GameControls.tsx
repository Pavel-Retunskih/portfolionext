'use client'

export function GameControls() {

  return <div>
    <div className={'text-base text-secondary-white'}>
      <p>{'// use keyboard'}</p>
      <p>{'// arrows to play'}</p>
      <div className={'flex gap-1 flex-col'}>
        <div className={'flex items-center justify-center'}>
          <button
              className={'bg-primary-blue border border-secondary-grey w-[50px] h-[28px] rounded-xl'}></button>
        </div>
        <div className={'flex items-center justify-center'}>
          <button
              className={'bg-primary-blue border border-secondary-grey w-[50px] h-[28px] rounded-xl'}></button>
          <button
              className={'bg-primary-blue border border-secondary-grey w-[50px] h-[28px] rounded-xl'}></button>
          <button
              className={'bg-primary-blue border border-secondary-grey w-[50px] h-[28px] rounded-xl'}></button>
        </div>
      </div>
    </div>
  </div>
}