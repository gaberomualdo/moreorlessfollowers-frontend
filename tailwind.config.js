module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.500'),
            },
            strong: {
              color: theme('colors.gray.200'),
            },
            h1: {
              color: theme('colors.gray.200'),
              textAlign: 'center',
            },
            h2: {
              color: theme('colors.gray.200'),
            },
            h3: {
              color: theme('colors.gray.200'),
            },
            h4: {
              color: theme('colors.gray.200'),
            },
            h5: {
              color: theme('colors.gray.200'),
            },
            h6: {
              color: theme('colors.gray.200'),
            },
          },
        },
      }),
    },
    fontFamily: {
      sans: ['Inter'],
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
    pointerEvents: ({ after }) => after(['disabled']),
    backgroundColor: ({ after }) => after(['disabled']),
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
