import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import { Button, Link, DataLastUpdated } from './components/';
import './lib/main.css';

function App() {
  return (
    <div className='text-white font-sans w-full flex min-h-screen bg-gray-800 flex-col items-center antialiased'>
      <header className='flex-initial'></header>

      <main className='w-96 max-w-full px-4 md:px-0 flex flex-col justify-center flex-1 text-center'>
        <img src='/logo.svg' className='inline-block w-full' alt='' />
        <p className='mt-4 mb-7 text-gray-300 text-lg mx-auto'>A game to guess which accounts have more or less Instagram followers!</p>
        <Button className='w-full sm:w-64 text-center mx-auto'>
          Play Now <ArrowNarrowRightIcon className='ml-1 h-5 w-5 pulse-right' />
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
              Developed By <Link href=''>Gabriel Romualdo</Link>
            </>,
            <>
              Inspired By <Link href=''>The Higher Lower Game</Link>
            </>,
            <>
              Give This a <Link href=''>Star on GitHub</Link>
            </>,
          ].map((e) => (
            <span className='mt-2 lg:mt-0 lg:ml-3'>{e}</span>
          ))}
        </p>
      </footer>
    </div>
  );
}

export default App;
