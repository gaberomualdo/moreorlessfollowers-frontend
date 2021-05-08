import { ArrowNarrowRightIcon, PlusCircleIcon, MinusCircleIcon, XIcon, CheckIcon } from '@heroicons/react/solid';
import { useEffect, useState, useRef } from 'react';
import { AnimatedNumber, Button, Footer, ScreenHeightStyleContainer } from './components/';
import fetchFromServer from './lib/fetchFromServer';
import logoHTML from './lib/logoHTML';
import smoothScroll from './lib/smoothScroll';
import './lib/main.css';
import serverBase from './lib/serverBase';
import md5 from 'md5';
import seedrandom from 'seedrandom';

const HIGHSCORE_PARAM = 'highscore';

const statusColors = {
  play: 'bg-white',
  gameover: 'bg-red-500',
  correct: 'bg-green-500',
};
const statusTextColors = {
  play: 'text-gray-800',
  gameover: 'text-white',
  correct: 'text-white',
};

const getProxyURL = (url) => `${serverBase}/images/${md5(url)}.jpg`;

function App() {
  const [playLoading, setPlayLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [playedBefore, setPlayedBefore] = useState(false);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [accounts, setAccounts] = useState([]);
  const [gameStatus, setGameStatus] = useState('play');
  const [transitioning, setTransitioning] = useState(false);

  const [overlayEnabled, setOverlayEnabled] = useState(false);
  const [overlayOpaque, setOverlayOpaque] = useState(false);

  const scrollingGameElm = useRef(null);

  const updateHighScore = () => setHighScore(parseInt(localStorage.getItem(HIGHSCORE_PARAM)) || 0);
  useEffect(() => updateHighScore(), []);

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
        setOverlayEnabled(true);
        setTimeout(() => {
          setOverlayOpaque(true);
        }, 300);
        setTimeout(() => {
          setGameStatus('play');
          setAccounts([]);
          setScore(0);
          setPlaying(false);
          setPlayedBefore(true);
          setOverlayEnabled(false);
          setOverlayOpaque(false);
        }, 550);
      } else {
        await loadAccount();
        const newScore = score + 1;
        if (newScore > highScore) {
          localStorage.setItem(HIGHSCORE_PARAM, newScore);
          updateHighScore();
        }
        setScore(newScore);
        setTransitioning(true);
        if (window.innerWidth < 768) {
          // less than responsive medium (md) on tailwind, scroll column
          smoothScroll(scrollingGameElm.current, 'vertical');
        } else {
          smoothScroll(scrollingGameElm.current, 'horizontal');
        }
        setTimeout(() => {
          setGameStatus('play');
          setTransitioning(false);
        }, 600);
      }
    }, 900);
  };

  const collageBackgroundStyle = {
    backgroundImage: `
    linear-gradient( rgba(31, 41, 55, .95), rgba(31, 41, 55, .95) ),
    url(${serverBase}/get-collage-img.php)
    `,
    backgroundSize: `cover, 30rem auto`,
    backgroundPosition: `center, center`,
  };

  return (
    <ScreenHeightStyleContainer>
      <div className='text-white font-sans w-full flex my-min-h-screen flex-col items-center antialiased' style={collageBackgroundStyle}>
        <header className='fixed pt-2 px-2 inset-0 h-10 z-50'>
          {playing ? <p className='float-left rounded bg-gray-400 py-1 px-3 font-medium shadow-md'>Score: {score}</p> : null}
          <p className='float-right rounded bg-gradient-to-br from-green-400 to-blue-500 py-1 px-3 font-medium shadow-md'>
            Your High Score: {highScore}
          </p>
        </header>

        {playing ? (
          <main className='w-full my-h-screen overflow-hidden md:whitespace-nowrap' ref={scrollingGameElm}>
            <a
              className='hidden md:block fixed bottom-0 right-0 w-32 py-2 px-3 z-50 opacity-70 hover:opacity-100 transition-all'
              dangerouslySetInnerHTML={{
                __html: logoHTML,
              }}
              href='./'
            ></a>
            <div
              className={`transition-all transition duration-300 ${
                transitioning ? 'opacity-0' : ''
              } absolute left-0 md:left-1/2 top-1/2 md:top-0 h-16 md:h-full z-20 transform -translate-y-1/2 md:-translate-x-1/2 md:translate-y-0 flex flex-row md:flex-col justify-center w-full md:w-16`}
            >
              <div
                className={`z-auto absolute left-0 md:left-1/2 top-1/2 md:top-0 h-1 md:h-full z-20 transform -translate-y-1/2 md:translate-y-0 md:-translate-x-1/2 w-full md:w-1 ${statusColors[gameStatus]}`}
              ></div>
              <div
                className={`transform scale-90 md:scale-100 z-10 w-16 h-16 rounded-md ${statusColors[gameStatus]} shadow ${statusTextColors[gameStatus]} text-2xl text-center uppercase font-bold`}
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
                <div
                  className='w-full my-h-screen-1/2 md:w-1/2 md:my-h-screen relative align-top inline-flex flex-col justify-center items-center'
                  key={i}
                >
                  <div className='absolute inset-0 h-full w-full z-0'>
                    {e.postImageURLs.map((im, imkey) => (
                      <div key={imkey} className='w-1/3 h-1/3 float-left relative bg-cover bg-center'>
                        <img
                          className='w-full h-full absolute inset object-cover object-center'
                          src={getProxyURL(im)}
                          alt={`A recent post from ${e.username} on Instagram`}
                          onError={(evt) => {
                            const placeholderSrc = '/post-placeholder.jpg';
                            const newSrc = getProxyURL(e.postImageURLs[Math.floor(seedrandom(e.username)() * e.postImageURLs.length)]);
                            if (evt.target.src !== newSrc) {
                              evt.target.src = newSrc;
                            } else if (evt.target.src !== placeholderSrc) {
                              evt.target.src = placeholderSrc;
                            } else {
                              // none of the images are working
                            }
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className='absolute inset-0 h-full w-full z-10 bg-black opacity-80'></div>5
                  <div className='z-20 w-10/12 md:w-8/12 lg:w-96 p-1 md:p-4 rounded-md flex text-gray-900 shadow-lg bg-white'>
                    <img
                      className='h-16 w-16 rounded-md md:rounded-full flex-initial bg-cover bg-center'
                      src={getProxyURL(e.pictureURL)}
                      onError={(e) => {
                        const placeholderSrc = '/picture-placeholder.jpg';
                        if (e.target.src !== placeholderSrc) {
                          e.target.src = placeholderSrc;
                        }
                      }}
                      alt={`${e.username} on Instagram`}
                      loading='lazy'
                    />
                    <div className='flex-initial flex flex-col justify-center ml-3' style={{ width: `calc(100% - ${19 * 0.25}rem)` }}>
                      <h1 className='text-xl font-semibold w-full truncate'>{e.name}</h1>
                      <p className='text-gray-500 w-full truncate'>
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
                  <h2 className='z-20 uppercase text-center w-full text-white font-bold text-lg md:text-xl tracking-wide mt-1 md:mt-4 opacity-60'>
                    has
                  </h2>
                  <div className={`z-20 w-10/12 md:w-8/12 lg:w-96 ${e.showAnswer ? 'flex-row h-10' : 'py-1 lg:py-0'} flex items-center lg:h-20`}>
                    {e.showAnswer ? (
                      <h2 className='text-4xl lg:text-5xl text-center font-bold w-full'>
                        <AnimatedNumber number={Math.floor(e.followers / 10000) * 10000} />
                      </h2>
                    ) : (
                      <>
                        <Button
                          className='w-auto flex-auto pr-6 lg:pr-8'
                          onClick={() => {
                            const newStatus = e.followers >= accounts[i - 1].followers ? 'correct' : 'gameover';
                            nextGame(newStatus);
                          }}
                        >
                          <PlusCircleIcon className='mr-2 button-icon' />
                          More
                        </Button>
                        <Button
                          className='w-auto flex-auto ml-2 pr-6 lg:pr-8'
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
                  <h2 className='z-20 uppercase text-center w-full text-white font-bold text-lg md:text-xl tracking-wide mt-1 md:mt-2 opacity-60'>
                    {e.showAnswer ? 'Instagram' : ''} followers
                    {e.showAnswer ? '' : <> than @{accounts[i - 1].username}</>}
                  </h2>
                </div>
              );
            })}

            {overlayEnabled ? (
              <div
                className={`fixed inset-0 w-full my-h-screen bg-gray-800 transition-all duration-300 ${overlayOpaque ? 'opacity-100' : 'opacity-0'}`}
                style={{ ...collageBackgroundStyle, zIndex: 9999 }}
              ></div>
            ) : null}
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
    </ScreenHeightStyleContainer>
  );
}

export default App;
