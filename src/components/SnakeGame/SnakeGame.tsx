'use client'
import {useCallback, useEffect, useRef, useState} from "react";
import {GameField} from "@/components/SnakeGame/GameField/GameField";
import {GameControls} from "@/components/SnakeGame/GameControls/GameControls";
import {FoodCounter} from "@/components/SnakeGame/FoodCounter/FoodCounter";

type Position = { x: number; y: number };
type Direction = 'up' | 'down' | 'right' | 'left';

export function SnakeGame() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState<'start' | 'win' | 'lose' | 'idle'>("idle");
  const [snake, setSnake] = useState<Position[]>([{x: 100, y: 100}]);
  const [direction, setDirection] = useState<Direction>("up");
  const [nextDirection, setNextDirection] = useState<Direction>("up");
  const [foodCount, setFoodCount] = useState<number>(0);
  const [foodPosition, setFoodPosition] = useState<Position | null>(null);
  const [speed, _] = useState<number>(100);
  const foodPositionRef = useRef<Position | null>(null);
  const gridSize = 10;


  useEffect(() => {
    foodPositionRef.current = foodPosition;
  }, [foodPosition]);


  const startGame = () => {
    setIsRunning(true);
    setGameStatus("start");
    setSnake([{x: 100, y: 100}, {x: 110, y: 100}, {x: 120, y: 100}]);
    setDirection("up");
    setNextDirection("up");
    setFoodCount(0);
    spawnFood();
  };
  const gameOver = () => {
    setIsRunning(false);
    setGameStatus("lose");
  };

  const spawnFood = useCallback(() => {
    const maxX = Math.floor(238 / gridSize);
    const maxY = Math.floor(405 / gridSize);

    let attempts = 0;
    let newFood: Position;

    do {
      newFood = {
        x: Math.floor(Math.random() * maxX) * gridSize,
        y: Math.floor(Math.random() * maxY) * gridSize,
      };
      attempts++;
    } while (snake.some(s => s.x === newFood.x && s.y === newFood.y) && attempts < 100);

    setFoodPosition(newFood);
  }, [snake]);

  const moveSnake = useCallback(() => {
    setDirection(nextDirection);

    setSnake(prevSnake => {
      const head = {...prevSnake[0]};

      switch (nextDirection) {
        case 'up':
          head.y -= gridSize;
          break;
        case 'down':
          head.y += gridSize;
          break;
        case 'left':
          head.x -= gridSize;
          break;
        case 'right':
          head.x += gridSize;
          break;
      }

      if (
          head.x < 0 || head.x >= 238 ||
          head.y < 0 || head.y >= 405 ||
          prevSnake.some((segment, index) => index > 0 && segment.x === head.x && segment.y === head.y)
      ) {
        gameOver();
        return prevSnake;
      }

      const newSnake = [head, ...prevSnake];

      const currentFood = foodPositionRef.current;
      const isFoodEaten = currentFood && head.x === currentFood.x && head.y === currentFood.y;

      if (isFoodEaten) {
        setFoodCount(prev => {
          console.log('Съел еду', prev);
          return prev + 1;
        });
        setFoodPosition(null);
        spawnFood();
        return newSnake; // растёт
      }

      newSnake.pop(); // не еда — обычный ход
      return newSnake;
    });
  }, [nextDirection, spawnFood, gridSize]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isRunning) return;

      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'down') setNextDirection('up');
          break;
        case 'ArrowDown':
          if (direction !== 'up') setNextDirection('down');
          break;
        case 'ArrowLeft':
          if (direction !== 'right') setNextDirection('left');
          break;
        case 'ArrowRight':
          if (direction !== 'left') setNextDirection('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRunning, direction]);


  useEffect(() => {
    if (!isRunning) return;


    const gameInterval = setInterval(moveSnake, speed);
    return () => clearInterval(gameInterval);
  }, [isRunning, nextDirection, speed, moveSnake]);

  return (
      <div className="hidden md:flex flex-grow flex-col justify-center items-center">
        <div
            className="flex justify-between w-[510px] h-[475px] border-[1px] bg-gradient-to-br from-[rgba(23,85,83,0.5)] to-[rgba(67,217,173,0.5)] backdrop-blur-xl border-[#0C1616] rounded-md shadow-inner shadow-white px-[30px] py-[35px]">
          <GameField
              gameStatus={gameStatus}
              onStartGame={startGame}
              snake={snake}
              foodPosition={foodPosition}
              gridSize={gridSize}
          />
          <div className="flex flex-col items-center justify-between">
            <div>
              <GameControls setSnakeDirection={setNextDirection}/>
              <FoodCounter foodCount={foodCount}/>
            </div>
            <div className="flex items-center justify-end w-full">
              <button className="border border-secondary-white rounded-xl px-2 py-2 text-secondary-white">
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}