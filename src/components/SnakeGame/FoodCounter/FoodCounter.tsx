import {FC, memo} from "react";

type Props = {
  foodCount: number
}

export const FoodCounter: FC<Props> = memo(({foodCount}: Props) => {
  console.log('счетчик еды', foodCount)
  return <div className={'flex flex-col justify-center items-center w-full px-3 mt-[28px]'}>
    <p className={'text-base text-secondary-white text-left'}>{'// food left'}</p>
    <ul className={'flex flex-row justify-center items-center flex-wrap gap-3 w-[100px]'}>
      {new Array(10).fill(0).map((_, index) => (
          <li
              key={index}
              className={`relative w-2 h-2 rounded-full ${foodCount > index ? 'bg-secondary-aqua' : 'bg-secondary-aqua opacity-40'}`}
          >
            {foodCount > index && (
                <span className={'absolute inset-0 rounded-full bg-secondary-aqua animate-ping'}></span>
            )}
          </li>
      ))}
    </ul>
  </div>
})
FoodCounter.displayName = 'FoodCounter'