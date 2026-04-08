import {FC, memo} from "react";

type Props = {
  foodCount: number;
  maxFood: number;
}

export const FoodCounter: FC<Props> = memo(({foodCount, maxFood}: Props) => {
  return <div className={'flex flex-col justify-center items-center w-full px-3 mt-[28px]'}>
    <p className={'text-base text-secondary-white text-left'}>{'// food eaten'}</p>
    <ul className={'flex flex-row justify-center items-center flex-wrap gap-3 w-[100px]'}>
      {new Array(maxFood).fill(0).map((_, index) => {
        const isEaten = foodCount > index;
        const isLastEaten = foodCount - 1 === index;
        return (
            <li
                key={index}
                className={`relative w-2 h-2 rounded-full transition-all duration-300 ${isEaten ? 'bg-secondary-aqua' : 'bg-secondary-aqua opacity-20'}`}
            >
              {isLastEaten && (
                  <span className={'absolute inset-0 rounded-full bg-secondary-aqua animate-ping'}></span>
              )}
            </li>
        );
      })}
    </ul>
  </div>
})
FoodCounter.displayName = 'FoodCounter'