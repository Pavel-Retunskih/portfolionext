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

  const foodPhaseRef = useRef(0);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- subtle grid ---
      ctx.strokeStyle = 'rgba(255,255,255,0.025)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // --- food: rotating diamond with pulse glow ---
      if (foodPosition) {
        const cx = foodPosition.x + gridSize / 2;
        const cy = foodPosition.y + gridSize / 2;
        const pulse = 0.5 + 0.5 * Math.sin(foodPhaseRef.current * 0.1);
        // food is visually larger than one grid cell
        const r = gridSize * 0.72 * (0.88 + 0.12 * pulse);
        const angle = foodPhaseRef.current * 0.035;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);

        // wide soft glow ring
        ctx.shadowColor = `rgba(67,217,173,${0.55 + 0.35 * pulse})`;
        ctx.shadowBlur = 18 + 10 * pulse;

        // diamond shape
        ctx.beginPath();
        ctx.moveTo(0, -r);
        ctx.lineTo(r * 0.68, 0);
        ctx.lineTo(0, r);
        ctx.lineTo(-r * 0.68, 0);
        ctx.closePath();

        const grad = ctx.createRadialGradient(0, -r * 0.25, 0, 0, 0, r);
        grad.addColorStop(0, 'rgba(210,255,240,1)');
        grad.addColorStop(0.45, 'rgba(67,217,173,1)');
        grad.addColorStop(1, 'rgba(15,110,80,0.85)');
        ctx.fillStyle = grad;
        ctx.fill();

        // bright inner highlight
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(0, -r * 0.28, r * 0.18, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.fill();

        ctx.restore();
        ctx.shadowBlur = 0;
      }

      // --- snake body: connected tube ---
      if (snake.length > 1) {
        const tubeR = gridSize * 0.52;

        for (let i = snake.length - 1; i > 0; i--) {
          const t = 1 - i / snake.length;
          const alpha = 0.2 + 0.65 * t;
          const green = Math.round(160 + 55 * t);

          ctx.strokeStyle = `rgba(50,${green},110,${alpha})`;
          ctx.lineWidth = tubeR * 2;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.shadowColor = `rgba(67,217,173,${0.2 * t})`;
          ctx.shadowBlur = 6 * t;

          ctx.beginPath();
          ctx.moveTo(snake[i].x + gridSize / 2, snake[i].y + gridSize / 2);
          ctx.lineTo(snake[i - 1].x + gridSize / 2, snake[i - 1].y + gridSize / 2);
          ctx.stroke();
        }
        ctx.shadowBlur = 0;
      }

      // --- head: bright orb with strong glow ---
      if (snake.length > 0) {
        const hx = snake[0].x + gridSize / 2;
        const hy = snake[0].y + gridSize / 2;
        const r = gridSize * 0.52;

        ctx.shadowColor = 'rgba(67,217,173,0.95)';
        ctx.shadowBlur = 18;

        const headGrad = ctx.createRadialGradient(hx - r * 0.3, hy - r * 0.3, 0, hx, hy, r);
        headGrad.addColorStop(0, 'rgba(220,255,245,1)');
        headGrad.addColorStop(0.45, 'rgba(67,217,173,1)');
        headGrad.addColorStop(1, 'rgba(20,140,100,0.9)');

        ctx.beginPath();
        ctx.arc(hx, hy, r, 0, Math.PI * 2);
        ctx.fillStyle = headGrad;
        ctx.fill();
        ctx.shadowBlur = 0;

        // inner highlight on head
        ctx.beginPath();
        ctx.arc(hx - r * 0.28, hy - r * 0.28, r * 0.22, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        ctx.fill();
      }

      foodPhaseRef.current += 1;
    };

    const animate = () => {
      drawFrame();
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [snake, foodPosition, gridSize]);

  const isActive = gameStatus === 'start';

  return (
      <div className="relative flex flex-col justify-end rounded-md w-[238px] h-[405px] bg-[rgba(1,22,39,0.84)] overflow-hidden">
        <canvas
            ref={canvasRef}
            width={238}
            height={405}
            className={`absolute inset-0 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-20'}`}
        />
        <Dashboard gameStatus={gameStatus} onStartGame={onStartGame}/>
      </div>
  );
}