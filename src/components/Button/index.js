import React from 'react';

export default function Button(props) {
  const { loading, ...pr } = props;
  return (
    <button
      {...pr}
      className={`${pr.className} ${
        loading ? 'text-transparent relative' : ''
      } font-medium text-lg w-48 py-2 px-4 rounded-md border-2 border-white transition-all hover:text-gray-800 hover:bg-white duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none disabled:bg-white disabled:opacity-70 disabled:pointer-events-none`}
      {...(loading ? { disabled: true } : {})}
    >
      {pr.children}
      {loading ? (
        <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6'>
          <div className='h-full w-full border-2 border-gray-300 rounded-full loader animate-spin'></div>
        </div>
      ) : null}
    </button>
  );
}
