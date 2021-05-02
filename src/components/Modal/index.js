import React, { useState, useRef } from 'react';
import { XCircleIcon } from '@heroicons/react/solid';
import './styles.css';

export default function Modal(props) {
  const { children, closeModal, ...otherProps } = props;
  const [closing, setClosing] = useState(false);
  const modalElm = useRef(null);
  const close = () => {
    setClosing(true);
    setTimeout(() => {
      closeModal();
    }, 250);
  };
  return (
    <>
      <style>{`body{overflow:hidden;}`}</style>
      <div
        {...otherProps}
        ref={modalElm}
        className={`modal-component ${props.className} ${closing ? 'closing' : ''}`}
        onClick={(e) => {
          if (e.target === modalElm.current) {
            close();
          }
        }}
      >
        <div className='inner bg-gray-800 w-full md:w-3/5 shadow-xl'>
          <button
            className='rounded-full close focus:outline-none mt-3 mb-3 opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800'
            aria-label='Close Modal'
            onClick={() => close()}
          >
            <XCircleIcon className='text-white h-8 w-8' />
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
