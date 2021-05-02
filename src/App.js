import { useState } from 'react';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import { Button, Link, DataLastUpdated, Modal } from './components/';
import ReactMarkdown from 'react-markdown';
import './lib/main.css';

function App() {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
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
              Developed By <Link href='https://gabrielromualdo.com/'>Gabriel Romualdo</Link>
            </>,
            <>
              Inspired By <Link href='http://www.higherlowergame.com/'>The Higher Lower Game</Link>
            </>,
            <>
              Read{' '}
              <Link button onClick={() => setAboutModalOpen(true)}>
                About The Game & The Code
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
            <ReactMarkdown>
              {`
# About

More Or Less Followers is a game to guess which accounts have more or less Instagram followers. Data is updated periodically from a wide array of top Instagram accounts, and games are randomly selected from those accounts.

We do not own any of the photos, posts, or other relevant information from Instagram.

### Code & Technologies

More Or Less Followers uses:

 - React.js on the frontend with Tailwind.css
 - PHP on the backend with data stored as JSON
 - A Python data fetching system to get and update Instagram data

This was my first time using Tailwind.css and fetching data from Instagram using the Instaloader package. These two tools were definitely interesting to expose myself to and get familiar with while developing this game.

If you'd like to take a look at the code, see [the GitHub repository for the frontend](https://github.com/xtrp/moreorlessfollowers-frontend). Other relevant repositories with backend and server code are linked there.

### License & Credits

More Or Less Followers is built by [Gabriel Romualdo](https://gabrielromualdo.com). It is inspired by [The Higher Lower Game](http://www.higherlowergame.com/). Most of the code is licensed under the MIT License. See the GitHub repositories for more information.

`}
            </ReactMarkdown>
          </article>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
