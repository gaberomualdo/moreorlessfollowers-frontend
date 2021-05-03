import { ArrowNarrowRightIcon, PlusCircleIcon, MinusCircleIcon, XIcon, CheckIcon } from '@heroicons/react/solid';
import { useEffect, useState, useRef } from 'react';
import { AnimatedNumber, Button, Footer } from './components/';
import fetchFromServer from './lib/fetchFromServer';
import logoHTML from './lib/logoHTML';
import './lib/main.css';
import serverBase from './lib/serverBase';
import commaNumber from 'comma-number';

const HIGHSCORE_PARAM = 'highscore';

function App() {
  const [playLoading, setPlayLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [playedBefore, setPlayedBefore] = useState(false);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const updateHighScore = () => setHighScore(parseInt(localStorage.getItem(HIGHSCORE_PARAM)) || 0);
  useEffect(() => updateHighScore(), []);

  const [accounts, setAccounts] = useState([]);
  const [gameStatus, setGameStatus] = useState('play');
  const [transitioning, setTransitioning] = useState(false);

  const scrollingGameElm = useRef(null);

  const statusColors = {
    play: 'white',
    gameover: 'red-500',
    correct: 'green-500',
  };
  const statusTextColors = {
    play: 'gray-800',
    gameover: 'white',
    correct: 'white',
  };

  const loadAccount = async () => {
    const newAccount = await fetchFromServer('/get-random-account.php?excluded-ids=' + accounts[accounts.length - 1].id);
    setAccounts([
      ...accounts.map((e) => {
        return { ...e, showAnswer: true };
      }),
      { ...newAccount, showAnswer: false },
    ]);
  };
  const initializeAccounts = async () => {
    const firstAccount = await fetchFromServer('/get-random-account.php');
    const secondAccount = await fetchFromServer('/get-random-account.php?excluded-ids=' + firstAccount.id);
    setAccounts([
      { ...firstAccount, showAnswer: true },
      { ...secondAccount, showAnswer: false },
    ]);
  };

  const nextGame = (status) => {
    setAccounts([...accounts.slice(0, accounts.length - 1), { ...accounts[accounts.length - 1], showAnswer: true }]);
    setTimeout(() => {
      setGameStatus(status);
    }, 500);
    setTimeout(async () => {
      if (status === 'gameover') {
        setTimeout(() => {
          setGameStatus('play');
          setAccounts([]);
          setScore(0);
          setPlaying(false);
          setPlayedBefore(true);
        }, 500);
      } else {
        await loadAccount();
        const newScore = score + 1;
        if (newScore > highScore) {
          localStorage.setItem(HIGHSCORE_PARAM, newScore);
          updateHighScore();
        }
        setScore(newScore);
        setTransitioning(true);
        scrollingGameElm.current.scrollTo(scrollingGameElm.current.scrollWidth, 0);
        setTimeout(() => {
          setGameStatus('play');
          setTransitioning(false);
        }, 600);
      }
    }, 900);
  };

  return (
    <div className='text-white font-sans w-full flex min-h-screen bg-gray-800 flex-col items-center antialiased'>
      <header className='fixed pt-2 px-2 inset-0 h-10 z-50'>
        {playing ? <p className='float-left rounded bg-gray-400 py-1 px-3 font-medium shadow-md'>Score: {score}</p> : null}
        <p className='float-right rounded bg-gradient-to-br from-green-400 to-blue-500 py-1 px-3 font-medium shadow-md'>
          Your High Score: {highScore}
        </p>
      </header>

      {playing ? (
        <main className='smooth-scroll w-full h-screen overflow-hidden whitespace-nowrap' ref={scrollingGameElm}>
          <div
            className='fixed bottom-0 right-0 w-32 py-2 px-3 z-50'
            dangerouslySetInnerHTML={{
              __html: logoHTML,
            }}
          ></div>
          <div
            className={`transition-all transition duration-300 ${
              transitioning ? 'opacity-0' : ''
            } absolute left-1/2 top-0 h-full z-20 transform -translate-x-1/2 flex flex-col justify-center w-16`}
          >
            <div className={`z-auto absolute left-1/2 top-0 h-full z-20 transform -translate-x-1/2 w-1 bg-${statusColors[gameStatus]}`}></div>
            <div
              className={`z-10 w-16 h-16 rounded-md bg-${statusColors[gameStatus]} shadow text-${statusTextColors[gameStatus]} text-2xl text-center uppercase font-bold`}
              style={{ lineHeight: `${16 * 0.25}rem` }}
            >
              {(() => {
                if (gameStatus === 'play') {
                  return 'or';
                } else if (gameStatus === 'gameover') {
                  return <XIcon className='w-12 h-12' style={{ marginTop: '-.1rem' }} />;
                } else if (gameStatus === 'correct') {
                  return <CheckIcon className='w-12 h-12' />;
                }
              })()}
            </div>
          </div>
          {accounts.map((e, i) => {
            return (
              <div className='w-1/2 h-screen relative inline-flex flex-col justify-center items-center' key={i}>
                <div className='absolute inset h-full w-full z-0'>
                  {e.postImageURLs.map((im, imkey) => (
                    <div key={imkey} className='w-1/3 h-1/3 float-left relative'>
                      <img
                        className='w-full h-full absolute inset object-cover object-center'
                        src={`${serverBase}/get-img.php?url=${encodeURIComponent(im)}`}
                        alt={`A recent post from ${e.username} on Instagram`}
                      />
                    </div>
                  ))}
                </div>
                <div className='absolute inset h-full w-full z-10 bg-black opacity-80'></div>
                <div className='z-20 w-96 p-4 rounded-md flex text-gray-900 shadow-md' style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
                  <img
                    className='h-16 w-16 rounded-full flex-initial'
                    src={`${serverBase}/get-img.php?url=${encodeURIComponent(e.pictureURL)}`}
                    alt={`${e.username} on Instagram`}
                    loading='lazy'
                  />
                  <div className='flex-auto flex flex-col justify-center ml-3'>
                    <h1 className='text-xl font-semibold'>{e.name}</h1>
                    <p className='text-gray-500'>
                      {e.showAnswer /* allow for link to be clicked if answer is shown */ ? (
                        <a href={`https://instagram.com/${e.username}`} target='_blank' rel='noopener noreferrer' className='hover:underline'>
                          @{e.username}
                        </a>
                      ) : (
                        <>@{e.username}</>
                      )}
                    </p>
                  </div>
                </div>
                <h2 className='z-20 uppercase text-center w-full text-white font-bold text-xl tracking-wide mt-4 opacity-60'>has</h2>
                <div className='z-20 w-96 h-20 flex items-center'>
                  {e.showAnswer ? (
                    <h2 className='text-5xl text-center font-bold w-full'>
                      <AnimatedNumber number={Math.floor(e.followers / 10000) * 10000} />
                    </h2>
                  ) : (
                    <>
                      <Button
                        className='w-auto flex-auto'
                        onClick={() => {
                          const newStatus = e.followers >= accounts[i - 1].followers ? 'correct' : 'gameover';
                          nextGame(newStatus);
                        }}
                      >
                        <PlusCircleIcon className='mr-2 button-icon' />
                        More
                      </Button>
                      <Button
                        className='w-auto flex-auto ml-2'
                        onClick={() => {
                          const newStatus = e.followers <= accounts[i - 1].followers ? 'correct' : 'gameover';
                          nextGame(newStatus);
                        }}
                      >
                        <MinusCircleIcon className='mr-2 button-icon' />
                        Less
                      </Button>
                    </>
                  )}
                </div>
                <h2 className='z-20 uppercase text-center w-full text-white font-bold text-xl tracking-wide mt-2 opacity-60'>
                  {e.showAnswer ? 'Instagram' : ''} followers
                  {e.showAnswer ? '' : <> than @{accounts[i - 1].username}</>}
                </h2>
              </div>
            );
          })}
        </main>
      ) : (
        <>
          <main className='w-96 max-w-full px-4 md:px-0 flex flex-col justify-center flex-1 text-center'>
            <div
              className='inline-block w-full'
              dangerouslySetInnerHTML={{
                __html: logoHTML,
              }}
            ></div>
            <p className='mt-4 mb-7 text-gray-300 text-lg mx-auto'>A game to guess which accounts have more or less Instagram followers!</p>
            <Button
              onClick={async () => {
                setPlayLoading(true);
                await initializeAccounts();
                setPlayLoading(false);
                setPlaying(true);
              }}
              loading={playLoading}
              className='w-full sm:w-64 text-center mx-auto'
            >
              <>
                Play {playedBefore ? 'Again' : 'Now'} <ArrowNarrowRightIcon className='ml-1 button-icon pulse-right' />
              </>
            </Button>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
