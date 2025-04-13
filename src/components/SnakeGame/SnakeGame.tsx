'use client'
import {useState} from "react";
import {GameField} from "@/components/SnakeGame/GameField/GameField";
import {GameControls} from "@/components/SnakeGame/GameControls/GameControls";
import {FoodCounter} from "@/components/SnakeGame/FoodCounter/FoodCounter";

export function SnakeGame() {
  const [isRunning, setIsRunningGame] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState<'start' | 'win' | 'lose' | 'idle'>("idle")
  const [foodCount, setFoodCount] = useState<number>(10);

  const onStartGameHandler = () => {
    setIsRunningGame(true);
    setGameStatus("start");
  }

  return (
      <div className="hidden md:flex flex-grow flex-col justify-center items-center">
        <div
            className=" flex justify-between w-[510px] h-[475px] border-[1px]  bg-gradient-to-br from-[rgba(23,85,83,0.5)] to-[rgba(67,217,173,0.5)] backdrop-blur-xl border-[#0C1616] rounded-md shadow-inner shadow-white px-[30px] py-[35px]"
        >
          <GameField gameStatus={gameStatus} onStartGame={() => {
            onStartGameHandler()
          }}/>
          <div className={'flex flex-col items-center justify-between'}>
            <div>
              <GameControls/>
              <FoodCounter foodCount={foodCount}/>
            </div>

            <div className={'flex items-center justify-end w-full'}>
              <button className={'border border-secondary-white rounded-xl px-2 py-2 text-secondary-white'}>Skip
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}