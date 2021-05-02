import React from 'react';

export default function Button(props) {
  return (
    <button
      {...props}
      className={`${props.className} font-medium text-lg w-48 py-2 px-4 rounded-md border-2 border-white transition-all hover:text-gray-800 hover:bg-white duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none`}
    >
      {props.children}
    </button>
  );
}
