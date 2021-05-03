import { useEffect, useState } from 'react';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import { Button, Link, DataLastUpdated, Modal } from './components/';
import ReactMarkdown from 'react-markdown';
import './lib/main.css';
import aboutPageText from './lib/aboutPage';

const HIGHSCORE_PARAM = 'highscore';

function App() {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [playLoading, setPlayLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const updateHighScore = () => setHighScore(parseInt(localStorage.getItem(HIGHSCORE_PARAM)) || 0);
  useEffect(() => updateHighScore(), []);

  return (
    <div className='text-white font-sans w-full flex min-h-screen bg-gray-800 flex-col items-center antialiased'>
      <header className='fixed pt-2 px-2 inset-0 h-10'>
        {playing ? (
          <p className='float-left rounded from-yellow-400 to-red-500 py-1 px-3 font-medium' style={{ background: 'rgba(156, 163, 175, .35)' }}>
            Score: {score}
          </p>
        ) : null}
        <p className='float-right rounded bg-gradient-to-br from-green-400 to-blue-500 py-1 px-3 font-medium'>Your High Score: {highScore}</p>
      </header>

      {playing ? null : (
        <>
          <main className='w-96 max-w-full px-4 md:px-0 flex flex-col justify-center flex-1 text-center'>
            <img src='/logo.svg' className='inline-block w-full' alt='' />
            <p className='mt-4 mb-7 text-gray-300 text-lg mx-auto'>A game to guess which accounts have more or less Instagram followers!</p>
            <Button
              onClick={() => {
                setPlayLoading(true);
              }}
              className={`w-full sm:w-64 text-center mx-auto ${playLoading ? 'text-transparent relative' : ''}`}
              {...(playLoading ? { disabled: true } : {})}
            >
              <>
                Play Now <ArrowNarrowRightIcon className='ml-1 h-5 w-5 pulse-right' />
                {playLoading ? (
                  <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6'>
                    <div className='h-full w-full border-2 border-gray-300 rounded-full loader animate-spin'></div>
                  </div>
                ) : null}
              </>
            </Button>
          </main>
          <footer className='flex-initial w-full py-3 px-4 text-gray-400 text-sm flex'>
            <p className='float-left capitalize flex-auto flex-col justify-end hidden md:flex'>
              <DataLastUpdated />
            </p>
            <p className='float-right flex flex-col text-left md:text-right lg:flex-row flex-initial'>
              {[
                <span className='flex md:hidden capitalize'>
                  <DataLastUpdated />
                </span>,
                <>
                  Developed By <Link href='https://gabrielromualdo.com/'>Gabriel Romualdo</Link>
                </>,
                <>
                  Inspired By <Link href='http://www.higherlowergame.com/'>The Higher Lower Game</Link>
                </>,
                <>
                  Read{' '}
                  <Link button onClick={() => setAboutModalOpen(true)}>
                    About This Game
                  </Link>
                </>,
              ].map((e, i) => (
                <span key={i} className='mt-2 lg:mt-0 lg:ml-3'>
                  {e}
                </span>
              ))}
            </p>
          </footer>

          {aboutModalOpen ? (
            <Modal
              closeModal={() => {
                setAboutModalOpen(false);
              }}
            >
              <article className='prose mx-auto invert about-section'>
                <ReactMarkdown>{aboutPageText}</ReactMarkdown>
              </article>
            </Modal>
          ) : null}
        </>
      )}
    </div>
  );
}

export default App;
