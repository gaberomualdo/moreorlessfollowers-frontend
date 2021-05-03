import ReactMarkdown from 'react-markdown';
import aboutPageText from '../../lib/aboutPage';
import React, { useState } from 'react';
import { DataLastUpdated, Link, Modal } from '../';

export default function Footer() {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  return (
    <>
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
  );
}
