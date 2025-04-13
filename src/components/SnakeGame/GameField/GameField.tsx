type Props = {
  gameStatus: 'start' | 'win' | 'lose' | 'idle';
  onStartGame: () => void;
}

export function GameField({onStartGame, gameStatus}: Props) {

  return <div className=" flex flex-col justify-end rounded-md w-[238px] h-[405px] bg-[rgba(1,22,39,0.84)]">


    {gameStatus !== 'start' && <div className={'flex flex-col gap-5 mb-12 justify-center items-center w-full'}>
      {gameStatus === 'idle' && <button
          className="px-[14px] py-[10px]  bg-accent-orange rounded-2xl text-primary-black text-base"
          onClick={() => onStartGame()}
      >
        start-game
      </button>}
      {gameStatus === 'lose' && <>
        <p
            className="w-full text-xl text-center rounded-md py-3  text-accent-aqua bg-primary-blue"
        >
          GAME OVER!
        </p>
        <button>start-again</button>
      </>
      }
      {gameStatus === 'win' && <>
        <p
            className="w-full text-xl text-center rounded-md py-3  text-accent-aqua bg-primary-blue"
        >
          WELL DONE!
        </p>
        <button className={'text-secondary-white'}>play-again</button>
      </>
      }
    </div>}

  </div>
}

