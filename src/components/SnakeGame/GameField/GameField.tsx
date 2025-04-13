import {Dashboard} from "@/components/SnakeGame/GameField/dashboard/dashboard";
import {useEffect, useRef} from "react";

type Props = {
  gameStatus: 'start' | 'win' | 'lose' | 'idle';
  onStartGame: () => void;
  snake: { x: number; y: number }[];
  foodPosition: { x: number; y: number } | null;
  gridSize: number;
}

export function GameField({onStartGame, gameStatus, snake, foodPosition, gridSize}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw food
    if (foodPosition) {
      ctx.beginPath();
      ctx.arc(
          foodPosition.x + gridSize / 2,
          foodPosition.y + gridSize / 2,
          gridSize / 2,
          0,
          Math.PI * 2
      );
      ctx.fillStyle = 'rgba(67, 217, 173)';
      ctx.fill();
    }

    snake.forEach((segment, index) => {
      ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
      ctx.beginPath();
      ctx.arc(
          segment.x + gridSize / 2,
          segment.y + gridSize / 2,
          gridSize / 2,
          0,
          Math.PI * 2
      );
      ctx.filter = 'blur(1px)'
      ctx.fillStyle = index === 0 ? `rgba(67, 217, 173)` : 'lightgreen';
      ctx.fill();
      ctx.filter = 'none'
    });
  }, [snake, foodPosition, gridSize]);

  return (
      <div className="flex flex-col justify-end rounded-md w-[238px] h-[405px] bg-[rgba(1,22,39,0.84)]">
        {gameStatus === 'start' && <canvas ref={canvasRef} width={238} height={405}/>}
        <Dashboard gameStatus={gameStatus} onStartGame={onStartGame}/>
      </div>
  );
}