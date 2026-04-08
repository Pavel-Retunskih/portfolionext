type Props = {
  gameStatus: 'start' | 'win' | 'lose' | 'idle';
  onStartGame: () => void;
}

const restartBtnClass = "px-[14px] py-[10px] border border-secondary-white rounded-2xl text-secondary-white text-base hover:bg-secondary-white hover:text-primary-black transition-colors";

export function Dashboard({gameStatus, onStartGame}: Props) {
  if (gameStatus === 'start') return null;

  return (
      <div className="absolute inset-0 flex flex-col gap-5 justify-center items-center w-full z-10">
        {gameStatus === 'idle' && (
            <button
                className="px-[14px] py-[10px] bg-accent-orange rounded-2xl text-primary-black text-base hover:opacity-90 transition-opacity"
                onClick={onStartGame}
            >
              start-game
            </button>
        )}
        {gameStatus === 'lose' && (
            <>
              <p className="w-full text-xl text-center rounded-md py-3 text-accent-aqua bg-primary-blue">
                GAME OVER!
              </p>
              <button className={restartBtnClass} onClick={onStartGame}>
                start-again
              </button>
            </>
        )}
        {gameStatus === 'win' && (
            <>
              <p className="w-full text-xl text-center rounded-md py-3 text-accent-aqua bg-primary-blue">
                WELL DONE!
              </p>
              <button className={restartBtnClass} onClick={onStartGame}>
                play-again
              </button>
            </>
        )}
      </div>
  );
}