import React from 'react';

export default function Link(props) {
  return (
    <a
      {...props}
      className={`${props.className} font-semibold transition-all border-b border-solid border-current hover:text-white hover:border-solid`}
    >
      {props.children}
    </a>
  );
}
