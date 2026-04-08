'use client'
import {useCallback, useEffect, useRef, useState} from "react";
import {GameField} from "@/components/SnakeGame/GameField/GameField";
import {GameControls} from "@/components/SnakeGame/GameControls/GameControls";
import {FoodCounter} from "@/components/SnakeGame/FoodCounter/FoodCounter";

type Position = { x: number; y: number };
type Direction = 'up' | 'down' | 'right' | 'left';

const FIELD_WIDTH = 238;
const FIELD_HEIGHT = 405;
const GRID_SIZE = 16;
const SPEED = 100;
const MAX_FOOD = 10;

const OPPOSITE: Record<Direction, Direction> = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left',
};

export function SnakeGame() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState<'start' | 'win' | 'lose' | 'idle'>("idle");
  const [snake, setSnake] = useState<Position[]>([{x: 100, y: 100}]);
  const [foodCount, setFoodCount] = useState<number>(0);
  const [foodPosition, setFoodPosition] = useState<Position | null>(null);

  // Refs to avoid stale closures in the game loop
  const directionRef = useRef<Direction>("up");
  const nextDirectionRef = useRef<Direction>("up");
  const snakeRef = useRef<Position[]>([{x: 100, y: 100}]);
  const foodPositionRef = useRef<Position | null>(null);
  const isRunningRef = useRef<boolean>(false);

  useEffect(() => {
    foodPositionRef.current = foodPosition;
  }, [foodPosition]);

  useEffect(() => {
    snakeRef.current = snake;
  }, [snake]);

  const spawnFood = useCallback(() => {
    const maxX = Math.floor(FIELD_WIDTH / GRID_SIZE);
    const maxY = Math.floor(FIELD_HEIGHT / GRID_SIZE);
    const currentSnake = snakeRef.current;

    let newFood: Position;
    let attempts = 0;
    do {
      newFood = {
        x: Math.floor(Math.random() * maxX) * GRID_SIZE,
        y: Math.floor(Math.random() * maxY) * GRID_SIZE,
      };
      attempts++;
    } while (currentSnake.some(s => s.x === newFood.x && s.y === newFood.y) && attempts < 100);

    setFoodPosition(newFood);
    foodPositionRef.current = newFood;
  }, []);

  const startGame = useCallback(() => {
    const initialSnake = [{x: 96, y: 96}, {x: 112, y: 96}, {x: 128, y: 96}];
    snakeRef.current = initialSnake;
    directionRef.current = "up";
    nextDirectionRef.current = "up";

    setIsRunning(true);
    isRunningRef.current = true;
    setGameStatus("start");
    setSnake(initialSnake);
    setFoodCount(0);
    spawnFood();
  }, [spawnFood]);

  const gameOver = useCallback(() => {
    setIsRunning(false);
    isRunningRef.current = false;
    setGameStatus("lose");
  }, []);

  const moveSnake = useCallback(() => {
    directionRef.current = nextDirectionRef.current;
    const currentDir = directionRef.current;

    setSnake(prevSnake => {
      const head = {...prevSnake[0]};

      switch (currentDir) {
        case 'up':    head.y -= GRID_SIZE; break;
        case 'down':  head.y += GRID_SIZE; break;
        case 'left':  head.x -= GRID_SIZE; break;
        case 'right': head.x += GRID_SIZE; break;
      }

      const hitWall = head.x < 0 || head.x >= FIELD_WIDTH || head.y < 0 || head.y >= FIELD_HEIGHT;
      const hitSelf = prevSnake.some((seg, i) => i > 0 && seg.x === head.x && seg.y === head.y);

      if (hitWall || hitSelf) {
        gameOver();
        return prevSnake;
      }

      const newSnake = [head, ...prevSnake];
      const currentFood = foodPositionRef.current;

      if (currentFood && head.x === currentFood.x && head.y === currentFood.y) {
        setFoodCount(prev => {
          const next = prev + 1;
          if (next >= MAX_FOOD) {
            setIsRunning(false);
            isRunningRef.current = false;
            setGameStatus("win");
          } else {
            spawnFood();
          }
          return next;
        });
        setFoodPosition(null);
        foodPositionRef.current = null;
        snakeRef.current = newSnake;
        return newSnake;
      }

      newSnake.pop();
      snakeRef.current = newSnake;
      return newSnake;
    });
  }, [gameOver, spawnFood]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isRunningRef.current) return;

      const keyMap: Record<string, Direction> = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right',
      };

      const newDir = keyMap[e.key];
      if (!newDir) return;

      // Prevent reversing into itself
      if (newDir === OPPOSITE[directionRef.current]) return;

      e.preventDefault();
      nextDirectionRef.current = newDir;
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDirectionButton = useCallback((dir: Direction) => {
    if (!isRunningRef.current) return;
    if (dir === OPPOSITE[directionRef.current]) return;
    nextDirectionRef.current = dir;
  }, []);

  useEffect(() => {
    if (!isRunning) return;
    const gameInterval = setInterval(moveSnake, SPEED);
    return () => clearInterval(gameInterval);
  }, [isRunning, moveSnake]);

  return (
      <div className="hidden md:flex flex-grow flex-col justify-center items-center">
        <div
            className="flex justify-between w-[510px] h-[475px] border-[1px] bg-gradient-to-br from-[rgba(23,85,83,0.5)] to-[rgba(67,217,173,0.5)] backdrop-blur-xl border-[#0C1616] rounded-md shadow-inner shadow-white px-[30px] py-[35px]">
          <GameField
              gameStatus={gameStatus}
              onStartGame={startGame}
              snake={snake}
              foodPosition={foodPosition}
              gridSize={GRID_SIZE}
          />
          <div className="flex flex-col items-center justify-between">
            <div>
              <GameControls setSnakeDirection={handleDirectionButton}/>
              <FoodCounter foodCount={foodCount} maxFood={MAX_FOOD}/>
            </div>
          </div>
        </div>
      </div>
  );
}