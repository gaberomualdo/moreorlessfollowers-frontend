import React from 'react';

export default function Link(props) {
  const { button, ...pr } = props;
  const clName = `${pr.className} cursor-pointer font-semibold transition-all border-b border-solid border-current hover:text-white focus:text-white focus:outline-none`;
  if (button) {
    return (
      <button {...pr} className={clName}>
        {pr.children}
      </button>
    );
  } else {
    return (
      <a {...pr} className={clName} target={pr.target || '_blank'} rel={pr.rel || 'noreferrer noopener'}>
        {pr.children}
      </a>
    );
  }
}
